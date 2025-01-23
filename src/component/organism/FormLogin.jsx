import Button from "../atom/Button";
import FormTitle from "../moleculs/FormTitle";
import Input from "../atom/Input";
import ShowPassword from "../moleculs/ShowPassword";
import Form from "../atom/Form";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <>
      <Form className="w-2/3 flex flex-col gap-4 shadow-xl">
        <FormTitle
          title="Welcome Back!"
          description="Please enter your details"
        />
        <Input
          label="username"
          labelName="Username"
          htmlFor="username"
          type="text"
          id="username"
          placeholder="Masukkan Username"
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          htmlFor="password"
          label="password"
          labelName="Password"
        />
        <div className="w-full flex justify-between items-center text-sm">
          <ShowPassword />
          <p className="font-semibold text-primary cursor-pointer">
            Forgot Password
          </p>
        </div>
        <Button className="text-white">Submit</Button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to={"/auth/register"}>
            <span className="text-primary cursor-pointer">Register</span>
          </Link>
        </p>
      </Form>
    </>
  );
};

export default FormLogin;
