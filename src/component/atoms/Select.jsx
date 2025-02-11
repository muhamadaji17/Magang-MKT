const Select = ({
  name,
  register,
  placeholder,
  addOptionError,
  dataSelect,
  defaultValue,
  ...props
}) => {
  return (
    <select
      {...props}
      defaultValue={defaultValue}
      {...(register ? register(name, addOptionError) : {})}
      className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option value="">{placeholder}</option>
      {dataSelect?.map((data, index) => (
        <option key={index} value={data.value}>
          {data.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
