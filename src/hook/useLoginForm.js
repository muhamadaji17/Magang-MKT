import { useForm } from "react-hook-form";

export function useLoginForm(defaultValues) {
  return useForm({
    mode: "onSubmit",

    defaultValues,
  });
}
