import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialOrder } from './special-order.entity';
import { SpecialOrdersController } from './special-orders.controller';
import { SpecialOrdersService } from './special-orders.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialOrder]), UsersModule],
  controllers: [SpecialOrdersController],
  providers: [SpecialOrdersService],
})
export class SpecialOrdersModule {}
