import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { JwtModule } from '@nestjs/jwt';
import { StuffResolver } from './stuff.resolver';
import { StuffRole } from '../stuff_role/entities/stuff_role.entity';
import { GroupStuff } from '../group_stuff/entities/group_stuff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stuff, StuffRole, GroupStuff]), JwtModule.register({})],
  controllers: [StuffController],
  providers: [StuffService, StuffResolver],
})
export class StuffModule {}
