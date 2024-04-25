import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { Group } from '../group/entities/group.entity';
import { StudentLesson } from '../student_lesson/entities/student_lesson.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Lesson, Group, StudentLesson])],
  controllers: [LessonController],
  providers: [LessonService, LessonResolver],
})
export class LessonModule {}
