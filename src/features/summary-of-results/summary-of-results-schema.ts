import {z} from 'zod';

export const summaryOfResultsSchema = z
    .object({
        network: z.string().min(20),
    });

export type SummaryOfResultsSchema = z.infer<typeof summaryOfResultsSchema>;

