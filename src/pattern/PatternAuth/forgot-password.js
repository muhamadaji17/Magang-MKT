import { errorOptions } from '../PatternError';

export const InputForgotPassword = [
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
