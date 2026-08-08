import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  quote: string;

  @Column()
  name: string;

  @Column('int', { default: 5 })
  rating: number;
}
