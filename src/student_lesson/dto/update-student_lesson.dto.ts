
import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class UpdateStudentLessonDto {
  @Field({nullable:true})
  lesson_id?: object;

  @Field({nullable:true})
  student_id?: object;

  @Field({nullable:true})
  is_there?: boolean;

  @Field({nullable:true})
  reason?: string;

  @Field({nullable:true})
  be_paid?: boolean;
}
