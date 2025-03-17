import { TextError } from "..";

const Input = ({
  name,
  register,
  error,
  placeholder,
  type = "text",
  label,
  className,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type || "text"}
        placeholder={placeholder}
        className={`p-2 rounded-md ${className || "border-2"}`}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <TextError>{error.message}</TextError>}
    </div>
  );
};

export default Input;
