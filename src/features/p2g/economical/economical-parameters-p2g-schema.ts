import { z } from "zod"
import { bspDefaultValues, bspSchema } from "@/components/bsp"

export const economicalParametersP2gSchema = z
    .object({
        CAPEX: z.number().min(0),
        OPEX: z.number().min(0),
        P_H2: z.number().min(0),
        number_of_years: z.number().min(0),
        discount_rate: z.number().min(0),
        P_FCR_CAP_BSP: z.number().min(0),
        P_aFRRu_CAP_BSP: z.number().min(0),
        P_aFRRd_CAP_BSP: z.number().min(0),
        P_mFRRu_CAP_BSP: z.number().min(0),
        P_mFRRd_CAP_BSP: z.number().min(0),
        P_aFRRu_BSP: z.number().min(0),
        P_aFRRd_BSP: z.number().min(0),
        P_mFRRu_BSP: z.number().min(0),
        P_mFRRd_BSP: z.number().min(0),
    })
    .extend(bspSchema.shape)

export type EconomicalP2gParametersSchema = z.infer<typeof economicalParametersP2gSchema>

export const defaultEconomicalParametersP2gSchema: EconomicalP2gParametersSchema = {
    CAPEX: 2400,
    OPEX: 16,
    P_H2: 3.5,
    number_of_years: 2,
    discount_rate: 5,
    ...bspDefaultValues,
}
