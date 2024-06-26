import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Target } from './entities/target.entity';
import { TargetService } from './target.service';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';

@Resolver('targets')
export class TargetResolver {
  constructor(private readonly targetService: TargetService) {}
  
  
  @Query(() => [Target])
  findAllTarget() {
    return this.targetService.findAll();
  }
  
  @Query(() => Target)
  findOneTarget(@Args('id') id: number) {
    return this.targetService.findOne(+id);
  }
  
  @Mutation(() => Target)
  createTarget(@Args('createTarget') createTargetDto: CreateTargetDto) {
    return this.targetService.create(createTargetDto);
  }

  @Mutation(() => Target)
  updateTarget(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateTarget') updateTargetDto: UpdateTargetDto,
  ) {
    return this.targetService.update(id, updateTargetDto);
  }

  @Mutation(() => Target)
  removeTarget(@Args('id', { type: () => ID }) id: number) {
    return this.targetService.remove(id);
  }
}
