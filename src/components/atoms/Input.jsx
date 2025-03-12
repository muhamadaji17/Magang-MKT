import { TextError } from "..";

const Input = ({
  name,
  register,
  error,
  placeholder,
  type,
  label,
  className,
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
        className={`p-2 border-2 rounded-md ${className}`}
        {...props}
      />
      {error && <TextError>{error.message}</TextError>}
    </div>
  );
};

export default Input;
