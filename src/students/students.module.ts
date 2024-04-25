import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentsResolver } from './students.resolver';
import { StudentGroup } from '../student_group/entities/student_group.entity';
import { StudentLesson } from '../student_lesson/entities/student_lesson.entity';
import { Payment } from '../payment/entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentGroup, StudentLesson, Payment])],
  controllers: [StudentsController],
  providers: [StudentsService, StudentsResolver],
})
export class StudentsModule {}
