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
  sx,
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
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "6px",
          "& fieldset": {
            borderColor: "#ccc",
            borderWidth: "1px !important", // ← buat lebih tipis
          },
          "&:hover fieldset": {
            borderColor: "#aaa",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ccc", // tetap abu saat fokus
            borderWidth: "1px !important", // tetap tipis saat fokus
          },
        },
        "& .MuiInputLabel-root": {
          color: "#555",
          "&.Mui-focused": {
            color: "#555",
          },
        },
        ...sx,
      }}
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
