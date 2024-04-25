import { Module } from '@nestjs/common';
import { StuffRoleService } from './stuff_role.service';
import { StuffRoleController } from './stuff_role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuffRole } from './entities/stuff_role.entity';
import { StuffRoleResolver } from './stuff_role.resolver';
import { Role } from '../role/entities/role.entity';
import { Stuff } from '../stuff/entities/stuff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StuffRole, Role, Stuff])],
  controllers: [StuffRoleController],
  providers: [StuffRoleService, StuffRoleResolver],
})
export class StuffRoleModule {}
