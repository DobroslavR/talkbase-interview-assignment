import { EventCreateDto, EventEntity } from '@server/feature/event';
import { api } from './api';

export const createEventRequest = async (
  data: EventCreateDto
): Promise<EventEntity> => {
  return api.post('events ', data);
};

export const getAllEvents = async () => {
  return api.get<EventEntity[]>('events/all').then((res) => res.data);
};
