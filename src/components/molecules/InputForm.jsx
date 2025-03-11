import { Input, Label, Error, File } from "../atoms";

const InputForm = ({
    labelText,
    labelStyle,
    id,
    errors,
    register,
    addOptionError,
    variant,
    type,
    defaultValue,
    defaultSelect,
    optionsSelect,
    ...props
}) => {
    return (
        <div
            className={`flex ${
                type === "checkbox" ? "items-center gap-4" : "flex-col"
            } gap-1`}
        >
            <Label htmlFor={id} className={labelStyle}>
                {labelText}
            </Label>
            {type === "text" ||
            type === "checkbox" ||
            type === "date" ||
            type === "password" ? (
                <Input
                    id={id}
                    register={register}
                    addOptionError={addOptionError}
                    variant={variant}
                    type={type}
                    {...props}
                />
            ) : type === "textarea" ? (
                <textarea
                    id={id}
                    className="ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none resize-none"
                    {...register(id, addOptionError)}
                    {...props}
                />
            ) : type === "file" ? (
                <File
                    id={id}
                    register={register}
                    addOptionError={addOptionError}
                    defaultValue={defaultValue}
                    {...props}
                />
            ) : type === "select" ? (
                <select
                    id={id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 block w-full p-2.5"
                    {...(register ? register(id, addOptionError) : {})}
                >
                    <option value="" disabled>
                        Choose a {defaultSelect}
                    </option>
                    {optionsSelect.map((option, i) => (
                        <option value={option.value} key={i}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : null}
            {errors && (
                <Error className="text-sm text-red-500">{errors.message}</Error>
            )}
        </div>
    );
};

export default InputForm;
