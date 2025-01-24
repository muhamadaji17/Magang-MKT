import { apiCall } from "../../api/apiPost";
import useOtpSore from "../../store/otpStore";
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

const ForgotPassword = () => {
  const { otpData, setOtpData } = useOtpSore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm({
    phone_number: "",
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
      const response = await apiCall("/forgot-password", {
        phone_number: data.phone_number,
      });
      if (response.status === true) {
        showAlert("Success", response.message, "success", 5000);
      } else {
        showAlert("Error", response.message, "error", 5000);
      }
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
            {errors.phone_number && (
              <TextError>{errors.phone_number.message}</TextError>
            )}
            <Button className="text-white">
              {isSubmitting ? "Loading" : "Submit"}
            </Button>
          </Form>
        </Container>
      </Section>
    </>
  );
};

export default ForgotPassword;
