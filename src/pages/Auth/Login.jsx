import { LayoutAuth } from "../../component/layout";
import { FormInputan } from "../../component/organism";
import { handleSubmit, inputLogin } from "../../pattern";
import { LoginService } from "../../service";

const LoginPage = () => {
  return (
    <>
      <LayoutAuth judul={"Login"}>
        {/* <h1>hai</h1> */}
        <FormInputan
          dataForm={inputLogin}
          handleSubmitData={(data) => handleSubmit(data, LoginService)}
          namaButton1={"Login"}
        />
      </LayoutAuth>
    </>
  );
};

export default LoginPage;
