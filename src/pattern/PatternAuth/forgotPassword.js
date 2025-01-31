import { errorOptions } from '../patternError';

export const inputForgotPassword = [
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
