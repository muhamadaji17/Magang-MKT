/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const Input = ({
  name,
  addOptionError,
  label,
  onFocus,
  className,
  disabled,
  sx,
  multiline,
  control,
  handleSetSlug,
  rows,
  type,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={addOptionError}
      defaultValue={""}
      render={({ field }) => (
        <TextField
          {...field}
          onChange={(e) => {
            field.onChange(e);
            const value = e.target.value;

            // // isi form lain (slug)
            if (name === "article_title_en" || name === "article_title_id") {
              handleSetSlug(name, value);
            }
          }}
          id="outlined-basic"
          label={label}
          variant="outlined"
          focused={onFocus}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "6px",
              "& fieldset": {
                borderColor: "#ccc",
                borderWidth: "1px !important",
              },
              "&:hover fieldset": {
                borderColor: "#aaa",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ccc",
                borderWidth: "1px !important",
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
          InputProps={type ? { disableUnderline: true } : {}}
          onWheel={(e) => e.target.blur()}
          disabled={disabled}
          type={type}
          className={`w-full ${className}`}
          multiline={multiline}
          rows={rows}
          {...props}
        />
      )}
    />
  );
};

export default Input;
