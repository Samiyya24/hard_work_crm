import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidModule } from './lid/lid.module';
import { Lid } from './lid/entities/lid.entity';
import { StageModule } from './stage/stage.module';
import { Stage } from './stage/entities/stage.entity';
import { LidStatusModule } from './lid_status/lid_status.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { TargetModule } from './target/target.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'microtest',
      entities: [Lid, Stage, LidStatus, ReasonLid],
      synchronize: true,
    }),
    LidModule,
    StageModule,
    LidStatusModule,
    ReasonLidModule,
    TargetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
