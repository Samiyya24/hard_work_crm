import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class CreateStuffRoleDto {
  @Field()
  roleId: object;
  @Field()
  stuffId: object;
}
