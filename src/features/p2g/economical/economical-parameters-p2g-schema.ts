import { z } from "zod"
import { bspDefaultValues, getBspSchema } from "@/components/bsp"
import { numberField, errorMessages } from "@/utils/zod"

export const economicalParametersP2gSchema = z
    .object({
        CAPEX: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        OPEX: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        P_H2: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        number_of_years: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        discount_rate: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    })
    .extend(getBspSchema(true).shape)

export type EconomicalP2gParametersSchema = z.infer<typeof economicalParametersP2gSchema>

export const defaultEconomicalParametersP2gSchema: Partial<EconomicalP2gParametersSchema> = {
    number_of_years: 2,
    discount_rate: 5,
    ...bspDefaultValues,
}
