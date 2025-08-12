import {z} from 'zod';

export const economicalParametersSchema = z
    .object({
        network: z.string().min(20),
    });

export type EconomicalDsrParametersSchema = z.infer<typeof economicalParametersSchema>;

