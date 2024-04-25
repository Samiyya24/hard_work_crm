import { Module } from '@nestjs/common';
import { StageService } from './stage.service';
import { StageController } from './stage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';
import { StageResolver } from './stage.resolver';
import { Lid } from '../lid/entities/lid.entity';
import { Group } from '../group/entities/group.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Stage, Lid, Group])],
  controllers: [StageController],
  providers: [StageService, StageResolver],
})
export class StageModule {}
