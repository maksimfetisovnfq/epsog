import {z} from 'zod';

export const technicalParametersSchema = z
    .object({
        q_avg: z.number().min(0),
        q_min: z.number().min(0),
        q_max: z.number().min(0),
        CAPEX: z.number().min(0),
        OPEX: z.number().min(0),
        discount_rate: z.number().min(0),
        number_of_years: z.number().min(0),
    });

export type TechnicalDsrParametersSchema = z.infer<typeof technicalParametersSchema>;

