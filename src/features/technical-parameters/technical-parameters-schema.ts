import {z} from 'zod';

export const technicalParametersSchema = z
    .object({
        network: z.string().min(20),
    });

export type TechnicalParametersSchema = z.infer<typeof technicalParametersSchema>;

