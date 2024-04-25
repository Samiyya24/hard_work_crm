import { PartialType } from '@nestjs/mapped-types';
import { CreateStageDto } from './create-stage.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateStageDto extends PartialType(CreateStageDto) {
  @Field()
  name?: string;
}
