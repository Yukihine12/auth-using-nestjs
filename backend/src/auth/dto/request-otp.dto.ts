import { IsEmail, IsNotEmpty } from "class-validator";

export class RequestOtpDto {
    @IsEmail({}, { message: 'Format email salah atau tidak valid' })
    @IsNotEmpty({ message: 'Email tidak boleh kosong' })
    email: string;
}