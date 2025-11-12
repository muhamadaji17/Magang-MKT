/** @format */

import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AtomSelect = ({
  name,
  title,
  defaultValue,
  valueOptions,
  rules,
  disabled,
  sx,
  selectTitle,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <Autocomplete
          options={valueOptions}
          getOptionLabel={(option) => option?.label || ""}
          isOptionEqualToValue={(option, value) =>
            option.value === value?.value
          }
          // value={field.value || null}
          // onChange={(_, newValue) => field.onChange(newValue)}
          value={
            valueOptions?.find((option) => option?.value === field?.value) ||
            null
          }
          // 🟢 simpan cuma string value ke form
          onChange={(_, newValue) =>
            field.onChange(newValue ? newValue.value : "")
          }
          disabled={disabled}
          sx={sx}
          renderInput={(params) => (
            <TextField
              {...params}
              label={title}
              error={!!fieldState.error}
              // helperText={fieldState.error?.message}
            />
          )}
        />
      )}
    />
  );
};

export default AtomSelect;
