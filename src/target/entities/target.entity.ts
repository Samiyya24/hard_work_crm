import { Column, Entity, OneToMany } from "typeorm";
import { Lid } from "../../lid/entities/lid.entity";
@Entity()
export class Target {
  @Column()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => Lid, (data) => data.target_id)
  targetId: Lid[];

}
