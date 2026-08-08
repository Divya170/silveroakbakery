import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpecialOrder } from './special-order.entity';
import { CreateSpecialOrderDto } from './create-special-order.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class SpecialOrdersService {
  constructor(
    @InjectRepository(SpecialOrder)
    private readonly repo: Repository<SpecialOrder>,
    private readonly usersService: UsersService,
  ) {}

  async create(dto: CreateSpecialOrderDto) {
    const entity = this.repo.create(dto);
    const saved = await this.repo.save(entity);
    await this.usersService.upsertFromSubmission({
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
    });
    return saved;
  }
}
