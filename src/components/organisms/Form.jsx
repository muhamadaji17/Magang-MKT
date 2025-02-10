import { useForm } from 'react-hook-form';
import { InputForm, SelectForm } from '../molecules';
import { Button } from '../atoms';
import { useFormState, useGlobalHook } from '../../hook';
import { getDefaultValues } from '../../utils';

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
        defaultValues: getDefaultValues(dataForm),
    });

    const { disableDefaultValue, setDisableDefaultValue } = useGlobalHook();
    const inputValue = watch();

    useFormState(dataForm, inputValue, setDisableDefaultValue);

    return (
        <form
            onSubmit={handleSubmit((data) => handleSubmitData(data, reset))}
            className='flex flex-col gap-4 w-[90%] lg:w-[570px]'
        >
            {dataForm?.map((data, index) => (
                <div key={index} className='relative'>
                    {data.jenisInputan === 'input' ? (
                        <InputForm
                            labelText={data.title}
                            id={data.name}
                            type={
                                data.type === 'password'
                                    ? data.name === 'password'
                                        ? showPassword
                                            ? 'text'
                                            : 'password'
                                        : showConfirmPassword
                                        ? 'text'
                                        : 'password'
                                    : data.type
                            }
                            placeholder={data.placeholder}
                            register={register}
                            addOptionError={data.addOptionError}
                            errors={errors[data.name]}
                        />
                    ) : data.jenisInputan === 'hidden' ? (
                        <InputForm
                            labelText={data.title}
                            id={data.name}
                            variant='hidden'
                            labelStyle='hidden'
                            type={
                                data.type === 'password'
                                    ? data.name === 'password'
                                        ? showPassword
                                            ? 'text'
                                            : 'password'
                                        : showConfirmPassword
                                        ? 'text'
                                        : 'password'
                                    : data.type
                            }
                            placeholder={data.placeholder}
                            register={register}
                            addOptionError={data.addOptionError}
                            errors={errors[data.name]}
                        />
                    ) : data.jenisInputan === 'select' ? (
                        <SelectForm
                            labelText={data.title}
                            title={data.title}
                            id={data.name}
                            options={data.options}
                            register={register}
                            addOptionError={data.addOptionError}
                            errors={errors[data.name]}
                        />
                    ) : null}
                    {data.showPasswordIcon && (
                        <div
                            className='absolute top-10 right-2 cursor-pointer'
                            onClick={() => {
                                if (data.name === 'password') {
                                    handleClick();
                                } else if (data.name === 'confirmPassword') {
                                    handleConfirmPassword();
                                }
                            }}
                        >
                            {(data.name === 'password' && showPassword) ||
                            (data.name === 'confirmPassword' &&
                                showConfirmPassword) ? (
                                <data.showPasswordIcon className='w-5 h-5 text-blue-600' />
                            ) : (
                                <data.hiddenPasswordIcon className='w-5 h-5 text-blue-600' />
                            )}
                        </div>
                    )}
                </div>
            ))}
            <div className='flex justify-center lg:justify-end'>
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
