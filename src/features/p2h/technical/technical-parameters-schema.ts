import { z } from "zod"
import { Productai } from "@/components/productai-select"

export const technicalParametersSchema = z.object({
    Q_max_HP: z.number().min(0),
    service_type: z.nativeEnum(Productai),
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
    T_HP: z.number().min(Number.MIN_SAFE_INTEGER).optional(),
    T_max_HS: z.number().min(Number.MIN_SAFE_INTEGER),
})

export type TechnicalP2hParametersSchema = z.infer<typeof technicalParametersSchema>

export const defaultTechnicalP2hParams: TechnicalP2hParametersSchema = {
    Q_max_HP: 1,
    service_type: Productai.BOTH,
    reaction_time_d: 0,
    reaction_time_u: 0,
    Q_yearly: 13000000,
    d_HS: 10,
    H_HS: 20,
    lambda_HS: 0.032,
    dx_HS: 0.3,
    Q_max_BOILER: 4.5,
    P_FUEL: 0.44,
    q_FUEL: 9550,
    eta_BOILER: 98,
    T_HP: -10,
    T_max_HS: 90,
}