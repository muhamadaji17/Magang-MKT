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
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                    {...register(id, addOptionError)}
                    {...props}
                />
            ) : type === "file" ? (
                <File
                    id={id}
                    register={register}
                    addOptionError={addOptionError}
                    {...props}
                />
            ) : null}

            {errors && (
                <Error className="text-sm text-red-500">{errors.message}</Error>
            )}
        </div>
    );
};

export default InputForm;
