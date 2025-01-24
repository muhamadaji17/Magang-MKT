import axios from "axios";
import { apiCall } from "../../api/apiPost";
import Button from "../../component/atom/Button";
import Container from "../../component/atom/Container";
import Form from "../../component/atom/Form";
import Input from "../../component/atom/Input";
import Section from "../../component/atom/Section";
import FormTitle from "../../component/moleculs/FormTitle";
import ShowPassword from "../../component/moleculs/ShowPassword";
import { useLoginForm } from "../../hook/useLoginForm";
import usePasswordToggle from "../../hook/usePasswordToogle";
import useOtpStore from "../../store/otpStore";
import showAlert from "../../utils/ShowAlert";

const SetPassword = () => {
  const { showPassword, handlePasswordToggle } = usePasswordToggle();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm({
    newPassword: "",
    confirm_password: "",
  });
  const { otpData } = useOtpStore();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/set-password`,
        {
          password: data.newPassword,
          otp: otpData.otp,
          phone_number: otpData.phone_number,
        }
      );
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
              id="newPassword"
              {...register("newPassword", { required: true })}
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirm-password"
              {...register("confirm_password", { required: true })}
            />
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
