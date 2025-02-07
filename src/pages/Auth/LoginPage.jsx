import React from "react";
import { LayoutAuth } from "../../component/layouts";
import { inputLogin } from "../../pattern/PatternAuth/Login";
import { handleSubmitData } from "../../pattern";
import { LoginService } from "../../service";
import { useNavigate } from "react-router";
import { useAccessToken } from "../../hook";
import { Form } from "../../component/organism";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAccessToken } = useAccessToken();

  return (
    <>
      <LayoutAuth title={"Form Login"}>
        <Form
          dataForm={inputLogin}
          buttonName={"Login"}
          authFor={"login"}
          handleSubmitData={(data, resetField, setLoadingButton) => {
            handleSubmitData({
              data,
              resetField,
              navigate,
              setLoading: setLoadingButton,
              postData: LoginService,
              setState: setAccessToken,
            });
          }}
        />
      </LayoutAuth>
    </>
  );
};

export default LoginPage;
