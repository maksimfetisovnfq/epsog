import {z} from 'zod';

export const economicalParametersSchema = z
    .object({
        CAPEX_P: z.number().gt(0),
        CAPEX_C: z.number().gt(0),
        OPEX_P: z.number().gt(0),
        OPEX_C: z.number().gt(0),
        number_of_years: z.number().int().gte(1).lte(50),
        discount_rate: z.number().gte(0).lte(100),
        P_FCR_CAP_BSP: z.number().gte(0),
        P_aFRRu_CAP_BSP: z.number().gte(0),
        P_aFRRd_CAP_BSP: z.number().gte(0),
        P_mFRRu_CAP_BSP: z.number().gte(0),
        P_mFRRd_CAP_BSP: z.number().gte(0),
        P_aFRRu_BSP: z.number().gte(0),
        P_aFRRd_BSP: z.number().gte(0),
        P_mFRRu_BSP: z.number().gte(0),
        P_mFRRd_BSP: z.number().gte(0),
            
    });

export type EconomicalBeksParametersSchema = z.infer<typeof economicalParametersSchema>;
