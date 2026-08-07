import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCloudDto {
  @ApiProperty({ example: 'Server Cloud Utama', description: 'Judul atau nama project cloud' })
  @IsString()
  @IsNotEmpty()
  title: string;
}
