import { MdOutlineResetTv } from 'react-icons/md';
import { RxReset } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { useStore } from '/src/store/store';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '/src/lib/zod';
import { resetPassword } from '../services/axios';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export default function SettingPassword() {
    const navigate = useNavigate();
    const { phone_number } = useStore();
    const [checkSuccess, setCheckSuccess] = useState();
    const [checkFail, setCheckFail] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: zodResolver(resetPasswordSchema) });

    const onSubmit = async (data) => {
        try {
            const { otp, password } = data;
            const res = await resetPassword({ phone_number, otp, password });
            if (!res.status) {
                reset();
                setCheckFail('Wrong One Time Password(OTP)');
            } else {
                reset();
                setCheckSuccess(res.message);
            }
        } catch (error) {
            console.error('Error: ', error);
            setCheckFail(
                'An unexpected error occurred. Please try again later.'
            );
        }
    };

    const handleShowPassword = () => {
        setShowPassword((pass) => !pass);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((pass) => !pass);
    };

    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if (checkFail) {
            MySwal.fire({
                title: 'Verification Failed',
                text: checkFail,
                icon: 'error',
            }).then(() => setCheckFail(false));
        }
        if (checkSuccess) {
            MySwal.fire({
                title: 'Verification Success',
                text: checkSuccess,
                icon: 'success',
            }).then(() => {
                setCheckSuccess(false);
                navigate('/setting-password');
            });
        }
    }, [checkFail, checkSuccess]);

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center gap-4 w-[90%] lg:w-[700px]'>
                <MdOutlineResetTv className='w-32 h-32 text-blue-500 drop-shadow-2xl' />
                <div className='flex items-center gap-2'>
                    <h1 className='font-bold text-2xl'>Reset your password</h1>
                    <RxReset className='text-2xl' />
                </div>
                <div className='text-center'>
                    <p>
                        please Set your new password below and don&apos;t make
                        sure your password is secure.
                    </p>
                    <p className='text-sm text-red-500'>
                        If it is more than 5 minutes, it will be redirected to
                        the previous page.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-4 w-full'
                >
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='otp'>OTP</label>
                        <input
                            type='text'
                            id='otp'
                            placeholder='423224'
                            className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none'
                            autoComplete='off'
                            {...register('otp')}
                        />
                        {errors.otp && (
                            <span className='text-sm text-red-500'>
                                {errors.otp.message}
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password' className=''>
                            new password
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none w-full'
                                placeholder='********'
                                {...register('password')}
                            />
                            <div
                                className='absolute top-3 right-2 cursor-pointer'
                                onClick={handleShowPassword}
                            >
                                {showPassword ? (
                                    <IoMdEyeOff className='w-5 h-5 text-blue-600' />
                                ) : (
                                    <IoIosEye className='w-5 h-5 text-blue-600' />
                                )}
                            </div>
                        </div>
                        {errors.password && (
                            <span className='text-sm text-red-500'>
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='confirmPassword'>
                            confirm password
                        </label>
                        <div className='relative'>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id='confirmPassword'
                                className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none w-full'
                                placeholder='********'
                                {...register('confirmPassword')}
                            />
                            <div
                                className='absolute top-3 right-2 cursor-pointer'
                                onClick={handleShowConfirmPassword}
                            >
                                {showConfirmPassword ? (
                                    <IoMdEyeOff className='w-5 h-5 text-blue-600' />
                                ) : (
                                    <IoIosEye className='w-5 h-5 text-blue-600' />
                                )}
                            </div>
                        </div>
                        {errors.confirmPassword && (
                            <span className='text-sm text-red-500'>
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>
                    <button
                        type='submit'
                        className='bg-blue-600 w-full h-10 rounded text-white'
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
