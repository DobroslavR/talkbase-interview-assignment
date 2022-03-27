import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventCreateDto } from './event-create.dto';
import { EventService } from './event.service';

@Controller('events')
@ApiTags('Events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  createEvent(@Body() eventCreateDto: EventCreateDto) {
    return this.eventService.createEvent(eventCreateDto);
  }

  @Get('/all')
  getAllEvents() {
    return this.eventService.getAllEvents();
  }
}
