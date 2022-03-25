import { Button, Select } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { getTimeZones } from '@vvo/tzdb';

export function Index() {
  const timeZones = getTimeZones();

  const timeZonesAutocompleteData = timeZones.map((timeZone) => ({
    label: timeZone.name,
    value: timeZone.name,
    group: timeZone.continentName,
  }));

  console.log(timeZones);

  return (
    <div className="w-96 mx-auto">
      <h1 className="m-0">Let&apos;s create a new event</h1>
      <span>when does it start?</span>
      <div className="space-y-4">
        <DatePicker className="w-full" label="Date" defaultValue={new Date()} />
        <TimeInput className="w-full" label="Time" format="12" />
        <Select
          className="w-full"
          label="Timezone"
          placeholder="Pick one"
          searchable
          limit={timeZonesAutocompleteData.length}
          data={timeZonesAutocompleteData}
          nothingFound="No timezone found"
        />
        <Button className="w-full" color="violet">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Index;
