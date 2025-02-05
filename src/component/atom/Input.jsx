import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      labelName,
      htmlFor,
      type = "text",
      placeholder,
      onChange,
      id,
      value,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <div className="flex flex-col">
          {label && (
            <label className="text-sm" htmlFor={htmlFor}>
              {labelName}
            </label>
          )}
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            className={`${className} p-2 border-2 rounded-md`}
            placeholder={placeholder}
            id={id}
            {...props}
          />
        </div>
      </>
    );
  }
);

export default Input;
