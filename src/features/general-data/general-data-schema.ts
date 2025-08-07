import {z} from 'zod';

export const generalDataSchema = z
    .object({
        network: z.string().min(20),
    });

export type GeneralDataSchema = z.infer<typeof generalDataSchema>;

