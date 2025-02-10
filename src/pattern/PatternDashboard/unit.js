import { errorOptions } from '../patternError';

export const inputAddUnit = (datas) => [
    {
        jenisInputan: 'select',
        title: 'Department',
        options: datas.map((data) => ({
            label: data.nama_departement,
            value: data.id,
        })),
        name: 'id_departement',
        error: 'id_departement',
        addOptionError: errorOptions.id_departement,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Unit Code',
        name: 'unit_code',
        placeholder: 'X001',
        error: 'unit_code',
        addOptionError: errorOptions.unit_code,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Unit Name',
        name: 'nama_unit',
        placeholder: 'retail',
        error: 'nama_unit',
        addOptionError: errorOptions.nama_unit,
    },
];

export const inputEditUnit = (datas, defaultData) => [
    {
        jenisInputan: 'select',
        title: 'Department',
        options: datas.map((data) => ({
            label: data.nama_departement,
            value: data.id,
        })),
        name: 'id_departement',
        error: 'id_departement',
        addOptionError: errorOptions.id_departement,
        defaultValue: defaultData,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Unit Code',
        name: 'unit_code',
        placeholder: 'X001',
        error: 'unit_code',
        addOptionError: errorOptions.unit_code,
        defaultValue: defaultData,
    },
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'Unit Name',
        name: 'nama_unit',
        placeholder: 'retail',
        error: 'nama_unit',
        addOptionError: errorOptions.nama_unit,
        defaultValue: defaultData,
    },
];
