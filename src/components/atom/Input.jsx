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
      id={`outlined-basic`}
      label={label}
      variant="outlined"
      focused={onFocus}
      name={name}
      InputProps={props.type ? { disableUnderline: true } : {}}
      onWheel={(e) => e.target.blur()}
      disabled={disabled}
      {...register(name, disabled ? {} : addOptionError)}
      className={`w-full  ${className} `}
      multiline={multiline}
      rows={rows}
      {...props}
    />
  );
};

export default Input;
