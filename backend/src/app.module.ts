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

// DATABASE_DIR lets a host (e.g. a mounted volume on Railway) point this at
// persistent storage. Locally it defaults to the shared ../../database folder.
const dataDir = process.env.DATABASE_DIR ?? join(__dirname, '..', '..', 'database');
mkdirSync(dataDir, { recursive: true });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: join(dataDir, process.env.DATABASE_FILE ?? 'app.sqlite'),
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
