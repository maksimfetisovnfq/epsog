import {z} from 'zod';
import {Productai} from "@/components/productai-select";

export const technicalParametersP2gSchema = z
    .object({
        Q_max: z.number().min(0).max(1000000),
        service_type: z.nativeEnum(Productai),
        reaction_time_d: z.number().min(0),
        reaction_time_u: z.number().min(0),
        eta_H2: z.number().min(0),
        electrolyzer_tech: z.number().min(0),
        T0: z.number().min(0),
        p0: z.number().min(0),
        eta_C: z.number().min(0),
    })

export type TechnicalP2gParametersSchema = z.infer<typeof technicalParametersP2gSchema>;

export const defaultTechnicalParametersP2g: TechnicalP2gParametersSchema = {
    Q_max: 1,
    service_type: Productai.UP,
    reaction_time_d: 2,
    reaction_time_u: 2,
    eta_H2: 50,
    electrolyzer_tech: 100000,
    T0: 80,
    p0: 30,
    eta_C: 80,
}