import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lid } from "../../lid/entities/lid.entity";

@Entity()
export class LidStatus {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  status: string;

  @OneToMany(() => Lid, (data) => data.lid_status_id)
  lidStatus: Lid[];
}
