import { EventBoxList, EventCreateForm } from '@client/ui';

export function Index() {
  return (
    <div className="w-full max-w-3xl mx-auto grid grid-cols-2 gap-4">
      <EventCreateForm></EventCreateForm>

      <EventBoxList></EventBoxList>
    </div>
  );
}

export default Index;
