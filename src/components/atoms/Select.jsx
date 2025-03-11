const Select = ({ name, error, label, children, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        className="px-4 rounded-sm text-black border-b-2 py-2"
        {...props}
      >
        {children}
      </select>
      {error && <TextError>{error.message}</TextError>}
    </div>
  );
};

export default Select;
