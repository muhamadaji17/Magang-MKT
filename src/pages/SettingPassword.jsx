import { MdOutlineResetTv } from 'react-icons/md';
import { RxReset } from 'react-icons/rx';
import { useStore } from '/src/store/store';
import { InputSettingPassword } from '../pattern/PatternAuth/setting-password';
import { useNavigate } from 'react-router-dom';
import { HeaderAuth } from '../components/molecules/HeaderAuth';
import { Errors } from '../components/atoms/errors';
import { SupportAuthTemplate } from '../components/templates/SupportAuthTemplate';
import { FormAuth } from '../components/organisms/FormAuth';
import {
    handleShowPassword,
    handleSubmitData,
    handleShowConfirmPassword,
} from '../pattern/handleButton';
import { SettingPasswordService } from '../services/AuthService';
import { useGlobalHook } from '../hook/useGlobalHook';

export const SettingPassword = () => {
    const navigate = useNavigate();
    const { phone_number } = useStore();
    const {
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
    } = useGlobalHook();

    return (
        <SupportAuthTemplate>
            <HeaderAuth
                iconHeader={MdOutlineResetTv}
                iconTitle={RxReset}
                titleText='Reset your password'
            >
                <p>
                    please Set your new password below and don&apos;t make sure
                    your password is secure.
                </p>
                <Errors>
                    If it is more than 5 minutes, it will be redirected to the
                    previous page.
                </Errors>
            </HeaderAuth>
            <FormAuth
                dataForm={InputSettingPassword}
                buttonName='Send'
                buttonWidth='w-full'
                handleClick={() =>
                    handleShowPassword(setShowPassword, showPassword)
                }
                handleConfirmPassword={() =>
                    handleShowConfirmPassword(
                        setShowConfirmPassword,
                        showConfirmPassword
                    )
                }
                showPassword={showPassword}
                showConfirmPassword={showConfirmPassword}
                handleSubmitData={(data, reset) =>
                    handleSubmitData(
                        data,
                        SettingPasswordService,
                        phone_number,
                        navigate,
                        reset
                    )
                }
            />
        </SupportAuthTemplate>
        // <div className='h-screen flex items-center justify-center'>
        //     <div className='flex flex-col justify-center items-center gap-4 w-[90%] lg:w-[700px]'>
        //         <HeaderAuth
        //             iconHeader={MdOutlineResetTv}
        //             iconTitle={RxReset}
        //             titleText='Reset your password'
        //         >
        //             <p>
        //                 please Set your new password below and don&apos;t make
        //                 sure your password is secure.
        //             </p>
        //             <Errors>
        //                 If it is more than 5 minutes, it will be redirected to
        //                 the previous page.
        //             </Errors>
        //         </HeaderAuth>
        //         <form
        //             onSubmit={handleSubmit(onSubmit)}
        //             className='flex flex-col gap-4 w-full'
        //         >
        //             <div className='flex flex-col gap-1'>
        //                 <label htmlFor='otp'>OTP</label>
        //                 <input
        //                     type='text'
        //                     id='otp'
        //                     placeholder='423224'
        //                     className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none'
        //                     autoComplete='off'
        //                     {...register('otp', {
        //                         required: 'OTP is required',
        //                         pattern: {
        //                             value: /^\d{6}$/,
        //                             message:
        //                                 'OTP must be a valid 6-digit number',
        //                         },
        //                     })}
        //                 />
        //                 {errors.otp && (
        //                     <span className='text-sm text-red-500'>
        //                         {errors.otp.message}
        //                     </span>
        //                 )}
        //             </div>
        //             <div className='flex flex-col gap-1'>
        //                 <label htmlFor='password' className=''>
        //                     new password
        //                 </label>
        //                 <div className='relative'>
        //                     <input
        //                         type={showPassword ? 'text' : 'password'}
        //                         id='password'
        //                         className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none w-full'
        //                         placeholder='********'
        //                         {...register('password', {
        //                             required: 'Password is required',
        //                             minLength: {
        //                                 value: 8,
        //                                 message:
        //                                     'Password must be more than 8 characters',
        //                             },
        //                             maxLength: {
        //                                 value: 32,
        //                                 message:
        //                                     'Password must be less than 32 characters',
        //                             },
        //                         })}
        //                     />
        //                     <div
        //                         className='absolute top-3 right-2 cursor-pointer'
        //                         onClick={handleShowPassword}
        //                     >
        //                         {showPassword ? (
        //                             <IoMdEyeOff className='w-5 h-5 text-blue-600' />
        //                         ) : (
        //                             <IoIosEye className='w-5 h-5 text-blue-600' />
        //                         )}
        //                     </div>
        //                 </div>
        //                 {errors.password && (
        //                     <span className='text-sm text-red-500'>
        //                         {errors.password.message}
        //                     </span>
        //                 )}
        //             </div>
        //             <div className='flex flex-col gap-1'>
        //                 <label htmlFor='confirmPassword'>
        //                     confirm password
        //                 </label>
        //                 <div className='relative'>
        //                     <input
        //                         type={showConfirmPassword ? 'text' : 'password'}
        //                         id='confirmPassword'
        //                         className='ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none w-full'
        //                         placeholder='********'
        //                         {...register('confirmPassword', {
        //                             required: 'Confirm Password is required',
        //                             validate: (value, { password }) =>
        //                                 value === password ||
        //                                 'Passwords do not match',
        //                         })}
        //                     />
        //                     <div
        //                         className='absolute top-3 right-2 cursor-pointer'
        //                         onClick={handleShowConfirmPassword}
        //                     >
        //                         {showConfirmPassword ? (
        //                             <IoMdEyeOff className='w-5 h-5 text-blue-600' />
        //                         ) : (
        //                             <IoIosEye className='w-5 h-5 text-blue-600' />
        //                         )}
        //                     </div>
        //                 </div>
        //                 {errors.confirmPassword && (
        //                     <span className='text-sm text-red-500'>
        //                         {errors.confirmPassword.message}
        //                     </span>
        //                 )}
        //             </div>
        //             <button
        //                 type='submit'
        //                 className='bg-blue-600 w-full h-10 rounded text-white'
        //             >
        //                 Reset Password
        //             </button>
        //         </form>
        //     </div>
        // </div>
    );
};
