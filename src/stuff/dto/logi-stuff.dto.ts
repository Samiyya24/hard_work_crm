import { Field, InputType } from "@nestjs/graphql"
@InputType()
export class LoginStuffDto {
    @Field()
    login:string
    @Field()
    parol:string   
}
