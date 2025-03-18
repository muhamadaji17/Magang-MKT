import { useForm, Controller } from "react-hook-form";
import { InputForm, QuilTextEditor } from "../molecules";
import { Button } from "../atoms";
import { useDefaultForm, useGlobalHooks } from "../../hooks";
import { getDefaultValue, gridClass } from "../../utils";

const Form = ({
    dataForm,
    handleSubmitData,
    handleClick,
    showPassword,
    showConfirmPassword,
    buttonNameSatu,
    buttonNameDua,
    buttonStyle,
    handleConfirmPassword,
    loading,
    handleDelete,
    imageFor,
}) => {
    const {
        control,
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
            className="space-y-3 w-full"
        >
            <div className="grid grid-cols-12 gap-4">
                {dataForm?.map((data, index) => (
                    <div
                        key={index}
                        className={`relative ${gridClass(data.grid)}`}
                    >
                        {data.jenisInputan === "input" ? (
                            <Controller
                                name={data.name}
                                control={control}
                                rules={data.addOptionError}
                                render={({ field }) => (
                                    <InputForm
                                        field={field}
                                        id={data.name}
                                        labelText={data.title}
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
                                        errors={errors[data.name]}
                                        optionsSelect={data.options}
                                        defaultSelect={data.title}
                                        defaultValue={data.defaultValue}
                                        imageFor={imageFor}
                                        checked={field.value}
                                    />
                                )}
                            />
                        ) : data.jenisInputan === "hidden" ? (
                            <Controller
                                name={data.name}
                                control={control}
                                rules={data.addOptionError}
                                render={({ field }) => (
                                    <InputForm
                                        field={field}
                                        id={data.name}
                                        type={data.type}
                                        variant={"hidden"}
                                    />
                                )}
                            />
                        ) : data.jenisInputan === "rich_editor" ? (
                            <Controller
                                name={data.name}
                                control={control}
                                rules={data.addOptionError}
                                render={({ field }) => (
                                    <QuilTextEditor
                                        field={field}
                                        labelText={data.title}
                                        errors={errors[data.name]}
                                    />
                                )}
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
                ))}
            </div>
            <div
                className={`flex ${
                    buttonNameDua ? "justify-center gap-4" : "justify-end"
                }`}
            >
                {buttonNameDua && (
                    <Button
                        type="button"
                        className="w-24 text-white bg-red-600"
                        onClick={() => handleDelete(dataForm[0].defaultValue)}
                    >
                        {buttonNameDua}
                    </Button>
                )}
                <Button
                    className={buttonStyle}
                    disable={loading || disableDefaultValue}
                >
                    {buttonNameSatu}
                </Button>
            </div>
        </form>
    );
};

export default Form;
