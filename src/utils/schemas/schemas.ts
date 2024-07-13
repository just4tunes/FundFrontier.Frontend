import { z, ZodSchema } from 'zod';

// Define the type for the schema
export type RegisterSchemaType = {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    phoneNumber: string;
    gender: string | null;
    address: string;
    password: string;
    confirmPassword?: string;
};

export type LoginSchemaType = {
    email: string;
    password: string;
};

// Define the Zod schema with explicit type annotation
export const registerSchema: ZodSchema<RegisterSchemaType> = z.object({
    firstName: z.string().trim().min(1, 'First name is required'),
    lastName: z.string().trim().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address').trim(),
    country: z.string().min(2, 'Too short').max(50, 'Too long'),
    phoneNumber: z.string().min(10, 'Invalid phone number').max(15, 'Invalid phone number'),
    gender: z.enum(['male', 'female', 'other']),
    address: z.string().min(3, 'Address is too short').max(100, 'Address is too long'),
    password: z
        .string()
        .min(5, { message: "Password must contain at least 5 characters" })
        .max(16, { message: "Password should be less than 16 characters" })
        .refine(value => {
            const regex = /^(?=.*[A-Z])(?=.*[\W_]).{5,}$/;
            return regex.test(value);
        }, { message: "Password must contain at least one uppercase letter and one symbol" }),
    confirmPassword: z.string()
        .trim()
        .min(6, { message: 'Confirm password must be at least 6 characters' })
        .max(16, { message: "Confirm password should be less than 16 characters" })
        .refine(value => {
            const regex = /^(?=.*[A-Z])(?=.*[\W_]).{5,}$/;
            return regex.test(value);
        }, { message: "Confirm password must contain at least one uppercase letter and one symbol" })
});

export const loginSchema: ZodSchema<LoginSchemaType> = z.object({
    email: z.string().email('Invalid email address').trim(),
    password: z
        .string()
        .min(5, { message: "Password must contain at least 5 characters" })
        .max(16, { message: "Password should be less than 16 characters" })
        .refine(value => {
            const regex = /^(?=.*[A-Z])(?=.*[\W_]).{5,}$/;
            return regex.test(value);
        }, { message: "Password must contain at least one uppercase letter and one symbol" })
});