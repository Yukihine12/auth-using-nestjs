import { IsEmail, IsNotEmpty, IsString, IsOptional } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'user@yukicloud.com', description: 'Email aktif user (Primary Key)' })
    @IsEmail({}, { message: 'Format email tidak valid' })
    @IsNotEmpty({ message: 'Email tidak boleh kosong' })
    email: string;

    @ApiPropertyOptional({ example: 'Muqtada Backend', description: 'Nama lengkap user' })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiPropertyOptional({ example: '08123456789', description: 'Nomor telepon' })
    @IsString()
    @IsOptional()
    telp_no?: string;
    @ApiPropertyOptional({ example: 'Jl. Merdeka No. 45', description: 'Alamat tempat tinggal' })
    @IsString()
    @IsOptional()
    address?: string;

    @ApiPropertyOptional({ example: 'Bandung', description: 'Kota' })
    @IsString()
    @IsOptional()
    city?: string;

    @ApiPropertyOptional({ example: 'Jawa Barat', description: 'Provinsi' })
    @IsString()
    @IsOptional()
    province?: string;

    @ApiPropertyOptional({ example: 'Indonesia', description: 'Negara' })
    @IsString()
    @IsOptional()
    country?: string;

    @ApiPropertyOptional({ example: '40111', description: 'Kode pos' })
    @IsString()
    @IsOptional()
    postal_code?: string;
}
