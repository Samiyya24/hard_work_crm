import { PartialType } from '@nestjs/mapped-types';
import { CreateStuffRoleDto } from './create-stuff_role.dto';
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class UpdateStuffRoleDto {
  @Field({ nullable: true })
  roleId?: object;
  @Field({ nullable: true })
  stuffId?: object;
}
