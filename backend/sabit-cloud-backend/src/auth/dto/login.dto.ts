import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin@yukicloud.com', description: 'Email pengguna' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'SecretPassword123!', description: 'Password pengguna' })
  @IsString()
  @MinLength(8)
  password: string;
}
