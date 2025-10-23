import { z } from "zod"
import { getBspSchema, bspDefaultValues } from "@/components/bsp"
import { numberField, errorMessages } from "@/utils/zod"

export const economicalParametersP2hSchema = z
    .object({
        CAPEX_HP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        OPEX_HP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        CAPEX_HS: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        OPEX_HS: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        discount_rate: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        number_of_years: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        CAPEX_P: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    })
    .extend(getBspSchema(true).shape)

export type EconomicalP2hParametersSchema = z.infer<typeof economicalParametersP2hSchema>

export const defaultEconomicalP2hParameters: Partial<EconomicalP2hParametersSchema> = {
    // CAPEX_HP: 6000,
    // OPEX_HP: 300,
    // CAPEX_HS: 0.1,
    // OPEX_HS: 0.05,
    discount_rate: 10,
    number_of_years: 10,
    CAPEX_P: 5,
    ...bspDefaultValues,
}
