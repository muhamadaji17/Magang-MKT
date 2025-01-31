import { errorOptions } from '../patternError';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';

export const inputSettingPassword = [
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'OTP',
        name: 'otp',
        placeholder: '123456',
        error: 'otp',
        addOptionError: errorOptions.otp,
    },
    {
        jenisInputan: 'input',
        type: 'password',
        title: 'password',
        name: 'password',
        placeholder: '********',
        hiddenPasswordIcon: IoMdEyeOff,
        showPasswordIcon: IoIosEye,
        onClick: true,
        error: 'password',
        addOptionError: errorOptions.password,
    },
    {
        jenisInputan: 'confirm',
        type: 'password',
        title: 'confirm password',
        name: 'confirmPassword',
        placeholder: '********',
        hiddenPasswordIcon: IoMdEyeOff,
        showPasswordIcon: IoIosEye,
        onClick: true,
        error: 'confirmPassword',
        addOptionError: errorOptions.confirmPassword,
    },
];
