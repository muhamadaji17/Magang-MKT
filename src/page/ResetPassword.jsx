import React, { useState } from "react";
import LayoutForm from "../LayoutForm";
import FormForgotPassword from "../FormForgotPassword";
import FormResetPassword from "../FormResetPassword";

const ResetPassword = () => {
  const [codeOtp, setCodeOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <LayoutForm>
      {!codeOtp ? (
        <FormForgotPassword
          setCodeOtp={setCodeOtp}
          setPhoneNumber={setPhoneNumber}
        />
      ) : (
        <FormResetPassword phoneNumber={phoneNumber} />
      )}
    </LayoutForm>
  );
};

export default ResetPassword;
