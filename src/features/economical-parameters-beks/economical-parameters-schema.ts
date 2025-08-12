import {z} from 'zod';

export const economicalParametersSchema = z
    .object({
        network: z.string().min(20),
    });

export type EconomicalBeksParametersSchema = z.infer<typeof economicalParametersSchema>;

