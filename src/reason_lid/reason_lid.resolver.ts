import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReasonLid } from './entities/reason_lid.entity';

@Resolver('reason-lid')
export class ReasonLidResolver {
  constructor(private readonly reasonLidService: ReasonLidService) {}

  @Query(() => [ReasonLid])
  findAllReasonLid() {
    return this.reasonLidService.findAll();
  }

  @Query(() => ReasonLid)
  findOneReasonLid(@Args('id') id: number) {
    return this.reasonLidService.findOne(+id);
  }

  @Mutation(() => ReasonLid)
  createReasonLid(
    @Args('createReasonLid') createReasonLidDto: CreateReasonLidDto,
  ) {
    return this.reasonLidService.create(createReasonLidDto);
  }

  @Mutation(() => ReasonLid)
  updateReasonLid(
    @Args('id', { type: () => ReasonLid }) id: number,
    @Args('updateReasonLid') updateReasonLidDto: UpdateReasonLidDto,
  ) {
    return this.reasonLidService.update(id, updateReasonLidDto);
  }

  @Mutation(() => ReasonLid)
  removeReasonLid(@Args('id', { type: () => ReasonLid }) id: number) {
    return this.reasonLidService.remove(id);
  }
}
