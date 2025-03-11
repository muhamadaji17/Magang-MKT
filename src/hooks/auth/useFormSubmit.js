import { submitForm } from "@/services/auth/formService";

const useFormSubmit = () => {
  const handleFormSubmit = async (data, login, navigate) => {
    try {
      const response = await submitForm(data, login, navigate);
      return response;
    } catch (error) {
      console.error("error form: ", error);
    }
  };

  return { handleFormSubmit };
};

export default useFormSubmit;
