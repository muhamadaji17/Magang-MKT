/** @format */

import { Form } from "../../components/molecules";
import { handleSubmitData, loginPattern } from "../../pattern";
import { loginService } from "../../service/authService,";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/images/logo/LOGO RAIN IJOBIRU.SVG";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 md:py-5 h-screen flex justify-center items-center bg-[url('/public/images/background/bg-rain.png')] bg-no-repeat bg-cover">
      <div className="flex justify-center items-center p-10 bg-white/10 backdrop-blur-sm text-white w-96 rounded-xl">
        <div className="w-full">
          <div className="text-center mb-7">
            <img src={Logo} alt="logo rain" className="w-40 mx-auto" />
          </div>
          <Form
            configInput={loginPattern}
            buttonText={"Login"}
            buttonClassName="bg-blue-900 hover:bg-blue-800"
            handleSubmitData={(data, extraOptionsForm) =>
              handleSubmitData(data, loginService, {
                navigate,
                ...extraOptionsForm,
              })
            }
            LinkForgetPassword={"/forgot-password"}
            ForgetPassword={"Forgot Password ? "}
          />

          {/* <div className="text-center mt-2 text-sm">
            <Link to={"/forgot-password"} className="hover:underline">
              Reset Your Password
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
