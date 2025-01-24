import Button from "../atom/Button";
import FormTitle from "../moleculs/FormTitle";
import Input from "../atom/Input";
import Form from "../atom/Form";
import { Link } from "react-router-dom";
import showAlert from "../../utils/ShowAlert";
import useState from "react";
import { apiCall } from "../../api/apiPost";
import { useLoginForm } from "../../hook/useLoginForm";
import ShowPassword from "../moleculs/ShowPassword";
import usePasswordToggle from "../../hook/usePasswordToogle";
import TextError from "../atom/TextError";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm({
    username: "",
    password: "",
  });

  const { showPassword, handlePasswordToggle } = usePasswordToggle();

  const onSubmit = async (data) => {
    try {
      const res = await apiCall("/login", {
        username: data.username,
        password: data.password,
      });

      if (res.status === true) {
        showAlert("Success", res.message, "success", 2000);
      } else {
        showAlert("Error", res.message, "error", 2000);
      }
      console.log(data);
    } catch (error) {
      showAlert("Error", error.response.data.message, "error", 2000);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/3 flex flex-col gap-4 shadow-xl"
      >
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
          {...register("username", {
            required: "Username harus diisi",
          })}
        />
        {errors.username && <TextError>{errors.username.message}</TextError>}
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          htmlFor="password"
          label="password"
          labelName="Password"
          {...register("password", {
            required: "Password harus diisi",
          })}
        />
        {errors.password && <TextError>{errors.password.message}</TextError>}
        <div className="w-full flex justify-between items-center text-sm">
          <ShowPassword
            checked={showPassword}
            onChange={handlePasswordToggle}
            id="show-password"
            label="Show Password"
          />
          <Link to={"/auth/forgot-password"}>
            <p className="font-semibold text-primary cursor-pointer">
              Forgot Password
            </p>
          </Link>
        </div>
        <Button className="text-white">
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
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
