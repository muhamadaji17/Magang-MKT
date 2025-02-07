import { Link } from "react-router-dom";
import { Button } from "../atoms";
import { useForm } from "react-hook-form";
import { InputForm } from "../molecules/index";
import { disabledButtonIfNoChange, handleShowPassword } from "../../pattern";
import { useDefaultValue, useGlobalHook } from "../../hook/index";
import { useEffect } from "react";

const Form = ({
  dataForm,
  authFor,
  buttonName,
  handleSubmitData,
  buttonBg,
}) => {
  const { loading, setLoading } = useGlobalHook();
  const { showPassword, setShowPassword } = useGlobalHook();
  const { disabledButton, setDisabledButton } = useGlobalHook();
  const {
    showPassword: showConfirmPassword,
    setShowPassword: setShowConfirmPassword,
  } = useGlobalHook();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: useDefaultValue(dataForm),
  });

  const inputValues = watch();

  useEffect(() => {
    disabledButtonIfNoChange(dataForm, inputValues, setDisabledButton);
  }, [inputValues]);

  const onSubmit = (data) => {
    setLoading(true);
    handleSubmitData(data, reset, setLoading);
  };

  return (
    <div className="overflow-hidden mt-6 w-full">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          {dataForm?.map((input, index) => {
            return (
              <div key={index}>
                <InputForm
                  inputConfig={input}
                  onChange={input.onChange}
                  error={errors[input.name]}
                  register={register}
                  showPassword={
                    input.name !== "confirmPassword"
                      ? showPassword
                      : showConfirmPassword
                  }
                  handleClickIcon={() => {
                    const isConfirmPassword = input.name !== "confirmPassword";
                    const showPasswordState = {
                      show: isConfirmPassword
                        ? showPassword
                        : showConfirmPassword,
                      set: isConfirmPassword
                        ? setShowPassword
                        : setShowConfirmPassword,
                    };
                    handleShowPassword(
                      showPasswordState.show,
                      showPasswordState.set
                    );
                  }}
                />
              </div>
            );
          })}

          {authFor === "login" && (
            <div className="flex justify-between mb-4">
              <Link
                className="text-pink-500 text-[12px] inline-block hover:underline"
                to={"/forgot-password"}
              >
                Lupa Password?
              </Link>
              <Link
                className="text-pink-500 text-[12px] inline-block hover:underline"
                to={"/register"}
              >
                Daftar
              </Link>
            </div>
          )}

          {buttonName && (
            <Button
              className={`${loading || disabledButton ? "opacity-50" : ""} ${
                !buttonBg
                  ? "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"
                  : buttonBg
              } rounded-md w-full px-1 py-2 text-white mt-5`}
              type={"submit"}
              disabled={loading || disabledButton}
            >
              {loading
                ? "Loading...."
                : disabledButton
                ? "Disabled"
                : buttonName}
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
