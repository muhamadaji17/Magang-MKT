export const errorOptions = {
    username: {
        required: 'Username must be more than 1 characters',
        minLength: {
            value: 1,
            message: 'Username must be more than 1 characters',
        },
        maxLength: {
            value: 32,
            message: 'Username must be less than 32 characters',
        },
        pattern: {
            value: /^[\w]/,
            message: 'Username must start with a letter, number, or underscore',
        },
    },
    email: {
        required: 'Email is required',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email',
        },
    },
    password: {
        required: 'Password is required',
        minLength: {
            value: 8,
            message: 'Password must be more than 8 characters',
        },
        maxLength: {
            value: 32,
            message: 'Password must be less than 32 characters',
        },
    },
    phone_number: {
        required: 'Phone number is required',
        pattern: {
            value: /^\d{6,15}$/,
            message:
                'Phone number must be between 6 and 15 digits also must be number',
        },
    },
    otp: {
        required: 'OTP is required',
        pattern: {
            value: /^\d{6}$/,
            message: 'OTP must be a valid 6-digit number',
        },
    },
    confirmPassword: {
        required: 'Confirm Password is required',
        validate: (value, { password }) =>
            value === password || 'Passwords do not match',
    },
    departement_code: {
        required: 'Department code is required',
        minLength: {
            value: 4,
            message: 'Department code must be more than 4 characters',
        },
        maxLength: {
            value: 5,
            message: 'Department code must be less than 5 characters',
        },
    },
    nama_departement: {
        required: 'Please input the department name',
        minLength: {
            value: 1,
            message: 'Department name must be more than 5 characters',
        },
        maxLength: {
            value: 32,
            message: 'Department name must be less than 8 characters',
        },
    },
    id_departement: {
        required: 'Please select the department',
    },
    unit_code: {
        required: 'Please input the unit code',
        minLength: {
            value: 4,
            message: 'Unit code must be more than 4 characters',
        },
        maxLength: {
            value: 5,
            message: 'Unit code must be less than 5 characters',
        },
    },
    nama_unit: {
        required: 'Please input the unit name',
        minLength: {
            value: 1,
            message: 'Unit name must be more than 5 characters',
        },
        maxLength: {
            value: 32,
            message: 'Unit name must be less than 8 characters',
        },
    },
};
