import { useForm } from "react-hook-form";
import { InputForm } from "../molecules";
import { Button } from "../atoms";
import { useDefaultForm, useGlobalHooks } from "../../hooks";
import { getDefaultValue } from "../../utils";

const Form = ({
    dataForm,
    handleSubmitData,
    handleClick,
    showPassword,
    showConfirmPassword,
    buttonName,
    buttonStyle,
    handleConfirmPassword,
    loading,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: getDefaultValue(dataForm),
    });

    const { disableDefaultValue, setDisableDefaultValue } = useGlobalHooks();
    const inputValue = watch();

    useDefaultForm(dataForm, inputValue, setDisableDefaultValue);

    return (
        <form
            onSubmit={handleSubmit((data) => handleSubmitData(data, reset))}
            className="flex flex-col justify-center gap-4 w-full"
        >
            {dataForm?.map((data, index) => (
                <div key={index} className="grid grid-cols-12 gap-4">
                    <div
                        className={`relative ${(() => {
                            switch (data.grid) {
                                case 12:
                                    return "col-span-12";
                                case 6:
                                    return "col-span-6";
                                case 4:
                                    return "col-span-4";
                                case 3:
                                    return "col-span-3";
                                case 2:
                                    return "col-span-2";
                                case 1:
                                    return "col-span-1";
                                default:
                                    return "col-span-12";
                            }
                        })()}`}
                    >
                        {data.jenisInputan === "input" ? (
                            <InputForm
                                labelText={data.title}
                                id={data.name}
                                type={
                                    data.type === "password"
                                        ? data.name === "password"
                                            ? showPassword
                                                ? "text"
                                                : "password"
                                            : showConfirmPassword
                                            ? "text"
                                            : "password"
                                        : data.type
                                }
                                placeholder={data.placeholder}
                                register={register}
                                addOptionError={data.addOptionError}
                                errors={errors[data.name]}
                            />
                        ) : data.jenisInputan === "hidden" ? (
                            <InputForm
                                id={data.name}
                                type={data.type}
                                register={register}
                                variant={"hidden"}
                            />
                        ) : null}
                        {data.showPasswordIcon && (
                            <div
                                className="absolute top-10 right-2 cursor-pointer"
                                onClick={() => {
                                    if (data.name === "password") {
                                        handleClick();
                                    } else if (
                                        data.name === "confirmPassword"
                                    ) {
                                        handleConfirmPassword();
                                    }
                                }}
                            >
                                {(data.name === "password" && showPassword) ||
                                (data.name === "confirmPassword" &&
                                    showConfirmPassword) ? (
                                    <data.showPasswordIcon className="w-5 h-5 text-blue-600" />
                                ) : (
                                    <data.hiddenPasswordIcon className="w-5 h-5 text-blue-600" />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <div className="flex justify-center lg:justify-end">
                <Button
                    className={buttonStyle}
                    disable={loading || disableDefaultValue}
                >
                    {buttonName}
                </Button>
            </div>
        </form>
    );
};

export default Form;
