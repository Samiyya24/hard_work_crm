import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStatusModule } from './lid_status/lid_status.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { StageModule } from './stage/stage.module';
import { TargetModule } from './target/target.module';
import { LidModule } from './lid/lid.module';
import { RoleModule } from './role/role.module';
import { StuffModule } from './stuff/stuff.module';
import { StuffRoleModule } from './stuff_role/stuff_role.module';
import { BranchModule } from './branch/branch.module';
import { GroupStuffModule } from './group_stuff/group_stuff.module';
import { GroupModule } from './group/group.module';
import { LessonModule } from './lesson/lesson.module';
import { StudentGroupModule } from './student_group/student_group.module';
import { StudentLessonModule } from './student_lesson/student_lesson.module';
import { StudentsModule } from './students/students.module';
import { PaymentModule } from './payment/payment.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'postgres'>('POSTGRES_CONNECTION'),
        host: config.get<string>('POSTGRES_HOST'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        port: config.get<number>('POSTGRES_PORT'),
        database: config.get<string>('POSTGRES_DATABASE'),
        entities: [__dirname + 'dist/**/*.entity{.ts, .js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    LidStatusModule,
    ReasonLidModule,
    StageModule,
    TargetModule,
    LidModule,
    RoleModule,
    StuffModule,
    StuffRoleModule,
    BranchModule,
    GroupStuffModule,
    GroupModule,
    LessonModule,
    StudentGroupModule,
    StudentLessonModule,
    StudentsModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
