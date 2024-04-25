import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class CreatePaymentDto {
  @Field(() => Int)
  student_id: object;
  @Field()
  payment_last_date: Date;
  @Field()
  payment_date: Date;
  @Field()
  price: number;
  @Field()
  is_paid: boolean;
  @Field()
  total_payment: number;
}
