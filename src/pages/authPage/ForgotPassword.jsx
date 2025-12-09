import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Logo from "../../../public/images/logo/LOGO RAIN IJOBIRU.SVG";
import { Form } from "../../components/molecules";
import { forgotPasswordPattern, handleSubmitData } from "../../pattern";
import { OtpInput } from "../../components/atom";
import { useState } from "react";
import { getOtpService } from "../../service";

const ForgotPassword = () => {
  const [type, setType] = useState(Cookies.get("type") ?? "form");

  const handleRemoveCookies = () => {
    const cookiesToRemove = ["datas", "type"]; // Array of cookie names to remove
    cookiesToRemove.forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
  };

  return (
    <div className="px-10 md:py-5 h-screen flex justify-center items-center bg-[url('/public/images/background/bg-rain.png')] bg-no-repeat bg-cover">
      <div className="flex justify-center items-center p-10 bg-white/10 backdrop-blur-sm text-white w-96 rounded-xl">
        <div className="w-full">
          <div className="text-center mb-7">
            <img src={Logo} alt="logo rain" className="w-40 mx-auto" />
          </div>
          {type === "form" ? (
            <Form
              configInput={forgotPasswordPattern}
              buttonText={"Reset Password"}
              buttonClassName="bg-blue-900 hover:bg-blue-800 mt-2"
              handleSubmitData={(data, extraOptionsForm) => {
                handleSubmitData(data, getOtpService, {
                  ...extraOptionsForm,
                  setType,
                });
              }}
            />
          ) : type === "otp" ? (
            <OtpInput handleRemoveCookies={handleRemoveCookies} />
          ) : null}

          <div className="mt-2 text-center">
            Remember your password?{" "}
            <Link
              to={"/login"}
              onClick={handleRemoveCookies}
              className="text-blue-300 hover:text-blue-400 hover:underline font-medium"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
