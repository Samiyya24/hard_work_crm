import { Field } from "@nestjs/graphql";
import { Role } from "src/role/entities/role.entity";
import { Stuff } from "src/stuff/entities/stuff.entity";
import {  Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StuffRole {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (data) => data.stuffes)
  @Field(() => [Role])
  roleId: Role;

  @ManyToOne(() => Stuff, (data) => data.stuffRoles)
  @Field(() => [Stuff])
  stuffId: Stuff;
}
