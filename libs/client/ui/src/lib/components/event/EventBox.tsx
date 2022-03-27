import { EventEntity } from '@server/feature/event';
import { formatInTimeZone } from 'date-fns-tz';
import EventBoxField from './EventBoxField';

import enUS from 'date-fns/locale/en-US';

const DATE_FORMAT = 'd MMM, yyyy, HH:mm aa zzz';

const formatTime = (date: string, timezone: string) => {
  return formatInTimeZone(date, timezone, DATE_FORMAT, { locale: enUS });
};

export function EventBox({ id, timezone, utcDate, createdAt }: EventEntity) {
  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="shadow p-4 rounded-lg space-y-2">
      <span className="text-xs text-gray-600 block">
        Created at: {formatTime(createdAt, currentTimezone)}
      </span>
      <span className="text-xs text-gray-600 block">ID: {id}</span>
      <EventBoxField label="Timezone">{timezone}</EventBoxField>
      <EventBoxField label="Target Timezone Date Time">
        {formatTime(utcDate, timezone)}
      </EventBoxField>
      <EventBoxField label="UTC Date Time">
        {formatTime(utcDate, 'UTC')}
      </EventBoxField>
      <EventBoxField label="Local Date Time">
        {formatTime(utcDate, currentTimezone)}
      </EventBoxField>
    </div>
  );
}

export default EventBox;
