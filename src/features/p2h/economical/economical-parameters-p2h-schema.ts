import { z } from "zod"
import { bspSchema, bspDefaultValues } from "@/components/bsp"

export const economicalParametersP2hSchema = z
    .object({
        CAPEX_HP: z.number().min(0),
        OPEX_HP: z.number().min(0),
        CAPEX_HS: z.number().min(0),
        OPEX_HS: z.number().min(0),
        discount_rate: z.number().min(0),
        number_of_years: z.number().min(0),
        CAPEX_P: z.number().min(0),
    })
    .extend(bspSchema.shape)

export type EconomicalP2hParametersSchema = z.infer<typeof economicalParametersP2hSchema>

export const defaultEconomicalP2hParameters: EconomicalP2hParametersSchema = {
    CAPEX_HP: 6000,
    OPEX_HP: 300,
    CAPEX_HS: 0.1,
    OPEX_HS: 0.05,
    discount_rate: 10,
    number_of_years: 10,
    CAPEX_P: 5,
    ...bspDefaultValues,
}
