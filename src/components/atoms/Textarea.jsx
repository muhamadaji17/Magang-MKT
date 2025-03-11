import { TextError } from "..";

const Textarea = ({
  name,
  error,
  placeholder,
  className,
  register,
  label,
  defaultValue,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        className={`border-2 rounded-md min-h-40 w-full resize-none p-2 ${className}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...props}
      ></textarea>
      {error && <TextError>{error.message}</TextError>}
    </>
  );
};

export default Textarea;
