import {z} from 'zod';

export const technicalParametersSchema = z
    .object({
        heatload: z.number().min(0),
        Q_max_HP: z.number().min(0),
        H_HS : z.number().min(0),
        T_max_HS: z.number().min(0),
        lambda_HS: z.number().min(0),
        dx_HS: z.number().min(0),
        CAPEX_HP: z.number().min(0),
        CAPEX_HS: z.number().min(0),
        OPEX_HP: z.number().min(0),
        OPEX_HS: z.number().min(0),
        T_HP: z.number().min(0),
        Q_max_BOILER: z.number().min(0),
        P_FUEL: z.number().min(0),
        q_FUEL: z.number().min(0),
        eta_BOILER: z.number().min(0),
        d_HS: z.number().min(0),
        discount_rate: z.number().min(0),
        number_of_years: z.number().min(0),
    });

export type TechnicalP2hParametersSchema = z.infer<typeof technicalParametersSchema>;

