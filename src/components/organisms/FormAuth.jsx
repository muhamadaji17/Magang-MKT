import { useForm } from 'react-hook-form';
import { InputForm } from '/src/components/molecules';
import { Button } from '/src/components/atoms';

export const FormAuth = ({
    dataForm,
    handleSubmitData,
    handleClick,
    showPassword,
    showConfirmPassword,
    buttonName,
    buttonWidth,
    handleConfirmPassword,
}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

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
                            type={!showPassword ? data.type : 'text'}
                            placeholder={data.placeholder}
                            register={register}
                            addOptionError={data.addOptionError}
                            errors={errors[data.name]}
                        />
                    ) : data.jenisInputan === 'confirm' ? (
                        <InputForm
                            labelText={data.title}
                            id={data.name}
                            type={!showConfirmPassword ? data.type : 'text'}
                            placeholder={data.placeholder}
                            register={register}
                            addOptionError={data.addOptionError}
                            errors={errors[data.name]}
                        />
                    ) : null}
                    {data.showPasswordIcon && (
                        <div
                            className='absolute top-9 right-2 cursor-pointer'
                            onClick={() => {
                                if (data.name === 'password') {
                                    handleClick();
                                } else if (data.name === 'confirmPassword') {
                                    handleConfirmPassword();
                                }
                            }}
                        >
                            {showPassword ? (
                                <data.showPasswordIcon className='w-5 h-5 text-blue-600' />
                            ) : (
                                <data.hiddenPasswordIcon className='w-5 h-5 text-blue-600' />
                            )}
                        </div>
                    )}
                </div>
            ))}
            <div className='text-center lg:text-end'>
                <Button className={`${buttonWidth} h-10`}>{buttonName}</Button>
            </div>
        </form>
    );
};
