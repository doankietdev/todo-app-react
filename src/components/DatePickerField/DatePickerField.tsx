import { Datepicker } from "flowbite-react";

interface Props {
  label?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

function DatePickerField({ value, label = "", onChange }: Props) {

  return (
    <div>
      {label && (
        <p
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </p>
      )}
      <Datepicker value={value} onChange={onChange} label="Deadline" />
    </div>
  );
}

export default DatePickerField;
