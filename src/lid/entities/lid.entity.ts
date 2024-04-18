import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Stage } from '../../stage/entities/stage.entity';
import { LidStatus } from '../../lid_status/entities/lid_status.entity';
import { Target } from '../../target/entities/target.entity';
import { ReasonLid } from '../../reason_lid/entities/reason_lid.entity';

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  frist_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @ManyToOne(() => Target, (data) => data.targetId)
  target_id: number;

  @ManyToOne(() => Stage, (data) => data.stages)
  lid_stage_id: number;

  @Column()
  test_date: Date;

  @Column()
  trial_lesson_date: Date;

  @Column()
  trial_lesson_time: string;

  @Column()
  trial_lesson_group_id: number;

  @ManyToOne(() => LidStatus, (data) => data.lidStatus)
  lid_status_id: number;

  @ManyToOne(() => ReasonLid, (data) => data.cancelReason)
  cancel_reson_id: number;
}
