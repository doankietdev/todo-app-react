interface Props {
  id?: string
  label?: string
  placeholder?: string,
  value: string,
  onChange?: (value: string) => void
}

function TextField({ id = "", label = "", placeholder = "", value = "" , onChange = () => {} }: Props) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
