/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

const InputOutRegis = ({ name, label, onChange, sx, ...props }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      name={name}
      sx={sx}
      className="bg-white "
      // sx={{
      //   "& .MuiInputBase-input": { fontSize: "13px" }, // Ukuran teks input
      //   "& .MuiInputLabel-root": { fontSize: "13px" },
      // }}
      onChange={onChange}
      {...props}
    />
  );
};

export default InputOutRegis;
