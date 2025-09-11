import {z} from 'zod';

export const summaryOfResultsSchema = z
    .object({
        network: z.string().min(0),
    });

export type SummaryOfResultsBeksSchema = z.infer<typeof summaryOfResultsSchema>;

