import { useForm } from "react-hook-form";
import { handleSubmit } from "../../pattern/handleSubmit.";
import ShowAlert from "../../utils/showAlert";
import Form from "../atom/Form";

const FormTemplate = ({ isRegister }) => {
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone_number: "",
    },
  });

  return (
    <>
      <Form onSubmit={handleFormSubmit(onSubmit)}></Form>
    </>
  );
};

export default FormTemplate;
