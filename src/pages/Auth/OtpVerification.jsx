import useOtpStore from "../../store/otpStore";
import showAlert from "../../utils/ShowAlert";
import { useNavigate } from "react-router-dom";
import { useLoginForm } from "../../hook/useLoginForm";

import {
  Button,
  Container,
  Form,
  Input,
  Section,
  FormTitle,
  TextError,
} from "../../component/index";

const OtpVerification = () => {
  const { otpData } = useOtpStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm({
    otp: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.otp === otpData.otp) {
      showAlert("Success", "OTP is Valid", "success");
      navigate("/auth/forgot-password/otp-verification/set-password");
    } else {
      showAlert("Error", "OTP is Invalid", "error");
    }
  };

  console.log(otpData.otp);
  return (
    <>
      <Section>
        <Container className="flex justify-center items-center h-full">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormTitle title="OTP Verification" description="Enter your OTP" />
            <Input
              label="otp"
              labelName="OTP"
              type="number"
              maxLength={6}
              id="otp"
              placeholder="123456"
              {...register("otp", {
                required: "OTP is Required",
                maxLength: 6,
              })}
            />
            {errors.otp && <TextError>{errors.otp.message}</TextError>}
            <Button className="text-white px-4 py-2" type="submit">
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </Form>
        </Container>
      </Section>
    </>
  );
};

export default OtpVerification;
