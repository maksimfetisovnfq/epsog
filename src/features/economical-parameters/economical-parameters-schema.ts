import {z} from 'zod';

export const economicalParametersSchema = z
    .object({
        network: z.string().min(20),
    });

export type EconomicalParametersSchema = z.infer<typeof economicalParametersSchema>;

