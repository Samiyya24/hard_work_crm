import { Injectable } from '@nestjs/common';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Target } from './entities/target.entity';

@Injectable()
export class TargetService {
  constructor(
    @InjectRepository(Target)
    private readonly targetRepo: Repository<Target>,
  ) {}
  create(createTargetDto: CreateTargetDto) {
    const { id, name } = createTargetDto;
    return this.targetRepo.save({
      id,
      name,
    });
  }

  findAll() {
    return this.targetRepo.find();
  }

  findOne(id: number) {
    return this.targetRepo.findOneBy({ id });
  }

  update(id: number, updateTargetDto: UpdateTargetDto) {
    return this.targetRepo.update({ id }, updateTargetDto);
  }

  remove(id: number) {
    return this.targetRepo.delete({ id });
  }
}
