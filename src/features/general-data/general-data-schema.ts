import {z} from 'zod';
import {CalculatorType} from "../../types.ts";

export const generalDataSchema = z
    .object({
        sector: z.string().min(0),
        provider: z.string().min(0),
        country: z.string().min(0),
        calculatorType: z.nativeEnum(CalculatorType),
        concentratorName: z.string().optional(),
    });

export type GeneralDataSchema = z.infer<typeof generalDataSchema>;
