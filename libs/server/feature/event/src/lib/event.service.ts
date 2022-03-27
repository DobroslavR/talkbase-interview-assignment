import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventCreateDto } from './event-create.dto';
import { EventEntity } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private eventRepository: Repository<EventEntity>
  ) {}

  async createEvent(eventCreateDto: EventCreateDto) {
    const event = this.eventRepository.create(eventCreateDto);
    return this.eventRepository.save(event);
  }

  async getAllEvents() {
    return this.eventRepository.find();
  }
}
