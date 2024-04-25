import { PartialType } from '@nestjs/mapped-types';
import { CreateStuffDto } from './create-stuff.dto';
import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class UpdateStuffDto extends PartialType(CreateStuffDto) {
  @Field({ nullable: true })
  first_name?: string;
  @Field({ nullable: true })
  last_name?: string;
  @Field({ nullable: true })
  phone_number?: string;
  @Field({ nullable: true })
  login?: string;
  @Field({ nullable: true })
  parol?: string;
  @Field({ nullable: true })
  confirm_parol?: string;
  @Field({ nullable: true })
  role?: string;
}
