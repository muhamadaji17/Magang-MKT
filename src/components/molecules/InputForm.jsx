import { Input, Label, Error } from '../atoms';

const InputForm = ({
    labelText,
    labelStyle,
    id,
    errors,
    register,
    addOptionError,
    variant,
    jenisInputan,
    ...props
}) => {
    return (
        <div
            className={`flex ${
                jenisInputan === 'checkbox' ? 'items-center' : 'flex-col'
            } gap-1`}
        >
            <Label htmlFor={id} className={labelStyle}>
                {labelText}
            </Label>
            {jenisInputan === 'input' || jenisInputan === 'checkbox' ? (
                <Input
                    id={id}
                    register={register}
                    addOptionError={addOptionError}
                    variant={variant}
                    {...props}
                />
            ) : jenisInputan === 'textarea' ? (
                <textarea
                    id={id}
                    {...register(id)}
                    className='border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-600'
                    {...props}
                />
            ) : null}

            {errors && (
                <Error className='text-sm text-red-500'>{errors.message}</Error>
            )}
        </div>
    );
};

export default InputForm;
