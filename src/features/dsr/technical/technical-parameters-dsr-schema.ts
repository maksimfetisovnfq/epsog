import { z } from "zod"
import { Productai } from "@/components/productai-select"

const hourlyPowerFields = Object.fromEntries(
        Array.from({ length: 24 }, (_, i) => [
            i.toString(),
            z.number().min(0).max(12),
        ]),
    )

export const technicalParametersDsrSchema = z.object({
    Q_avg: z.number().min(0).max(1000000),
    Q_min: z.number().min(0).max(1000000),
    Q_max: z.number().min(0).max(1000000),
    T_shift: z.number().min(0).max(1000000),
    reaction_time: z.number().min(0),
    service_type: z.nativeEnum(Productai),
    hourly_power: z.object(hourlyPowerFields),
})

export type TechnicalDsrParametersSchema = z.infer<typeof technicalParametersDsrSchema>

export const defaultTechnicalParametersDsr: TechnicalDsrParametersSchema = {
    Q_avg: 500,
    Q_min: 100,
    Q_max: 1000,
    T_shift: 2,
    reaction_time: 1,
    service_type: Productai.UP,
    hourly_power: Object.fromEntries(
            Array.from({ length: 24 }, (_, i) => [
                i.toString(),
                3,
            ]),
        ),
};