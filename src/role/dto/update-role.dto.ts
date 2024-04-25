import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @Field({ nullable: true })
  name?: string;
}
