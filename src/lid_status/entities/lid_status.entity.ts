import { Field } from "@nestjs/graphql";
import { Lid } from "src/lid/entities/lid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LidStatus {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  status: string;

  @OneToMany(() => Lid, (data) => data.lid_status_id)
  @Field(() => [Lid], { nullable: true })
  lidStatus: Lid[];
}
