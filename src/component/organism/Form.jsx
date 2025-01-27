import { Link, useNavigate } from "react-router-dom"; // Pastikan menggunakan 'react-router-dom'
import { Button } from "../atoms";
import { useForm } from "react-hook-form";
import { InputForm } from "../molecules/index";
import { handleShowPassword } from "../../pattern";
import { useGlobalHook } from "../../hook/index";

const Form = ({ dataForm, authFor, buttonName, handleSubmitData }) => {
  const { loadingButton, setLoadingButton } = useGlobalHook();
  const { showPassword, setShowPassword } = useGlobalHook();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const {
    showPassword: showConfirmPassword,
    setShowPassword: setShowConfirmPassword,
  } = useGlobalHook();
  const onSubmit = (data) => {
    setLoadingButton(true);
    handleSubmitData(data, reset, setLoadingButton);
  };

  return (
    <div className="w-full overflow-hidden mt-6">
      <div className="flex flex-col">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {dataForm?.map((data, index) => (
            <div key={index}>
              <InputForm
                data={data}
                error={errors[data.name]}
                register={register}
                showPassword={
                  data.name !== "confirmPassword"
                    ? showPassword
                    : showConfirmPassword
                }
                handleClickIcon={() => {
                  const isConfirmPassword = data.name !== "confirmPassword";
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
          ))}

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

          <Button
            className={`${
              loadingButton ? "opacity-50" : ""
            } bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-md w-full px-1 py-2 text-white mt-5`}
            type={"submit"}
            disabled={loadingButton}
          >
            {loadingButton ? "Loading...." : buttonName}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
