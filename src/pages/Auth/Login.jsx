import { useState } from "react";
import Button from "../../component/atom/button";
import FormTemplate from "../../component/organism/FormTemplate";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
          <FormTemplate isRegister={false} />
          {/* <form
            action=""
            className="p-2 rounded-md border-2 flex flex-col gap-2 w-1/3"
          >
            <input
              type="text"
              id="username"
              className="w-full p-2 border-2 rounded-md"
              placeholder="Username"
            />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full p-2 border-2 rounded-md"
              placeholder="Password"
            />
            <div className="flex justify-between items-center">
              <label
                htmlFor=""
                className="flex gap-2 cursor-pointer items-center"
              >
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={showPassword}
                  onChange={toogleShowPassword}
                />
                Show Password
              </label>
              <p>Forgot Password</p>
            </div>
            <Button className={"text-white"} type={"submit"}>
              Submit
            </Button>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
