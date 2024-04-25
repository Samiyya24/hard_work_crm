import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreateStudentGroupDto {
    @Field()
    student_id:object
    @Field()
    group_id:object
}
