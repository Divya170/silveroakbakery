import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('float')
  price: number;

  @Column({ default: false })
  featured: boolean;

  @Column({ default: false })
  bestSeller: boolean;

  @Column({ default: false })
  seasonal: boolean;

  @Column('simple-json', { default: '[]' })
  dietary: string[];

  @Column()
  allergen: string;

  @Column({ default: true })
  available: boolean;
}
