import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  findAll() {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  async upsertFromSubmission(data: { name: string; email: string; phone?: string }) {
    const existing = await this.repo.findOne({ where: { email: data.email } });
    if (existing) {
      existing.name = data.name;
      if (data.phone) existing.phone = data.phone;
      return this.repo.save(existing);
    }
    const created = this.repo.create(data);
    return this.repo.save(created);
  }
}
