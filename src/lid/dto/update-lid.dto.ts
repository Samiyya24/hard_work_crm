import { PartialType } from '@nestjs/mapped-types';
import { CreateLidDto } from './create-lid.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLidDto extends PartialType(CreateLidDto) {
  @Field({ nullable: true })
  first_name?: string;
  @Field({ nullable: true })
  last_name?: string;
  @Field({ nullable: true })
  phone_number?: string;
  @Field({ nullable: true })
  target_id?: object;
  @Field({ nullable: true })
  lid_stage_id?: object;
  @Field({ nullable: true })
  test_date?: Date;
  @Field({ nullable: true })
  trial_lesson_date?: Date;
  @Field({ nullable: true })
  trial_lesson_time?: string;
  @Field({ nullable: true })
  trial_lesson_group_id?: number;
  @Field({ nullable: true })
  lid_status_id?: object;
  @Field({ nullable: true })
  reason_lid_id?: object;
}
