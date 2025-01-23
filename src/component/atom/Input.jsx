const Input = ({
  label,
  labelName,
  htmlFor,
  type = "text",
  placeholder,
  onChange,
  id,
  value,
  className,
  ...rest
}) => {
  return (
    <>
      <div className="flex flex-col">
        {label && (
          <label className="font-semibold" htmlFor={htmlFor}>
            {labelName}
          </label>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`${className} p-2 border-2 rounded-md`}
          placeholder={placeholder}
          id={id}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
