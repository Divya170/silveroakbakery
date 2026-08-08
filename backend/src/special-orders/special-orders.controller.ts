import { Body, Controller, Post } from '@nestjs/common';
import { SpecialOrdersService } from './special-orders.service';
import { CreateSpecialOrderDto } from './create-special-order.dto';

@Controller('special-orders')
export class SpecialOrdersController {
  constructor(private readonly service: SpecialOrdersService) {}

  @Post()
  create(@Body() dto: CreateSpecialOrderDto) {
    return this.service.create(dto);
  }
}
