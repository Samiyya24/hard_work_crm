import { Module } from '@nestjs/common';
import { TargetService } from './target.service';
import { TargetController } from './target.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Target } from './entities/target.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Target]),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://nwehygfp:dwRBr9-Nt6ldzvDw-8PuJ50QLw_XC6s-@crow.rmq.cloudamqp.com/nwehygfp',
          ],
          queue: 'main_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [TargetController],
  providers: [TargetService],
})
export class TargetModule {}
