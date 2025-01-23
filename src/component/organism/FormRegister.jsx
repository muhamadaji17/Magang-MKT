import Button from "../atom/Button";
import FormTitle from "../moleculs/FormTitle";
import Input from "../atom/Input";
import ShowPassword from "../moleculs/ShowPassword";
import Form from "../atom/Form";
import { Link } from "react-router-dom";

const FormRegister = () => {
  return (
    <>
      <Form className="w-2/3 flex flex-col gap-4 shadow-xl">
        <FormTitle
          title="Register Account!"
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
          minLength={6}
          htmlFor="password"
          label="password"
          labelName="Password"
        />
        <Input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          htmlFor="email"
          label="email"
          labelName="Email"
        />
        <Input
          type="tel"
          id="phone-number"
          placeholder="08xxxxxxxxxx"
          htmlFor="phone-number"
          label="phone-number"
          labelName="Phone Number"
        />
        <div className="w-full flex justify-between items-center text-sm">
          <ShowPassword />
          <p className="font-semibold text-primary cursor-pointer">
            Forgot Password
          </p>
        </div>
        <Button className="text-white">Submit</Button>
        <p className="text-center">
          Already have account?{" "}
          <Link to={"/auth/login"}>
            <span className="text-primary cursor-pointer">Sign In</span>
          </Link>
        </p>
      </Form>
    </>
  );
};

export default FormRegister;
