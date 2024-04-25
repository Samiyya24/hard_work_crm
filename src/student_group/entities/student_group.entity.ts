import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Group } from 'src/group/entities/group.entity';
import { Student } from 'src/students/entities/student.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class StudentGroup {

  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @ManyToOne(() => Student, (data) => data.studentGroups)
  @Field(() => Student)
  student_id: Student;

  @Field()
  @ManyToOne(() => Group, (data) => data.studentGroup)
  @Field(() => Group)
  group_id: Group;
}
