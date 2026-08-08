import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  findAll(category?: string) {
    if (category && category !== 'All') {
      return this.repo.find({ where: { category }, order: { id: 'ASC' } });
    }
    return this.repo.find({ order: { id: 'ASC' } });
  }
}
