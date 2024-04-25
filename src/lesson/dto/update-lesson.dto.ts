import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLessonDto extends PartialType(CreateLessonDto) {
  @Field({ nullable: true })
  lesson_theme?: string;
  @Field({ nullable: true })
  lesson_number?: number;
  @Field({ nullable: true })
  group_id?: object;
  @Field({ nullable: true })
  lesson_date?: Date;
}
