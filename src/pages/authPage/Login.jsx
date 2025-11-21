import { Form } from "../../components/molecules";
import { handleSubmitData, loginPattern } from "../../pattern";
import { loginService } from "../../service/authService,";
import { useNavigate } from "react-router-dom";
import Logo from "../../../public/images/logo/LOGO RAIN COLOR.SVG";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 md:py-5 h-screen flex justify-center items-center bg-[url('/public/images/background/bg-rain.png')] bg-no-repeat bg-cover">
      <div className="flex justify-center items-center p-10 bg-white/10 backdrop-blur-sm text-white w-96 rounded-xl">
        <div className="w-full">
          <div className="text-center mb-7">
            {/* <h2 className="text-2xl font-semibold text-center">Welcome</h2>
            <span className="text-gray-400 mt-4 text-xs">
              Please login first
            </span> */}

            <img src={Logo} alt="logo rain" className="w-40 mx-auto" />
          </div>
          <Form
            configInput={loginPattern}
            buttonText={"Login"}
            buttonClassName="bg-blue-900 hover:bg-blue-800"
            handleSubmitData={(data) =>
              handleSubmitData(data, loginService, { navigate })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
