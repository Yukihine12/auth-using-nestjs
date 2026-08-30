import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...createUserDto
    });
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(email, updateUserDto);
    return this.userRepository.findOneBy({ email });
  }

  async remove(email: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      return { message: `User dengan #${email} tidak ditemukan` };
    }
    await this.userRepository.delete(email);
    return { message: `User dengan #${email} berhasil dihapus` };
  }
}
