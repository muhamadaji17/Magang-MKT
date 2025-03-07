/* eslint-disable react/prop-types */
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectOptionOutRegister = ({
  valueOptions,
  selectTitle,
  defaultValue,
  title,
  onChange,
  ...props
}) => {
  return (
    <Box sx={{ width: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className=" bg-white "
          sx={{ height: 40, padding: 1 }}
          label={title}
          defaultValue={defaultValue}
          {...props}
          onChange={onChange} // Gunakan onChange di sini
        >
          <MenuItem value={"example"} disabled={true}>
            {selectTitle}
          </MenuItem>
          {valueOptions.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {" "}
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOptionOutRegister;
