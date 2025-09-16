import { z } from "zod"
import { bspDefaultValues, getBspSchema } from "@/components/bsp"

export const economicalParametersDsrSchema = z
    .object({
        CAPEX: z.number().min(0),
        OPEX: z.number().min(0),
        number_of_years: z.number().min(0),
        discount_rate: z.number().min(0),
    })
    .extend(getBspSchema(false).shape)

export type EconomicalDsrParametersSchema = z.infer<typeof economicalParametersDsrSchema>

export const defaultEconomicalParametersDsrSchema: EconomicalDsrParametersSchema = {
    CAPEX: 2400,
    OPEX: 16,
    number_of_years: 2,
    discount_rate: 5,
    ...bspDefaultValues,
}
