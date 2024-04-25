import { Module } from '@nestjs/common';
import { LidStatusService } from './lid_status.service';
import { LidStatusController } from './lid_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { LidStatusResolver } from './lid_status.resolver';
import { Lid } from '../lid/entities/lid.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LidStatus, Lid])],
  controllers: [LidStatusController],
  providers: [LidStatusService, LidStatusResolver],
})
export class LidStatusModule {}
