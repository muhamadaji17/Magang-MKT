/* eslint-disable react/prop-types */
import { MenuItem, Select } from "@mui/material";

const SelectOptionOutRegister = ({
  valueOptions,
  selectTitle,
  defaultValue,
  title,
  onChange,
  ...props
}) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      // value={age}
      label={title}
      className=" bg-white"
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
    // </FormControl>
  );
};

export default SelectOptionOutRegister;
