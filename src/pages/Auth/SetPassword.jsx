import { apiCall } from "../../api/apiPost";
import usePasswordToggle from "../../hook/usePasswordToogle";
import useOtpStore from "../../store/otpStore";
import showAlert from "../../utils/ShowAlert";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  ShowPassword,
  Form,
  Input,
  Section,
  FormTitle,
  TextError,
} from "../../component/index";

const SetPassword = () => {
  const { showPassword, handlePasswordToggle } = usePasswordToggle();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    password: "",
    confirm_password: "",
  });
  const { otpData } = useOtpStore();

  const onSubmit = async (data) => {
    try {
      const res = await apiCall("/set-pass", {
        password: data.password,
        otp: otpData.otp,
        phone_number: otpData.phone_number,
      });
      if (res.status === true) {
        showAlert("Success", res.message, "success", 5000);
        navigate("/auth/login");
      } else {
        showAlert("Error", res.message, "error", 5000);
      }
      console.log(res.data);
    } catch (error) {
      showAlert("Error", error.config.data);
    }
  };

  return (
    <>
      <Section>
        <Container className="flex justify-center items-center h-full">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormTitle
              title="Set Password"
              description="Enter your new password"
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <TextError>{errors.password.message}</TextError>
            )}
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirm-password"
              {...register("confirm_password", { required: true })}
            />
            {errors.confirm_password && (
              <TextError>{errors.confirm_password.message}</TextError>
            )}
            <div className="w-full flex justify-start items-center">
              <ShowPassword
                checked={showPassword}
                onChange={handlePasswordToggle}
                id="show-password"
                label="Show Password"
              />
            </div>
            <Button className="text-white">
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </Form>
        </Container>
      </Section>
    </>
  );
};

export default SetPassword;
