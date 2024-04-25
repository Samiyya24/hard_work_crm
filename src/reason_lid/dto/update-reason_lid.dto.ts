import { PartialType } from '@nestjs/mapped-types';
import { CreateReasonLidDto } from './create-reason_lid.dto';
import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class UpdateReasonLidDto extends PartialType(CreateReasonLidDto) {
  @Field()
  reason_lid?: string;
}
