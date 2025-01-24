import React from "react";
import { handleSubmitData, inputOtp, usePhoneNumber } from "../../pattern";
import { useNavigate } from "react-router";
import { LayoutAuth } from "../../component/layouts";
import { Form } from "../../component/organism";
import { OtpService } from "../../service";

const OtpPage = () => {
  const { setPhoneNumber } = usePhoneNumber();

  const navigate = useNavigate();

  return (
    <LayoutAuth title={"Forgot Password"}>
      <Form
        dataForm={inputOtp}
        buttonName={"Kirim kode OTP"}
        handleSubmitData={(data, resetField) =>
          handleSubmitData({
            data,
            resetField,
            postData: OtpService,
            navigate,
            setState: setPhoneNumber,
          })
        }
      />
    </LayoutAuth>
  );
};

export default OtpPage;
