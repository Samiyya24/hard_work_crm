import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentResolver } from './payment.resolver';
import { Student } from '../students/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Student])],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentResolver],
})
export class PaymentModule {}
