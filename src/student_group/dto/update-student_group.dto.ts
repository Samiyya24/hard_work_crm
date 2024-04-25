import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentGroupDto } from './create-student_group.dto';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateStudentGroupDto extends PartialType(CreateStudentGroupDto) {
  @Field(() => Int, {nullable:true})
  student_id?: object;
  @Field(() => Int, {nullable:true})
  group_id?: object;
}
