import { EventCreateDto } from '@server/feature/event';
import { add } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { useQueryClient, useMutation } from 'react-query';
import { createEventRequest } from '../api';
import { QueryName } from '../enums';
import { EventCreateData } from '../interfaces';

export const useEventCreate = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutate: createEvent } = useMutation(
    (eventData: EventCreateDto) => createEventRequest(eventData),
    {
      onSuccess: () => queryClient.invalidateQueries(QueryName.EVENTS),
    }
  );

  const onSubmit = ({ timezone, date, time }: EventCreateData) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();

    const utcDate = zonedTimeToUtc(
      add(date, {
        hours,
        minutes,
      }),
      timezone
    ).toISOString();

    createEvent({ timezone, utcDate });
  };

  return { isLoading, onSubmit };
};
