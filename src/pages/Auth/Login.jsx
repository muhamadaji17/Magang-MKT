import { LayoutAuth } from "../../component/layout";
import { FormInputan } from "../../component/organism";
import { useGlobalHook } from "../../hook";
import {
  handleShowPassword,
  handleSubmitData,
  inputLogin,
} from "../../pattern";
import { LoginService } from "../../service";

const LoginPage = () => {
  const { showPassword, setShowPassword } = useGlobalHook();

  return (
    <>
      <LayoutAuth judul={"Login"}>
        {/* <h1>hai</h1> */}
        <FormInputan
          dataForm={inputLogin}
          handleSubmitData={(data) => handleSubmitData(data, LoginService)}
          namaButton1={"Login"}
          handleClick={() => handleShowPassword(setShowPassword, showPassword)}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
      </LayoutAuth>
    </>
  );
};

export default LoginPage;
