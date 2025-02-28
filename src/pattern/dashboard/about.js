import errorOptions from '../errorOptions';

export const inputAbout = [
    {
        jenisInputan: 'input',
        type: 'text',
        title: 'About Meta',
        name: 'about_meta',
        placeholder: 'your about meta',
        error: 'about_meta',
        addOptionError: errorOptions.about_meta,
    },
    {
        jenisInputan: 'textarea',
        type: 'text',
        title: 'about (EN Language)',
        name: 'about_body_en',
        placeholder: 'your about en',
        error: 'about_body_en',
        addOptionError: errorOptions.about_body_en,
    },
    {
        jenisInputan: 'textarea',
        type: 'text',
        title: 'about (ID Language)',
        name: 'about_body_id',
        placeholder: 'your about id',
        error: 'about_body_en',
        addOptionError: errorOptions.about_body_id,
    },
    {
        jenisInputan: 'checkbox',
        type: 'checkbox',
        title: 'Activate?',
        name: 'status',
    },
];
