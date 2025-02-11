import { errorOptions } from '../patternError';

export const inputAddPosition = [
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Position Code',
        name: 'jabatan_code',
        placeholder: 'X001',
        error: 'jabatan_code',
        addOptionError: errorOptions.jabatan_code,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Position Name',
        name: 'nama_jabatan',
        placeholder: 'Worker',
        error: 'nama_jabatan',
        addOptionError: errorOptions.nama_jabatan,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Priority',
        name: 'priority',
        placeholder: '9',
        error: 'priority',
        addOptionError: errorOptions.priority,
    },
];

export const inputEditPosition = (data) => [
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Position Code',
        name: 'jabatan_code',
        placeholder: 'X001',
        error: 'jabatan_code',
        addOptionError: errorOptions.jabatan_code,
        defaultValue: data,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Position Name',
        name: 'nama_jabatan',
        placeholder: 'Worker',
        error: 'nama_jabatan',
        addOptionError: errorOptions.nama_jabatan,
        defaultValue: data,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Priority',
        name: 'priority',
        placeholder: '9',
        error: 'priority',
        addOptionError: errorOptions.priority,
        defaultValue: data,
    },
];
