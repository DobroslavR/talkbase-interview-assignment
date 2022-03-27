import { PropsWithChildren } from 'react';

interface EventBoxFieldProps {
  label: string;
}

export function EventBoxField({
  children,
  label,
}: PropsWithChildren<EventBoxFieldProps>) {
  return (
    <div>
      <span className="text-gray-400 font-medium mb-1 block text-sm">
        {label}
      </span>
      <div className="p-2 border-gray-400 border-2 rounded-lg">
        <span className="text-gray-800 font-medium">{children}</span>
      </div>
    </div>
  );
}

export default EventBoxField;
