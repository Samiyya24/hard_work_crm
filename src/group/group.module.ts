import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Stage } from '../stage/entities/stage.entity';
import { Branch } from '../branch/entities/branch.entity';
import { GroupStuff } from '../group_stuff/entities/group_stuff.entity';
import { Lesson } from '../lesson/entities/lesson.entity';
import { StudentGroup } from '../student_group/entities/student_group.entity';
import { GroupResolver } from './group.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Group, Stage, Branch, GroupStuff, Lesson, StudentGroup])],
  controllers: [GroupController],
  providers: [GroupService, GroupResolver],
})
export class GroupModule {}
