import { PartialType } from '@nestjs/mapped-types';
import { CreateStuffRoleDto } from './create-stuff_role.dto';
import { Field, InputType, Int } from '@nestjs/graphql';
@InputType()
export class UpdateStuffRoleDto {
  @Field(() => Int, { nullable: true })
  roleId?: object;
  @Field(() => Int, { nullable: true })
  stuffId?: object;
}
