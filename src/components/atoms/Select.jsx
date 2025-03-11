const Select = ({ name, error, label, children, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        className="px-4 py-2 text-black border-b-2 rounded-sm focus:outline-none"
        {...props}
      >
        {children}
      </select>
      {error && <TextError>{error.message}</TextError>}
    </div>
  );
};

export default Select;
