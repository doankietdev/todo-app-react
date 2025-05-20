
interface Props {
  id: string,
  label: string,
  checked: boolean,
  onChange: (checked: boolean) => void
}

function Checkbox({ id, label, checked, onChange }: Props) {

  return (
    <div className="flex items-center gap-1">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className="bg-success w-5 h-5 text-success-foreground border-gray-300 rounded-sm cursor-pointer"
        onChange={(event) => onChange(event.target.checked)}
      />
      <label
        htmlFor={id}
        className="w-full ml-2 font-medium text-gray-900 dark:text-gray-300 select-none cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
