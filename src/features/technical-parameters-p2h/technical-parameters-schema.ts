import {z} from 'zod';

export const technicalParametersSchema = z
    .object({
        Q_max_HP: z.number().min(0),
        produktai: z.object({
            FCR: z.boolean(),
            aFRRu: z.boolean(),
            aFRRd: z.boolean(),
            mFRRu: z.boolean(),
            mFRRd: z.boolean(),
        }),
        reaction_time_d: z.number().min(0),
        reaction_time_u: z.number().min(0),
        Q_yearly: z.number().min(0),
        d_HS: z.number().min(0),
        H_HS: z.number().min(0),
        lambda_HS: z.number().min(0),
        dx_HS: z.number().min(0),
        Q_max_BOILER: z.number().min(0),
        P_FUEL: z.number().min(0),
        q_FUEL: z.number().min(0),
        eta_BOILER: z.number().min(0),
        
        T_max_HS: z.number().min(0),
        T_HP: z.number().min(0),
    });

export type TechnicalP2hParametersSchema = z.infer<typeof technicalParametersSchema>;

