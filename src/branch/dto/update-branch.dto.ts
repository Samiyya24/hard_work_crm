import { PartialType } from '@nestjs/mapped-types';
import { CreateBranchDto } from './create-branch.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  address?: string;
  @Field({ nullable: true })
  call_number?: string;
}
