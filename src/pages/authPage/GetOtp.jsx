/** @format */

import { Form } from "../../components/molecules";
import { handleSubmitData } from "../../pattern";
import { otpService } from "../../service/authService,";
import { useNavigate } from "react-router-dom";
import Logo from "../../../public/images/logo/LOGO RAIN COLOR.SVG";
import { getOTPPattern } from "../../pattern/authPattern";

const GetOtpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 md:py-5 h-screen flex justify-center items-center bg-[url('/public/images/background/bg-rain.png')] bg-no-repeat bg-cover">
      <div className="flex justify-center items-center p-10 bg-white/10 backdrop-blur-sm text-white w-96 rounded-xl">
        <div className="w-full">
          <div className="text-center mb-7">
            <img src={Logo} alt="logo rain" className="w-40 mx-auto" />
          </div>
          <Form
            configInput={getOTPPattern}
            buttonText={"Login"}
            buttonClassName="bg-blue-900 hover:bg-blue-800"
            handleSubmitData={(data, extraOptionsForm) =>
              handleSubmitData(data, otpService, {
                navigate,
                ...extraOptionsForm,
              })
            }
            LinkForgetPassword={"/login"}
            ForgetPassword={"Click here if you want Login"}
          />
        </div>
      </div>
    </div>
  );
};

export default GetOtpPage;
