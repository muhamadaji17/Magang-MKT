import Button from "../atom/Button";
import FormTitle from "../moleculs/FormTitle";
import Input from "../atom/Input";
import Form from "../atom/Form";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import showAlert from "../../utils/ShowAlert";
import { apiCall } from "../../api/apiPost";
import ShowPassword from "../moleculs/ShowPassword";
import usePasswordToggle from "../../hook/usePasswordToogle";

const FormRegister = () => {
  const navigate = useNavigate();

  const { showPassword, handlePasswordToggle } = usePasswordToggle();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    username: "",
    password: "",
    email: "",
    phone_number: "",
  });

  const onSubmit = async (data) => {
    try {
      const res = await apiCall("/register", {
        username: data.username,
        password: data.password,
        email: data.email,
        phone_number: data.phone_number,
      });

      if (res.status === true) {
        showAlert("Success", res.message, "success", 5000);
        navigate("/auth/login");
      } else {
        showAlert("Error", res.message, "error", 5000);
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/3 flex flex-col gap-4 shadow-xl"
      >
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
          {...register("username", {
            required: "Username is Required",
          })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          minLength={6}
          htmlFor="password"
          label="password"
          labelName="Password"
          {...register("password", {
            required: "password is Required",
            minLength: { value: 6 },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <Input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          htmlFor="email"
          label="email"
          labelName="Email"
          {...register("email", {
            required: "Email is Required",
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input
          type="tel"
          id="phone_number"
          placeholder="08xxxxxxxxxx"
          htmlFor="phone-number"
          label="phone-number"
          labelName="Phone Number"
          {...register("phone_number", {
            required: "Phone Number is Required",
          })}
        />
        {errors.phone_number && (
          <p className="text-red-500">{errors.phone_number.message}</p>
        )}
        <div className="w-full flex justify-between items-center text-sm">
          <ShowPassword
            checked={showPassword}
            onChange={handlePasswordToggle}
            id="show-password"
            label="Show Password"
          />
        </div>
        <Button className="text-white">
          {isSubmitting ? "loading" : "Submit"}
        </Button>
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
