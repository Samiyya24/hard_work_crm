import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StageService } from './stage.service';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Stage } from './entities/stage.entity';

@Resolver('stage')
export class StageResolver {
  constructor(private readonly stageService: StageService) {}

  @Query(() => [Stage])
  findAllStage() {
    return this.stageService.findAll();
  }

  @Query(() => Stage)
  findOneStage(@Args('id') id: number) {
    return this.stageService.findOne(+id);
  }

  @Mutation(() => Stage)
  createStage(@Args('createStage') createStageDto: CreateStageDto) {
    return this.stageService.create(createStageDto);
  }

  @Mutation(() => Stage)
  updateStage(
    @Args('id', { type: () => Stage }) id: number,
    @Args('updateStage') updateStageDto: UpdateStageDto,
  ) {
    return this.stageService.update(id, updateStageDto);
  }

  @Mutation(() => Stage)
  removeStage(@Args('id', { type: () => Stage }) id: number) {
    return this.stageService.remove(id);
  }
}
