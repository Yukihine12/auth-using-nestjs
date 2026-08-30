import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Otp } from './entities/otp.entity';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Otp)
    private readonly otpRepository: Repository<Otp>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // 1. Fungsi Minta Kode OTP
  async requestOtp(requestOtpDto: RequestOtpDto) {
    const { email } = requestOtpDto;

    // A. Generate 6 digit angka acak (100000 - 999999)
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // B. Atur waktu kadaluarsa (5 menit dari sekarang)
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // C. Simpan atau perbarui data OTP di database
    let otpRecord = await this.otpRepository.findOneBy({ email });
    if (!otpRecord) {
      otpRecord = this.otpRepository.create({
        email,
        code,
        expires_at: expiresAt,
        verified_at: null,
      });
    } else {
      otpRecord.code = code;
      otpRecord.expires_at = expiresAt;
      otpRecord.verified_at = null;
    }

    await this.otpRepository.save(otpRecord);

    // D. Print di terminal log untuk simulasi (sebelum pasang Nodemailer)
    console.log(`\n========================================`);
    console.log(`📩 [SIMULASI EMAIL OTP]`);
    console.log(`Penerima : ${email}`);
    console.log(`Kode OTP : ${code}`);
    console.log(`Expired  : ${expiresAt.toLocaleTimeString()}`);
    console.log(`========================================\n`);

    return { message: `Kode OTP berhasil dikirim ke email ${email}` };
  }

  // 2. Fungsi Verifikasi Kode OTP
  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { email, code } = verifyOtpDto;

    // A. Cari OTP di database berdasarkan email
    const otpRecord = await this.otpRepository.findOneBy({ email });
    if (!otpRecord) {
      throw new UnauthorizedException('Kode OTP belum pernah diminta atau tidak ditemukan');
    }

    // B. Cek apakah kodenya cocok
    if (otpRecord.code !== code) {
      throw new UnauthorizedException('Kode OTP yang Anda masukkan salah');
    }

    // C. Cek apakah kodenya sudah kadaluarsa (lebih dari 5 menit)
    if (new Date() > otpRecord.expires_at) {
      throw new UnauthorizedException('Kode OTP sudah kadaluarsa, silakan minta kode baru');
    }

    // D. Tandai bahwa OTP sudah sukses diverifikasi
    otpRecord.verified_at = new Date();
    await this.otpRepository.save(otpRecord);

    // E. Cek apakah user sudah terdaftar di database 'users'
    let user = await this.usersService.findByEmail(email);
    let isNewUser = false;

    if (!user) {
      // Jika user baru, buatkan baris akun baru
      user = await this.usersService.create({ email } as any);
      isNewUser = true;
    }

    // F. Terbitkan JWT Access Token
    const payload = { sub: user.email, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      message: 'Login berhasil',
      access_token: accessToken,
      is_new_user: isNewUser,
    };
  }
}
