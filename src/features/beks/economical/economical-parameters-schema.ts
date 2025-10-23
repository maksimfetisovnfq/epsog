import {z} from 'zod';
import { bspDefaultValues, getBspSchema } from "@/components/bsp"
import { numberField, errorMessages } from '@/utils/zod';

export const economicalParametersSchema = z
    .object({
        CAPEX_P: numberField().pipe(z.number().gt(0, errorMessages.greaterThan(0))),
        CAPEX_C: numberField().pipe(z.number().gt(0, errorMessages.greaterThan(0))),
        OPEX_P: numberField().pipe(z.number().gt(0, errorMessages.greaterThan(0))),
        OPEX_C: numberField().pipe(z.number().gt(0, errorMessages.greaterThan(0))),
        number_of_years: numberField().pipe(z.number().int(errorMessages.integer).gte(1, errorMessages.between(1, 50)).lte(50, errorMessages.between(1, 50))),
        discount_rate: numberField().pipe(z.number().gte(0, errorMessages.between(0, 100)).lte(100, errorMessages.between(0, 100))),
    }).extend(getBspSchema(true).shape);

export type EconomicalBeksParametersSchema = z.infer<typeof economicalParametersSchema>;

export const economicalParametersDefaultValues: Partial<EconomicalBeksParametersSchema> = {
    number_of_years: 10,
    discount_rate: 5,
    ...bspDefaultValues,
}