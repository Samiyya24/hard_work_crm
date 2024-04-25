import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LidStatus } from 'src/lid_status/entities/lid_status.entity';
import { ReasonLid } from 'src/reason_lid/entities/reason_lid.entity';
import { Stage } from 'src/stage/entities/stage.entity';
import { Student } from 'src/students/entities/student.entity';
import { Target } from 'src/target/entities/target.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Lid {
  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  first_name: string;

  @Field()
  @Column()
  last_name: string;

  @Field()
  @Column()
  phone_number: string;

  @ManyToOne(() => Target, (data) => data.targets)
  @Field(() => [Target], { nullable: true })
  target_id: Target;

  @ManyToOne(() => Stage, (data) => data.stages)
  @Field(() => [Stage], { nullable: true })
  stage_id: Stage;

  @Field()
  @Column()
  test_date: Date;

  @Field()
  @Column()
  trial_lesson_date: Date;

  @Field()
  @Column()
  trial_lesson_time: string;

  @Field()
  @Column()
  trial_lesson_group_id: number;

  @Field()
  @ManyToOne(() => LidStatus, (data) => data.lidStatus)
  @Field(() => [LidStatus], { nullable: true })

  lid_status_id: LidStatus;

  @Field()
  @ManyToOne(() => ReasonLid, (data) => data.reasons_lid)
  @Field(() => [ReasonLid], { nullable: true })

  reason_lid_id: ReasonLid;

  @Field()
  @OneToMany(() => Student, (data) => data.lid_id)
  @Field(() => [Student], { nullable: true })
  students: Student[];
}
