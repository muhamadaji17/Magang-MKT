import { useForm } from 'react-hook-form';
import { InputForm } from '../molecules';
import { Button } from '../atoms';
import { useDefaultForm, useGlobalHook } from '../../hook';
import { getDefaultValue } from '../../utils';

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

    const { disableDefaultValue, setDisableDefaultValue } = useGlobalHook();
    const inputValue = watch();

    useDefaultForm(dataForm, inputValue, setDisableDefaultValue);

    return (
        <form
            onSubmit={handleSubmit((data) => handleSubmitData(data, reset))}
            className='flex flex-col gap-4 w-[90%] lg:w-[570px]'
        >
            {dataForm?.map((data, index) => (
                <div key={index} className='relative'>
                    {data.jenisInputan === 'input' ? (
                        <InputForm
                            jenisInputan={data.jenisInputan}
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
                    ) : data.jenisInputan === 'textarea' ? (
                        <InputForm
                            jenisInputan={data.jenisInputan}
                            labelText={data.title}
                            id={data.name}
                            placeholder={data.placeholder}
                            register={register}
                            addOptionError={data.addOptionError}
                            errors={errors[data.name]}
                        />
                    ) : data.jenisInputan === 'checkbox' ? (
                        <InputForm
                            jenisInputan={data.jenisInputan}
                            type={data.type}
                            labelText={data.title}
                            id={data.name}
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
