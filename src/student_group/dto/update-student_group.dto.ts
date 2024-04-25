import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentGroupDto } from './create-student_group.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentGroupDto extends PartialType(CreateStudentGroupDto) {
  @Field({nullable:true})
  student_id?: object;
  @Field({nullable:true})
  group_id?: object;
}
