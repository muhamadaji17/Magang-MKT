import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router';
import { registerSchema } from '/src/lib/zod';
import { registerAuth } from '../services/axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SuccessAlert from '../components/molecules/SuccessAlert';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [checkFail, setCheckFail] = useState(false);
    const [checkSuccess, setCheckSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: zodResolver(registerSchema) });

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((pass) => !pass);
    };

    const onSubmit = async (data) => {
        try {
            await registerAuth(data);
            setCheckSuccess(true);
            reset();
            navigate('/login');
        } catch (error) {
            reset();
            setCheckFail(error.message);
        }
    };

    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if (checkFail) {
            MySwal.fire({
                title: 'Failed to Register',
                text: checkFail,
                icon: 'error',
            }).then(() => setCheckFail(false));
        }
        if (checkSuccess) {
            <SuccessAlert
                text='Welcome'
                state={() => setCheckSuccess(false)}
                link={() => navigate('/setting-password')}
            />;
            MySwal.fire({
                title: 'Register Success',
                text: 'Welcome!',
                icon: 'success',
            }).then(() => {
                setCheckSuccess(false);
                navigate('/login');
            });
        }
    }, [checkFail, checkSuccess]);

    return (
        <div className='grid lg:grid-cols-[2fr,1.5fr] rounded-lg h-screen'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h2 className='font-bold text-2xl md:text-3xl'>Register</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-4 w-[90%] lg:w-[570px]'
                >
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='username'>username</label>
                        <input
                            type='text'
                            id='username'
                            className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none'
                            placeholder='username'
                            autoComplete='off'
                            {...register('username')}
                        />
                        {errors.username && (
                            <span className='text-sm text-red-500'>
                                {errors.username.message}
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>email</label>
                        <input
                            type='email'
                            id='email'
                            className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none'
                            placeholder='email'
                            autoComplete='off'
                            {...register('email')}
                        />
                        {errors.email && (
                            <span className='text-sm text-red-500'>
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password'>password</label>
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
                        <label htmlFor='phoneNumber'>phone number</label>
                        <input
                            type='tel'
                            id='phoneNumber'
                            className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none'
                            autoComplete='off'
                            placeholder='081289211245'
                            pattern='^\d{6,15}$'
                            {...register('phone_number')}
                        />
                        {errors.phone_number && (
                            <span className='text-sm text-red-500'>
                                {errors.phone_number.message}
                            </span>
                        )}
                    </div>
                    <div className='text-center lg:text-end'>
                        <button
                            type='submit'
                            className='bg-blue-600 w-24 h-10 rounded text-white'
                        >
                            Register
                        </button>
                    </div>
                </form>
                <span className='text-sm'>
                    Have an account?{' '}
                    <Link to='/login' className='text-blue-500'>
                        sign in
                    </Link>
                </span>
            </div>
            <div className='bg-authBg bg-cover hidden lg:flex flex-col items-center justify-center gap-3'>
                <h1 className='text-white font-bold text-4xl'>Welcome!</h1>
                <span className='text-white font-bold text-4xl'>
                    Let&apos;s get started
                </span>
            </div>
        </div>
    );
}
