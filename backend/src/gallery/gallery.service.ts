import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GalleryItem } from './gallery-item.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(GalleryItem)
    private readonly repo: Repository<GalleryItem>,
  ) {}

  findAll() {
    return this.repo.find({ order: { sortOrder: 'ASC' } });
  }
}
