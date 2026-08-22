import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudService } from './cloud.service';
import { CloudController } from './cloud.controller';
import { Cloud } from './entities/cloud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cloud])],
  controllers: [CloudController],
  providers: [CloudService],
})
export class CloudModule {}
