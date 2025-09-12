import {z} from 'zod';
import { bspDefaultValues, bspSchema } from "@/components/bsp"

export const economicalParametersSchema = z
    .object({
        CAPEX_P: z.number().gt(0),
        CAPEX_C: z.number().gt(0),
        OPEX_P: z.number().gt(0),
        OPEX_C: z.number().gt(0),
        number_of_years: z.number().int().gte(1).lte(50),
        discount_rate: z.number().gte(0).lte(100),
    }).extend(bspSchema.shape);

export type EconomicalBeksParametersSchema = z.infer<typeof economicalParametersSchema>;

export const economicalParametersDefaultValues: EconomicalBeksParametersSchema = {
    CAPEX_P: 1000000,
    CAPEX_C: 50000,
    OPEX_P: 20000,
    OPEX_C: 10,
    number_of_years: 10,
    discount_rate: 5,
    ...bspDefaultValues,
}