

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentDto {
  @Field()
  lid_id?: object;
  @Field()
  first_name?: string;
  @Field()
  last_name?: string;
  @Field()
  phone_number?: string;
  @Field()
  bith_date?: string;
  @Field()
  gender?: string;
}