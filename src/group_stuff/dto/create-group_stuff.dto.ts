import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class CreateGroupStuffDto {
  @Field(() => Int)
  group_id: object;
  @Field(() => Int)
  stuff_id: object;
}
