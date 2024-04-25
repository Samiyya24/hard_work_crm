
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Stuff } from './entities/stuff.entity';

@Resolver('stuff')
export class StuffResolver {
  constructor(private readonly stuffService: StuffService) {}

  @Query(() => [Stuff])
  findAllStuff() {
    return this.stuffService.findAll();
  }

  @Query(() => Stuff)
  findOneStuff(@Args('id') id: number) {
    return this.stuffService.findOne(+id);
  }

  @Mutation(() => Stuff)
  createStuff(@Args('createStuff') createStuffDto: CreateStuffDto) {
    return this.stuffService.create(createStuffDto);
  }

  @Mutation(() => Stuff)
  updateStuff(
    @Args('id') id: string,
    @Args('updateStuff') updateStuffDto: UpdateStuffDto,
  ) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Mutation(() => ID)
  removeStuff(@Args('id', {type:()=>ID}) id: number) {
    return this.stuffService.remove(id);
  }
}
