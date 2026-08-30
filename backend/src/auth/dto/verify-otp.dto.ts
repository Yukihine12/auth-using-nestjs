import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class VerifyOtpDto {
    @IsEmail({}, { message: 'Format email salah atau tidak valid' })
    @IsNotEmpty({ message: 'Email tidak boleh kosong' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Kode OTP tidak boleh kosong' })
    code: string;
}

