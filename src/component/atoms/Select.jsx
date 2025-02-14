const Select = ({
  name,
  register,
  placeholder,
  addOptionError,
  dataSelect,
  ...props
}) => {
  return (
    <select
      {...props}
      {...(register ? register(name, addOptionError) : {})}
      className="border my-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {dataSelect?.map((data, index) => (
        <option key={index} value={data.value}>
          {data.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
