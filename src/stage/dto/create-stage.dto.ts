import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateStageDto {
    @Field()
    name:string
}
