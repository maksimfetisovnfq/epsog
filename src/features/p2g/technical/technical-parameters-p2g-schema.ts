import {z} from 'zod';
import {Productai} from "@/components/productai-select";
import { numberField, errorMessages } from "@/utils/zod";

export const technicalParametersP2gSchema = z
    .object({
        Q_max: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0)).max(1000000, errorMessages.lessThanOrEqual(1000000))),
        service_type: z.nativeEnum(Productai),
        reaction_time_d: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        reaction_time_u: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        eta_H2: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        electrolyzer_tech: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        T0: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        p0: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        eta_C: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    })

export type TechnicalP2gParametersSchema = z.infer<typeof technicalParametersP2gSchema>;

export const defaultTechnicalParametersP2g: Partial<TechnicalP2gParametersSchema> = {
    service_type: Productai.UP,
    reaction_time_d: 2,
    reaction_time_u: 2,
    T0: 80,
    p0: 30,
    eta_C: 80,
}