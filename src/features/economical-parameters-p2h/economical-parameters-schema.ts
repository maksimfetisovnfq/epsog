import {z} from 'zod';

export const economicalParametersSchema = z
    .object({
        FCR: z.number().min(0),
        aFRRu1: z.number().min(0),
        aFRRd1: z.number().min(0),
        mFRRu1: z.number().min(0),
        mFRRd1: z.number().min(0),
        aFRRu2: z.number().min(0),
        aFRRd2: z.number().min(0),
        mFRRu2: z.number().min(0),
        mFRRd2: z.number().min(0),
    });

export type EconomicalP2hParametersSchema = z.infer<typeof economicalParametersSchema>;

