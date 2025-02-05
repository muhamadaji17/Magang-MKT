import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiPost } from "../../api/apiCall";
import usePasswordToggle from "../../hook/usePasswordToogle";
import { showAlert } from "../../utils/index";
import dataRegister from "../../utils/dataRegister";

import { Button, FormTitle, Input, Form, ShowPassword } from "../index";

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
      const res = await apiPost("/auth/register", {
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
        className="w-2/3 flex flex-col gap-4 shadow-xl bg-white"
      >
        <FormTitle
          title="Register Account!"
          description="Please enter your details"
        />
        {dataRegister.map((input, index) => (
          <div key={index}>
            <Input
              index={index}
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
              <p className="text-red-500">{errors[input.id].message}</p>
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
        </div>
        <Button className="text-white px-4 py-2 bg-primary">
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
