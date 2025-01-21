import { GiDialPadlock } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../services/axios';
import { useStore } from '/src/store/store';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router';
import { forgotPasswordSchema } from '/src/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [checkSuccess, setCheckSuccess] = useState(false);
    const [checkFail, setCheckFail] = useState(false);
    const { setPhoneNumber } = useStore();
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: zodResolver(forgotPasswordSchema) });

    const onSubmit = async (data) => {
        try {
            const res = await forgotPassword(data);
            if (!res.status) {
                reset();
                setPhoneNumber(false);
                setCheckFail(res.message);
            } else {
                reset();
                setPhoneNumber(res.payload.phone_number);
                setCheckSuccess(res.message);
            }
        } catch (error) {
            console.error('Error: ', error);
            setCheckFail(
                'An unexpected error occurred. Please try again later.'
            );
        }
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
                <GiDialPadlock className='w-32 h-32 text-blue-500 drop-shadow-2xl' />
                <h1 className='font-bold text-2xl'>Forgot Password?</h1>
                <p className='text-center'>
                    Please enter the phone number associated with your account
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-4 w-full'
                >
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
                    <button
                        type='submit'
                        className='bg-blue-600 w-full h-10 rounded text-white'
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
