import {z} from 'zod';

export const economicalParametersSchema = z
    .object({
        CAPEX_HP: z.number().min(0),
        OPEX_HP: z.number().min(0),
        CAPEX_HS: z.number().min(0),
        OPEX_HS: z.number().min(0),
        number_of_years: z.number().min(0),
        discount_rate: z.number().min(0),
        P_FCR_CAP_BSP: z.number().min(0),
        P_aFRRu_CAP_BSP: z.number().min(0),
        P_aFRRd_CAP_BSP: z.number().min(0),
        P_mFRRu_CAP_BSP: z.number().min(0),
        P_mFRRd_CAP_BSP: z.number().min(0),
        P_aFRRu_BSP: z.number().min(0),
        P_aFRRd_BSP: z.number().min(0),
        P_mFRRu_BSP: z.number().min(0),
        P_mFRRd_BSP: z.number().min(0),
    });

export type EconomicalP2hParametersSchema = z.infer<typeof economicalParametersSchema>;

