import React from "react";

import { useNavigate } from "react-router";
import { LayoutAuth } from "../../component/layouts";
import { Form } from "../../component/organism";
import {
  handleSubmitData,
  inputResetPassword,
  usePhoneNumber,
} from "../../pattern";
import { ResetPasswordService } from "../../service";

const ResetPasswordPage = () => {
  const { phoneNumber } = usePhoneNumber();
  const navigate = useNavigate();
  return (
    <LayoutAuth title={"Reset Password"}>
      <Form
        dataForm={inputResetPassword}
        buttonName={"Reset Password"}
        handleSubmitData={(data, resetField) =>
          handleSubmitData({
            data: { ...data, phone_number: phoneNumber },
            resetField,
            navigate,
            postData: ResetPasswordService,
          })
        }
      />
    </LayoutAuth>
  );
};

export default ResetPasswordPage;
