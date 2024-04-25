import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLessonDto {
  @Field()
  lesson_theme: string;
  @Field()
  lesson_number: number;
  @Field()
  group_id: object;
  @Field()
  lesson_date: Date;
}
