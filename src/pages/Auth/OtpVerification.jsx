import { useForm } from "react-hook-form";
import Button from "../../component/atom/Button";
import Container from "../../component/atom/Container";
import Form from "../../component/atom/Form";
import Input from "../../component/atom/Input";
import Section from "../../component/atom/Section";
import FormTitle from "../../component/moleculs/FormTitle";
import useOtpStore from "../../store/otpStore";
import showAlert from "../../utils/ShowAlert";

const OtpVerification = () => {
  const { otpData } = useOtpStore();
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(otpData.otp);
    if (data.otp === otpData.otp) {
      showAlert("Success", "OTP is Valid", "success");
    } else {
      showAlert("Error", "OTP is Invalid", "error");
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
            <Button className="text-white" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Section>
    </>
  );
};

export default OtpVerification;
