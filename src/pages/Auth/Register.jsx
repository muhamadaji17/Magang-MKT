import { LayoutAuth } from "../../component/layout";
import { FormInputan } from "../../component/organism";
import { useGlobalHook } from "../../hook";
import {
  handleShowPassword,
  handleSubmitData,
  inputRegister,
} from "../../pattern";
import { RegisterService } from "../../service";

const RegisterPage = () => {
  const { showPassword, setShowPassword } = useGlobalHook();

  return (
    <>
      <LayoutAuth judul={"Register"}>
        {/* <h1>hai</h1> */}
        <FormInputan
          dataForm={inputRegister}
          handleSubmitData={(data) => handleSubmitData(data, RegisterService)}
          namaButton1={"Login"}
          handleClick={() => handleShowPassword(setShowPassword, showPassword)}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          questAccount={"Sudah Punya Akun ? "}
          actionAccountName={"Login Sekarang"}
          linkQuestAccount={"/"}
        />
      </LayoutAuth>
    </>
  );
};

export default RegisterPage;
