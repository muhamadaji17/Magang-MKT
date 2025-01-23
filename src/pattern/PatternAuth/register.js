import { errorOptions } from '../PatternError';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';

export const inputRegister = [
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'username',
        name: 'username',
        placeholder: 'your username',
        error: 'username',
        addOptionError: errorOptions.username,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'email',
        name: 'email',
        placeholder: 'example@gmail.com',
        error: 'email',
        addOptionError: errorOptions.email,
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
        jenisInputan: 'input',
        type: 'text',
        title: 'phone number',
        name: 'phone_number',
        placeholder: '081213',
        error: 'phone_number',
        addOptionError: errorOptions.phone_number,
    },
];
