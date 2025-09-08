import {z} from 'zod';

export const summaryOfResultsSchema = z
    .object({
        network: z.string().min(0),
    });

export type SummaryOfResultsP2hSchema = z.infer<typeof summaryOfResultsSchema>;

