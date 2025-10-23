import { z } from "zod"
import { bspDefaultValues, getBspSchema } from "@/components/bsp"
import { numberField, errorMessages } from "@/utils/zod"

export const economicalParametersDsrSchema = z
    .object({
        CAPEX: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        OPEX: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        number_of_years: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        discount_rate: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    })
    .extend(getBspSchema(false).shape)

export type EconomicalDsrParametersSchema = z.infer<typeof economicalParametersDsrSchema>

export const defaultEconomicalParametersDsrSchema: Partial<EconomicalDsrParametersSchema> = {
    number_of_years: 2,
    discount_rate: 5,
    ...bspDefaultValues,
}
