/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const MoleculsAutocomplete = ({
  control,
  name,
  options,
  label,
  defaultValue,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          getOptionLabel={(option) => option.label} // Sesuaikan jika kamu punya properti berbeda
          renderInput={(params) => <TextField {...params} label={label} />}
          // onChange={(_, value) => console.log(value)} // Handle perubahan
          onChange={(_, value) => field.onChange(value)} // Handle perubahan
        />
      )}
    />
  );
};

export default MoleculsAutocomplete;
