import { Module } from '@nestjs/common';
import { LidStatusService } from './lid_status.service';
import { LidStatusController } from './lid_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LidStatus } from './entities/lid_status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LidStatus]),
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
  controllers: [LidStatusController],
  providers: [LidStatusService],
})
export class LidStatusModule {}
