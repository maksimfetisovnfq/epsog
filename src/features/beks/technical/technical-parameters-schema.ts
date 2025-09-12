import {z} from 'zod';

export const technicalParametersSchema = z
    .object({
        q_max: z.number().gt(0).lte(1_000_000),
        q_total: z.number().gt(0).lte(1_000_000),
        RTE: z.number().gte(0).lte(100),
        SOC_min: z.number().gte(0).lte(100),
        SOC_max: z.number().gte(0).lte(100),
        N_cycles_DA: z.number().int().gte(0).lte(96),
        N_cycles_ID: z.number().int().gte(0).lte(96),
        reaction_time: z.number().min(0),
    });

export type TechnicalBeksParametersSchema = z.infer<typeof technicalParametersSchema>;

export const defaultTechnicalBeksParams: TechnicalBeksParametersSchema = {
    q_max: 100,
    q_total: 200,
    RTE: 88,
    SOC_min: 10,
    SOC_max: 95,
    N_cycles_DA: 4,
    N_cycles_ID: 4,
    reaction_time: 0,
}