import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../products/product.entity';
import { Testimonial } from '../testimonials/testimonial.entity';
import { GalleryItem } from '../gallery/gallery-item.entity';
import { SeedService } from './seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Testimonial, GalleryItem])],
  providers: [SeedService],
})
export class SeedModule {}
