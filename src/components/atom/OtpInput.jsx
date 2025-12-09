import { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "./Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { setPasswordService } from "../../service";
import { useGlobalHook } from "../../hook/useGlobalHook";
import LoadingButton from "./LoadingButton";

export default function OtpInput({ handleRemoveCookies }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const datas = JSON.parse(Cookies.get("datas"));
  const { loadingButton, setLoadingButton } = useGlobalHook();
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    if (!value && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, ""); // hanya angka

    if (!pasted) return;

    const digits = pasted.slice(0, 6).split(""); // maksimal 6 digit

    const newOtp = [...otp];
    digits.forEach((digit, index) => {
      if (index < newOtp.length) newOtp[index] = digit;
    });

    setOtp(newOtp);

    // fokus ke input terakhir yang terisi
    const lastIndex = digits.length - 1;
    if (lastIndex >= 0 && lastIndex < otp.length) {
      document.getElementById(`otp-${lastIndex}`).focus();
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

      <Box
        display="flex"
        gap={1.2}
        justifyContent="center"
        className={error ? "shake" : ""}
      >
        {otp.map((value, i) => (
          <TextField
            key={i}
            id={`otp-${i}`}
            value={value}
            error={error}
            onPaste={handlePaste}
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

      {error && (
        <p className="text-red-400 text-xs mt-2">
          Please enter the complete 6-digit OTP
        </p>
      )}

      <Button
        onClick={() => {
          const otpString = otp.join("");
          const mergeData = { ...datas, otp: otpString };

          if (otp.includes("")) {
            setError(true);
            // setTimeout(() => setError(false), 500); // reset setelah animasi selesai
            return;
          } else {
            otp.forEach((_, index) => {
              setOtp((prevOtp) => {
                const newOtp = [...prevOtp];
                newOtp[index] = "";
                return newOtp;
              });
            });

            setError(false);
          }

          setPasswordService(mergeData, {
            navigate,
            handleRemoveCookies,
            setLoadingButton,
          });
        }}
        className="bg-blue-600 rounded-sm py-2 text-center text-white cursor-pointer hover:bg-blue-700 mt-10 px-6"
      >
        {loadingButton ? <LoadingButton /> : "Verify OTP"}
      </Button>
    </div>
  );
}
