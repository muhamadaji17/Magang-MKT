export const errorOptions = {
    username: {
        required: 'Username must be more than 1 Characters',
        minLength: {
            value: 1,
            message: 'Username must be more than 1 Characters',
        },
        maxLength: {
            value: 32,
            message: 'Username must be less than 32 Characters',
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
            message: 'Invalid Email',
        },
    },
    password: {
        required: 'Password is required',
        minLength: {
            value: 8,
            message: 'Password must be more than 8 Characters',
        },
        maxLength: {
            value: 32,
            message: 'Password must be less than 32 Characters',
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
};
