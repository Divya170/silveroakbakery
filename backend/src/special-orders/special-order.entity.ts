import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SpecialOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  eventDate: string;

  @Column()
  orderType: string;

  @Column({ nullable: true })
  guests?: string;

  @Column({ nullable: true })
  flavor?: string;

  @Column('text')
  message: string;

  @CreateDateColumn()
  createdAt: Date;
}
