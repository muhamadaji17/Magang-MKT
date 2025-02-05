import { Link, useNavigate } from "react-router-dom";
import showAlert from "../../utils/ShowAlert";
import { useLoginForm } from "../../hook/useLoginForm";
import usePasswordToggle from "../../hook/usePasswordToogle";

import {
  TextError,
  Button,
  Input,
  Form,
  FormTitle,
  ShowPassword,
} from "../index";
import { dataLogin } from "../../utils/dataLogin";
import useAuthStore from "../../store/useAuthStore";
import { apiPost } from "../../api/apiCall";

const FormLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { showPassword, handlePasswordToggle } = usePasswordToggle();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm({
    username: "",
    password: "",
  });

  const onSubmit = async (data) => {
    try {
      const response = await apiPost("/auth/login", {
        username: data.username,
        password: data.password,
      });

      if (response.status === true) {
        login(response.data.accessToken, response.data.username);
        showAlert("Success", response.message, "success", 5000);
        navigate("/");
      } else {
        showAlert("Error", response.message, "error", 5000);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/3 flex flex-col gap-4 shadow-xl bg-white"
      >
        <FormTitle
          title="Welcome Back!"
          description="Please enter your details"
        />
        {dataLogin.map((input, index) => (
          <div key={index}>
            <Input
              type={
                input.id === "password" && !showPassword ? "password" : "text"
              }
              id={input.id}
              placeholder={input.placeholder}
              label={input.labelName}
              labelName={input.labelName}
              {...register(input.id, input.validation)}
            />
            {errors[input.id] && (
              <TextError>{errors[input.id].message}</TextError>
            )}
          </div>
        ))}
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
        <Button className="text-white px-4 py-2 bg-primary">
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
