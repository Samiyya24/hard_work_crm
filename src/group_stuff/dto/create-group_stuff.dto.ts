import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreateGroupStuffDto {
    @Field()
    group_id:object
    @Field()
    stuff_id:object
}
