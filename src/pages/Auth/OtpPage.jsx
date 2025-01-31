import React from "react";
import { handleSubmitData, inputOtp } from "../../pattern";
import { useNavigate } from "react-router";
import { LayoutAuth } from "../../component/layouts";
import { Form } from "../../component/organism";
import { OtpService } from "../../service";
import { usePhoneNumber } from "../../hook";

const OtpPage = () => {
  const { setPhoneNumber } = usePhoneNumber();
  const navigate = useNavigate();

  return (
    <LayoutAuth title={"Forgot Password"}>
      <Form
        dataForm={inputOtp}
        buttonName={"Kirim kode OTP"}
        handleSubmitData={(data, resetField, setLoading) =>
          handleSubmitData({
            data,
            resetField,
            setLoading,
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
