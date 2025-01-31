import React from "react";
import { LayoutAuth } from "../../component/layouts";
import { inputRegister } from "../../pattern/PatternAuth/Register";
import { handleSubmitData } from "../../pattern";
import { RegisterService } from "../../service/authService";
import { Form } from "../../component/organism";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <LayoutAuth title={"Form Register"}>
        <Form
          dataForm={inputRegister}
          buttonName={"Daftar"}
          handleSubmitData={(data, resetField, setLoading) => {
            handleSubmitData({
              data,
              resetField,
              setLoading,
              navigate,
              postData: RegisterService,
            });
          }}
        />
      </LayoutAuth>
    </>
  );
};

export default RegisterPage;
