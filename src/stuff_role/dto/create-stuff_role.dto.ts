import { Field, InputType, Int } from "@nestjs/graphql";
@InputType()
export class CreateStuffRoleDto {
  @Field(() => Int)
  roleId: object;
  @Field(() => Int)
  stuffId: object;
}
