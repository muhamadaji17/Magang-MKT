import { errorOptions } from '../patternError';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';

export const inputLogin = [
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
        type: 'password',
        title: 'password',
        name: 'password',
        placeholder: '********',
        hiddenPasswordIcon: IoMdEyeOff,
        showPasswordIcon: IoIosEye,
        error: 'password',
        addOptionError: errorOptions.password,
    },
];
