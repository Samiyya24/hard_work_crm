import { Module } from '@nestjs/common';
import { LidService } from './lid.service';
import { LidController } from './lid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { LidResolver } from './lid.resolver';
import { Target } from '../target/entities/target.entity';
import { Stage } from '../stage/entities/stage.entity';
import { LidStatus } from '../lid_status/entities/lid_status.entity';
import { ReasonLid } from '../reason_lid/entities/reason_lid.entity';
import { Student } from '../students/entities/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Lid, Target, Stage, LidStatus, ReasonLid, Student])],
  controllers: [LidController],
  providers: [LidService, LidResolver],
})
export class LidModule {}
