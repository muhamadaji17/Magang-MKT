/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

const Input = ({
  name,
  addOptionError,
  label,
  register,
  onFocus,
  className,
  disabled,
  multiline,
  rows,
  // type,
  ...props
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      focused={onFocus}
      disabled={disabled}
      {...register(name, addOptionError)}
      className={`w-full bg-white ${className}`}
      multiline={multiline}
      rows={rows}
      {...props}
    />
  );
};

export default Input;
