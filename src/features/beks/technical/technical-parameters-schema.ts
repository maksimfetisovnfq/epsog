import { z } from "zod"
import { numberField, errorMessages } from "@/utils/zod"

export const technicalParametersSchema = z.object({
    q_max: numberField().pipe(
        z.number().gt(0, errorMessages.greaterThan(0)).lte(1_000_000, errorMessages.lessThanOrEqual(1_000_000))
    ),
    q_total: numberField().pipe(
        z.number().gt(0, errorMessages.greaterThan(0)).lte(1_000_000, errorMessages.lessThanOrEqual(1_000_000))
    ),
    RTE: numberField().pipe(z.number().gte(0, errorMessages.between(0, 100)).lte(100, errorMessages.between(0, 100))),
    SOC_min: numberField().pipe(
        z.number().gte(0, errorMessages.between(0, 100)).lte(100, errorMessages.between(0, 100))
    ),
    SOC_max: numberField().pipe(
        z.number().gte(0, errorMessages.between(0, 100)).lte(100, errorMessages.between(0, 100))
    ),
    N_cycles_DA: numberField().pipe(
        z.number().int(errorMessages.integer).gte(0, errorMessages.between(0, 96)).lte(96, errorMessages.between(0, 96))
    ),
    N_cycles_ID: numberField().pipe(
        z.number().int(errorMessages.integer).gte(0, errorMessages.between(0, 96)).lte(96, errorMessages.between(0, 96))
    ),
    reaction_time: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
})

export type TechnicalBeksParametersSchema = z.infer<typeof technicalParametersSchema>

export const defaultTechnicalBeksParams: Partial<TechnicalBeksParametersSchema> = {
    RTE: 88,
    SOC_min: 10,
    SOC_max: 95,
    N_cycles_DA: 4,
    N_cycles_ID: 4,
    reaction_time: 0,
}
