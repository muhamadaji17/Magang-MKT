import { z } from 'zod';

export const loginScema = z.object({
    username: z
        .string()
        .min(1, 'Username must be more than 1 Characters')
        .max(32, 'Username must be less than 32 Characters')
        .regex(
            /^[\w]/,
            'Username must start with a letter, number, or underscore'
        ),
    password: z
        .string()
        .min(8, 'Password must be more than 8 Characters')
        .max(32, 'Password must be less than 32 Characters'),
});

export const registerSchema = z.object({
    username: z
        .string()
        .min(1, 'Username must be more than 1 Characters')
        .max(32, 'Username must be less than 32 Characters')
        .regex(
            /^[\w]/,
            'Username must start with a letter, number, or underscore'
        ),
    email: z.string().email('Invalid Email'),
    password: z
        .string()
        .min(8, 'Password must be more than 8 Characters')
        .max(32, 'Password must be less than 32 Characters'),
    phone_number: z.string().regex(/^\d{6,15}$/, {
        message: 'Phone number must be between 6 and 15 digits.',
    }),
});

export const forgotPasswordSchema = z.object({
    phone_number: z.string().regex(/^\d{6,15}$/, {
        message: 'Phone number must be between 6 and 15 digits.',
    }),
});

export const resetPasswordSchema = z
    .object({
        otp: z
            .string()
            .min(6, 'OTP must be exactly 8 characters')
            .max(6, 'OTP must be exactly 8 characters')
            .regex(/^\d{6}$/, 'OTP must be a valid 8-digit number'),
        password: z
            .string()
            .min(8, 'Password must be more than 8 Characters')
            .max(32, 'Password must be less than 32 Characters'),
        confirmPassword: z
            .string()
            .min(8, 'Password must be more than 8 Characters')
            .max(32, 'Password must be less than 32 Characters'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'password does not match',
        path: ['confirmPassword'],
    });
