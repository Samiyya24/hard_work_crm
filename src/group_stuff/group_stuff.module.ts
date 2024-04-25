import { Module } from '@nestjs/common';
import { GroupStuffService } from './group_stuff.service';
import { GroupStuffController } from './group_stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupStuff } from './entities/group_stuff.entity';
import { Group } from '../group/entities/group.entity';
import { Stuff } from '../stuff/entities/stuff.entity';
import { GroupStuffResolver } from './group_stuff.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([GroupStuff, Group, Stuff])],
  controllers: [GroupStuffController],
  providers: [GroupStuffService, GroupStuffResolver],
})
export class GroupStuffModule {}
