import { getAllEvents, QueryName } from '@client/data-access';
import { Loader, Title } from '@mantine/core';
import { EventEntity } from '@server/feature/event';
import { useQuery } from 'react-query';
import EventBox from './EventBox';

export function EventBoxList() {
  const { data, isLoading } = useQuery<EventEntity[]>(QueryName.EVENTS, () =>
    getAllEvents()
  );

  const eventsSortedByNewestCreatedDate = data?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <Loader />
        </div>
      ) : (
        <>
          <Title order={2}>Event List</Title>
          <div className="flex flex-col gap-4 max-h-screen overflow-auto">
            {eventsSortedByNewestCreatedDate?.map((event) => (
              <EventBox key={event.id} {...event}></EventBox>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default EventBoxList;
