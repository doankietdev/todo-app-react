import { PropsWithChildren } from "react";

interface Props {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox({
  id,
  label,
  checked = false,
  disabled = false,
  onChange,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex items-center gap-1">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className="bg-success w-5 h-5 text-success-foreground border-gray-300 rounded-sm cursor-pointer self-start"
        onChange={(event) => onChange(event.target.checked)}
      />
      <div className="ml-3">
        <label
          htmlFor={id}
          className="w-full font-medium text-gray-900 dark:text-gray-300 select-none cursor-pointer"
        >
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}

export default Checkbox;
