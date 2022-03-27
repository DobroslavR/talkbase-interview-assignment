import { Button, Text, Title } from '@mantine/core';
import TimezoneSelect from '../timezone/TimezoneSelect';
import { Controller, useForm } from 'react-hook-form';
import { DatePicker, TimeInput } from '@mantine/dates';
import { omit } from 'lodash';
import { EventCreateData, useEventCreate } from '@client/data-access';

export function EventCreateForm() {
  const form = useForm<EventCreateData>({
    defaultValues: {
      date: new Date(),
      time: new Date(),
      timezone: 'Europe/Prague',
    },
  });

  const { control, handleSubmit } = form;

  const { isLoading, onSubmit } = useEventCreate();

  return (
    <div>
      <Title order={2}>Let&apos;s create a new event</Title>
      <Text>when does it start?</Text>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker required className="w-full" label="Date" {...field} />
          )}
        />

        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <TimeInput
              required
              className="w-full"
              label="Time"
              format="12"
              {...field}
            />
          )}
        />

        <Controller
          name="timezone"
          control={control}
          render={({ field }) => (
            <TimezoneSelect {...omit(field, ['ref'])}></TimezoneSelect>
          )}
        />

        <Button
          loading={isLoading}
          type="submit"
          className="!w-full"
          color="violet"
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

export default EventCreateForm;
