import {z} from 'zod';

export const generalDataSchema = z
    .object({
        sector: z.string().min(0),
        provider: z.string().min(0),
    });

export type GeneralDataSchema = z.infer<typeof generalDataSchema>;
