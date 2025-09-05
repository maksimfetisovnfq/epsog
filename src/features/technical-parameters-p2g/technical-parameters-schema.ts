import {z} from 'zod';

export const technicalParametersSchema = z
    .object({
        Q_max: z.number().min(0).max(1000000),
        electrolyzer_tech: z.string().min(0),
        produktai: z.object({
            FCR: z.boolean(),
            aFRRu: z.boolean(),
            aFRRd: z.boolean(),
            mFRRu: z.boolean(),
            mFRRd: z.boolean(),
        }),
        reaction_time_d: z.number().min(0),
        reaction_time_u: z.number().min(0),
        electrolyzer_electrical_power: z.number().min(0),
        compressor_efficiency: z.number().min(0),
        P_H2: z.number().min(0),
        CAPEX: z.number().min(0),
        OPEX: z.number().min(0),
        discount_rate: z.number().min(0),
        number_of_years: z.number().min(0),
        electrolyzer_efficiency: z.number().min(0),
        hydrogen_temperature: z.number().min(0),
        hydrogen_pressure: z.number().min(0),
    });

export type TechnicalP2gParametersSchema = z.infer<typeof technicalParametersSchema>;
