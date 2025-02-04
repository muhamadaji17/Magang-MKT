import { useForm } from "react-hook-form";

function useDepartementForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      departement_code: "",
      nama_departement: "",
    },
  });

  // Optional: Tambahkan fungsi submit di dalam custom hook, jika perlu
  const onSubmit = (data) => {
    // Proses data form disini
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit, // Return juga fungsi submit jika diperlukan
  };
}

export default useDepartementForm;
