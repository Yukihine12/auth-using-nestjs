import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'Muqtada Backend', description: 'Nama lengkap user' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'admin@yukicloud.com', description: 'Email aktif user' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'SecretPassword123!', description: 'Password minimal 8 karakter' })
    @IsString()
    @MinLength(8)
    password: string;

    @ApiProperty({ example: 'admin', description: 'Peran pengguna (admin/user)' })
    @IsString()
    @IsNotEmpty()
    role: string;
}
