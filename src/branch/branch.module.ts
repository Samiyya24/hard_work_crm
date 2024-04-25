import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from './entities/branch.entity';
import { Group } from '../group/entities/group.entity';
import { BranchResolver } from './branch.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Branch, Group])],
  controllers: [BranchController],
  providers: [BranchService, BranchResolver],
})
export class BranchModule {}
