import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  @Field({ nullable: true })
  group_name?: string;
  @Field({ nullable: true })
  lesson_start_time?: string;
  @Field({ nullable: true })
  lesson_continuous?: string;
  @Field({ nullable: true })
  lesson_week_day?: string;
  @Field(() => Int, { nullable: true })
  group_stage_id?: object;
  @Field({ nullable: true })
  room_number?: number;
  @Field({ nullable: true })
  room_floor?: number;
  @Field(() => Int,{ nullable: true })
  branch_id?: object;
  @Field({ nullable: true })
  lessons_quant?: number;
  @Field({ nullable: true })
  is_active?: boolean;
}
