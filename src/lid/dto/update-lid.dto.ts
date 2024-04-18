import { PartialType } from '@nestjs/mapped-types';
import { CreateLidDto } from './create-lid.dto';

export class UpdateLidDto extends PartialType(CreateLidDto) {
  frist_name?: string;
  last_name?: string;
  phone_number?: string;
  target_id?: number;
  lid_stage_id?: number;
  test_date?: Date;
  trial_lesson_date?: Date;
  trial_lesson_time?: string;
  trial_lesson_group_id?: number;
  lid_status_id?: number;
  cancel_reson_id?: number;
}
