import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class CreateStudentGroupDto {
    @Field(() => Int)
    student_id:object
    @Field(() => Int)
    group_id:object
}
