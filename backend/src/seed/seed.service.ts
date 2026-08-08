import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/product.entity';
import { Testimonial } from '../testimonials/testimonial.entity';
import { GalleryItem } from '../gallery/gallery-item.entity';
import { PRODUCTS_SEED, TESTIMONIALS_SEED, GALLERY_SEED } from './seed-data';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectRepository(Product) private readonly products: Repository<Product>,
    @InjectRepository(Testimonial)
    private readonly testimonials: Repository<Testimonial>,
    @InjectRepository(GalleryItem)
    private readonly gallery: Repository<GalleryItem>,
  ) {}

  async onApplicationBootstrap() {
    if ((await this.products.count()) === 0) {
      await this.products.save(this.products.create(PRODUCTS_SEED));
      this.logger.log(`Seeded ${PRODUCTS_SEED.length} products`);
    }
    if ((await this.testimonials.count()) === 0) {
      await this.testimonials.save(this.testimonials.create(TESTIMONIALS_SEED));
      this.logger.log(`Seeded ${TESTIMONIALS_SEED.length} testimonials`);
    }
    if ((await this.gallery.count()) === 0) {
      const withOrder = GALLERY_SEED.map((item, sortOrder) => ({
        ...item,
        sortOrder,
      }));
      await this.gallery.save(this.gallery.create(withOrder));
      this.logger.log(`Seeded ${GALLERY_SEED.length} gallery items`);
    }
  }
}
