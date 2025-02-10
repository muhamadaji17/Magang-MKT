import { Input, Label, Errors } from '../atoms';

const InputForm = ({
    labelText,
    labelStyle,
    id,
    errors,
    register,
    addOptionError,
    variant,
    ...props
}) => {
    return (
        <div className='flex flex-col gap-1'>
            <Label htmlFor={id} className={labelStyle}>
                {labelText}
            </Label>
            <Input
                id={id}
                register={register}
                addOptionError={addOptionError}
                variant={variant}
                {...props}
            />
            {errors && (
                <Errors className='text-sm text-red-500'>
                    {errors.message}
                </Errors>
            )}
        </div>
    );
};

export default InputForm;
