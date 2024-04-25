import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { StuffRole } from '../stuff_role/entities/stuff_role.entity';
import { RoleResolver } from './role.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Role, StuffRole])],
  controllers: [RoleController],
  providers: [RoleService, RoleResolver],
})
export class RoleModule {}
