import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GalleryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  caption: string;

  @Column('int', { default: 0 })
  sortOrder: number;
}
