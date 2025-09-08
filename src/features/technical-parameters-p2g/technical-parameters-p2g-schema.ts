import {z} from 'zod';

export const technicalParametersP2gSchema = z
    .object({
        Q_max: z.number().min(0).max(1000000),
        produktai: z.object({
            FCR: z.boolean(),
            aFRRu: z.boolean(),
            aFRRd: z.boolean(),
            mFRRu: z.boolean(),
            mFRRd: z.boolean(),
        }).optional(),
        reaction_time_d: z.number().min(0),
        reaction_time_u: z.number().min(0),
        eta_H2: z.number().min(0),
        // electrolyzer_tech: z.string().min(0),
        // electrolyzer_electrical_power: z.number().min(0),

        T0: z.number().min(0),
        p0: z.number().min(0),
        eta_C: z.number().min(0),
    })
;

export type TechnicalP2gParametersSchema = z.infer<typeof technicalParametersP2gSchema>;
