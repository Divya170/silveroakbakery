import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactMessage } from './contact-message.entity';
import { CreateContactMessageDto } from './create-contact-message.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactMessage)
    private readonly repo: Repository<ContactMessage>,
    private readonly usersService: UsersService,
  ) {}

  async create(dto: CreateContactMessageDto) {
    const entity = this.repo.create(dto);
    const saved = await this.repo.save(entity);
    await this.usersService.upsertFromSubmission({
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
    });
    return saved;
  }
}
