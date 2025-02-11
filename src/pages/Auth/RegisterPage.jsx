import { LayoutAuth } from "../../component/layouts";
import { inputRegister } from "../../pattern/PatternAuth/Register";
import { handleSubmitData } from "../../pattern";
import { RegisterService } from "../../service/authService";
import { Form } from "../../component/organism";
import { Link, useNavigate } from "react-router";

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

        <span className="mt-3 text-[12px]">
          Sudah punya akun?{" "}
          <Link className=" underline hover:text-blue-600" to={"/login"}>
            Login disini!
          </Link>
        </span>
      </LayoutAuth>
    </>
  );
};

export default RegisterPage;
