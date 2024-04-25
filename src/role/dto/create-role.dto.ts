import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoleDto {
  @Field()
  name: string;
}
