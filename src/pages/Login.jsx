import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router';
import { loginScema } from '/src/lib/zod';
import { loginAuth } from '/src/services/axios';
import { useStore } from '/src/store/store';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function LoginPage() {
    const navigate = useNavigate();
    const { setAccessToken } = useStore();
    const [checkFail, setCheckFail] = useState(false);
    const [checkSuccess, setCheckSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: zodResolver(loginScema) });

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((pass) => !pass);
    };

    const onSubmit = async (data) => {
        try {
            const res = await loginAuth(data);
            setAccessToken(res.accessToken);
            reset();
            setCheckSuccess(true);
        } catch (error) {
            reset();
            setCheckFail(error.message);
        }
    };

    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if (checkFail) {
            MySwal.fire({
                title: 'Failed to Login',
                text: checkFail,
                icon: 'error',
            }).then(() => setCheckFail(false));
        }
        if (checkSuccess) {
            MySwal.fire({
                title: 'Login Success',
                text: 'Welcome!',
                icon: 'success',
            }).then(() => {
                setCheckSuccess(false);
                navigate('/');
            });
        }
    }, [checkFail, checkSuccess]);

    return (
        <div className='grid lg:grid-cols-[2fr,1.5fr] rounded-lg h-screen'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h2 className='font-bold text-2xl md:text-3xl'>Login</h2>
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
                    <div className='text-center lg:text-end'>
                        <button
                            type='submit'
                            className='bg-blue-600 w-24 h-10 rounded text-white'
                        >
                            Login
                        </button>
                    </div>
                </form>
                <span className='text-sm'>
                    forgot password?{' '}
                    <Link to='/forgot-password' className='text-blue-600'>
                        click here!
                    </Link>
                </span>
                <span className='text-sm'>
                    do not have an account?{' '}
                    <Link to='/register' className='text-blue-500'>
                        sign up
                    </Link>
                </span>
            </div>
            <div className='bg-authBg bg-cover hidden lg:flex flex-col items-center justify-center gap-3'>
                <h1 className='text-white font-bold text-4xl'>Welcome Back!</h1>
                <span className='text-white font-bold text-4xl'>
                    Let&apos;s begin
                </span>
            </div>
        </div>
    );
}
