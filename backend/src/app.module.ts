import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { mkdirSync } from 'fs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { GalleryModule } from './gallery/gallery.module';
import { ContactModule } from './contact/contact.module';
import { SpecialOrdersModule } from './special-orders/special-orders.module';
import { SeedModule } from './seed/seed.module';
import { UsersModule } from './users/users.module';

const dataDir = join(__dirname, '..', '..', 'database');
mkdirSync(dataDir, { recursive: true });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(dataDir, 'app.sqlite'),
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    TestimonialsModule,
    GalleryModule,
    ContactModule,
    SpecialOrdersModule,
    SeedModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
