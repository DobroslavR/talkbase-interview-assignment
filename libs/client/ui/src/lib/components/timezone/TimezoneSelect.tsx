import { getTimezoneSelectOptions } from '@client/utils';
import { Select, SelectItem, SelectProps } from '@mantine/core';

export function TimezoneSelect(props: Partial<SelectProps>) {
  const selectOptions: SelectItem[] = getTimezoneSelectOptions();

  return (
    <Select
      required
      className="w-full"
      label="Timezone"
      placeholder="Pick one"
      searchable
      limit={selectOptions.length}
      nothingFound="No timezone found"
      clearable
      autoComplete="off"
      {...props}
      data={selectOptions}
    />
  );
}

export default TimezoneSelect;
