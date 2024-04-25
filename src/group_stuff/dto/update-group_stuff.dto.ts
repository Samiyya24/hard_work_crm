
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateGroupStuffDto {
  @Field({ nullable: true })
  group_id?: object;
  @Field({ nullable: true })
  stuff_id?: object;
}
