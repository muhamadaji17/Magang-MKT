import { apiCall } from "../../api/apiPost";
import Button from "../../component/atom/Button";
import Container from "../../component/atom/Container";
import Form from "../../component/atom/Form";
import Input from "../../component/atom/Input";
import Section from "../../component/atom/Section";
import FormTitle from "../../component/moleculs/FormTitle";
import useOtpSore from "../../store/otpStore";
import { useForm } from "react-hook-form";
import showAlert from "../../utils/ShowAlert";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { otpData, setOtpData } = useOtpSore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      phone_number: "",
    },
  });

  const navigate = useNavigate();

  const handleSaveOtp = (payload) => {
    setOtpData({
      created: payload.created,
      createdAt: payload.createdAt,
      exp_otp: payload.exp_otp,
      id: payload.id,
      jam_keluar: payload.jam_keluar,
      otp: payload.otp,
      phone_number: payload.phone_number,
      start_otp: payload.start_otp,
      status: payload.status,
      updated: payload.updated,
      updatedAt: payload.updatedAt,
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await apiCall(
        "/forgot-password",
        {
          phone_number: data.phone_number,
        },
        (message) => showAlert("Success", message, "success"),
        (message) => showAlert("Error", message, "error", 2000)
      );
      console.log(response);

      handleSaveOtp(response.payload);
      navigate("/auth/forgot-password/otp-verification");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Section>
        <Container className="h-full flex justify-center items-center">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormTitle
              title="Send OTP"
              description="Enter your number to send OTP"
            />
            <Input
              htmlFor="phone"
              label="phone"
              labelName="Phone Number"
              placeholder="08xxxxxxx"
              id="phone"
              type="tel"
              {...register("phone_number", {
                required: "Phone Number is Required",
              })}
            />
            <Button className="text-white">Submit</Button>
          </Form>
        </Container>
      </Section>
    </>
  );
};

export default ForgotPassword;
