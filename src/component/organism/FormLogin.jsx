import Button from "../atom/Button";
import FormTitle from "../moleculs/FormTitle";
import Input from "../atom/Input";
import ShowPassword from "../moleculs/ShowPassword";
import Form from "../atom/Form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import showAlert from "../../utils/ShowAlert";
import { apiCall } from "../../api/apiPost";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
    },
  });

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
        {errors.username && <p>{errors.username.message}</p>}
        <Input
          type="password"
          id="password"
          placeholder="Password"
          htmlFor="password"
          label="password"
          labelName="Password"
          {...register("password", {
            required: "Password harus diisi",
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <div className="w-full flex justify-between items-center text-sm">
          <ShowPassword />
          <Link to={"/auth/forgot-password"}>
            <p className="font-semibold text-primary cursor-pointer">
              Forgot Password
            </p>
          </Link>
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
