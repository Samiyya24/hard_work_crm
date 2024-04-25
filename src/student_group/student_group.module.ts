import { Module } from '@nestjs/common';
import { StudentGroupService } from './student_group.service';
import { StudentGroupController } from './student_group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentGroup } from './entities/student_group.entity';
import { Student } from '../students/entities/student.entity';
import { Group } from '../group/entities/group.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StudentGroup, Student, Group])],
  controllers: [StudentGroupController],
  providers: [StudentGroupService, StudentGroup],
})
export class StudentGroupModule {}
