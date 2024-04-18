import { Column, Entity } from "typeorm";
@Entity()
export class Target {
  @Column()
  id: number;
  @Column()
  name: string;
}
