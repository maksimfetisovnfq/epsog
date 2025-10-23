import { z } from "zod"
import { Productai } from "@/components/productai-select"
import { numberField, errorMessages } from "@/utils/zod"

export const technicalParametersSchema = z.object({
    Q_max_HP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    service_type: z.nativeEnum(Productai),
    reaction_time_d: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    reaction_time_u: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    Q_yearly: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    d_HS: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    H_HS: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    lambda_HS: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    dx_HS: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    Q_max_BOILER: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    P_FUEL: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    q_FUEL: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    eta_BOILER: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    T_HP: numberField().pipe(z.number().min(Number.MIN_SAFE_INTEGER, errorMessages.greaterThanOrEqual(Number.MIN_SAFE_INTEGER))).optional(),
    T_max_HS: numberField().pipe(z.number().min(Number.MIN_SAFE_INTEGER, errorMessages.greaterThanOrEqual(Number.MIN_SAFE_INTEGER))),
})

export type TechnicalP2hParametersSchema = z.infer<typeof technicalParametersSchema>

export const defaultTechnicalP2hParams: Partial<TechnicalP2hParametersSchema> = {
    service_type: Productai.BOTH,
    reaction_time_d: 0,
    reaction_time_u: 0,
    d_HS: 10,
    H_HS: 20,
    lambda_HS: 0.032,
    dx_HS: 0.3,
    Q_max_BOILER: 4.5,
    P_FUEL: 0.44,
    q_FUEL: 9550,
    eta_BOILER: 98,
    T_max_HS: 90,
}