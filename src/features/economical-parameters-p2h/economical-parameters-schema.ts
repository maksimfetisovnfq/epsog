import {z} from 'zod';

export const economicalParametersSchema = z
    .object({
        network: z.string().min(20),
    });

export type EconomicalP2hParametersSchema = z.infer<typeof economicalParametersSchema>;

