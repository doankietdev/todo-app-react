
interface Props {
  id: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean
  onChange?: (value: string) => void;
}

function Radio({ id, name, label, value, onChange = () => {}, checked = false }: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer"
        onChange={() => onChange(value)}
      />
      <label
        htmlFor={id}
        className="font-medium text-sm cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
}

export default Radio;
