import {z} from 'zod';

export const technicalParametersSchema = z
    .object({
        network: z.string().min(20),
    });

export type TechnicalP2gParametersSchema = z.infer<typeof technicalParametersSchema>;

