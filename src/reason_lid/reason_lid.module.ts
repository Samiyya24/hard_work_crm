import { Module } from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { ReasonLidController } from './reason_lid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { ReasonLidResolver } from './reason_lid.resolver';
import { Lid } from '../lid/entities/lid.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ReasonLid, Lid])],
  controllers: [ReasonLidController],
  providers: [ReasonLidService, ReasonLidResolver],
})
export class ReasonLidModule {}
