import { z } from "zod"
import { Productai } from "@/components/productai-select"

const powerHours = z.number().min(0).max(24)

export const getTechnicalParametersDsrSchema = (
    useHourlyPower: boolean,
    useMinMaxPower: boolean
) => {
    const baseSchema = {
        Q_avg: z.number().min(0).max(1000000),
        Q_min: z.number().min(0).max(1000000),
        Q_max: z.number().min(0).max(1000000),
        T_shift: z.number().min(0).max(1000000),
        reaction_time: z.number().min(0),
        service_type: z.nativeEnum(Productai),
    }

    const hourlyPowerFields: Record<string, z.ZodNumber> = {}
    const minHourlyPowerFields: Record<string, z.ZodNumber> = {}
    const maxHourlyPowerFields: Record<string, z.ZodNumber> = {}

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
        Q_avg: 500,
        Q_min: 100,
        Q_max: 1000,
        T_shift: 2,
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
