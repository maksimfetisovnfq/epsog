import { z } from "zod"
import { Productai } from "@/components/productai-select"
import { numberField, errorMessages } from "@/utils/zod"

const powerHours = numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0)).max(24, errorMessages.lessThanOrEqual(24)))

export const getTechnicalParametersDsrSchema = (
    useHourlyPower: boolean,
    useMinMaxPower: boolean
) => {
    const baseSchema = {
        Q_avg: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0)).max(1000000, errorMessages.lessThanOrEqual(1000000))),
        Q_min: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0)).max(1000000, errorMessages.lessThanOrEqual(1000000))),
        Q_max: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0)).max(1000000, errorMessages.lessThanOrEqual(1000000))),
        T_shift: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0)).max(1000000, errorMessages.lessThanOrEqual(1000000))),
        reaction_time: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
        service_type: z.nativeEnum(Productai),
    }

    const hourlyPowerFields: Record<string, z.ZodTypeAny> = {}
    const minHourlyPowerFields: Record<string, z.ZodTypeAny> = {}
    const maxHourlyPowerFields: Record<string, z.ZodTypeAny> = {}

    if (useHourlyPower) {
        for (let i = 0; i < 24; i++) {
            hourlyPowerFields[`hourly_power_${i}`] = powerHours
        }
    }

    if (useMinMaxPower) {
        for (let i = 0; i < 24; i++) {
            minHourlyPowerFields[`min_hourly_power_${i}`] = powerHours
            maxHourlyPowerFields[`max_hourly_power_${i}`] = powerHours
        }
    }

    return z.object({
        ...baseSchema,
        ...hourlyPowerFields,
        ...minHourlyPowerFields,
        ...maxHourlyPowerFields,
    })
}

export type TechnicalDsrParametersSchema = z.infer<ReturnType<typeof getTechnicalParametersDsrSchema>>

export const getDefaultTechnicalParametersDsr = (
    useHourlyPower: boolean,
    useMinMaxPower: boolean
): Record<string, number | string> => {
    const baseDefaults = {
        reaction_time: 1,
        service_type: Productai.UP,
    }

    const hourlyPowerDefaults: Record<string, number> = {}
    const minHourlyPowerDefaults: Record<string, number> = {}
    const maxHourlyPowerDefaults: Record<string, number> = {}

    if (useHourlyPower) {
        for (let i = 0; i < 24; i++) {
            hourlyPowerDefaults[`hourly_power_${i}`] = 10
        }
    }

    if (useMinMaxPower) {
        for (let i = 0; i < 24; i++) {
            minHourlyPowerDefaults[`min_hourly_power_${i}`] = 5
            maxHourlyPowerDefaults[`max_hourly_power_${i}`] = 15
        }
    }

    return {
        ...baseDefaults,
        ...hourlyPowerDefaults,
        ...minHourlyPowerDefaults,
        ...maxHourlyPowerDefaults,
    }
}
