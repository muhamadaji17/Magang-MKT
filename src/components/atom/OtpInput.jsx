import { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "./Button";
import Cookies from "js-cookie";
import { SwalAlertBasic } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function OtpInput({ handleRemoveCookies }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const datas = JSON.parse(Cookies.get("datas"));
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-base font-semibold">Email OTP Verification</h1>
        <span className="text-xs">
          Please enter the OTP sent to your email address
        </span>
      </div>

      <Box display="flex" gap={1.2} justifyContent="center">
        {otp.map((value, i) => (
          <TextField
            key={i}
            id={`otp-${i}`}
            value={value}
            onChange={(e) => handleChange(e.target.value, i)}
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: "center",
                fontSize: 14,
                color: "white",
                padding: 0,
                height: 36,
              },
            }}
            sx={{
              width: 36,
              height: 36,

              "& .MuiOutlinedInput-root": {
                height: "100%",
                padding: 0,

                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },

              "& input::placeholder": {
                color: "white",
                opacity: 0.6,
              },
            }}
          />
        ))}
      </Box>

      <Button
        onClick={() => {
          const otpString = otp.join("");
          console.log(otpString);

          SwalAlertBasic({
            icon: "success",
            text: "OTP Verified Successfully",
          });
          handleRemoveCookies();
          navigate("/login");
        }}
        className="bg-blue-600 rounded-sm py-2 text-center text-white cursor-pointer hover:bg-blue-700 mt-10 px-6"
      >
        Verify OTP
      </Button>
    </div>
  );
}
