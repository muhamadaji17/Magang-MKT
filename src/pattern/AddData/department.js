import { errorOptions } from '../patternError';

export const inputAddDepartment = [
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Department Code',
        name: 'departement_code',
        placeholder: 'X001',
        error: 'departement_code',
        addOptionError: errorOptions.departement_code,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Department Name',
        name: 'nama_departement',
        placeholder: 'Animasi',
        error: 'nama_departement',
        addOptionError: errorOptions.nama_departement,
    },
];
