import {z} from 'zod';

export const technicalParametersSchema = z
    .object({
        q_max: z.number().min(0),
        q_total: z.number().min(0),
        RTE: z.number().min(0),
        SOC_min: z.number().min(0),
        SOC_max: z.number().min(0),
        N_cycles_DA: z.number().min(0),
        N_cycles_ID: z.number().min(0),
    });

export type TechnicalBeksParametersSchema = z.infer<typeof technicalParametersSchema>;

