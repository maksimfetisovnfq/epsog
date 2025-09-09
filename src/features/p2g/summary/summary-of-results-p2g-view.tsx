import { Stack } from "@mui/material"
import { YearlySummaryTable } from "./tables/yearly-summary-table"
import { ProjectSummaryTable } from "./tables/project-summary-table"
import { RevenueTable } from "./tables/revenue-table"
import { CostTable } from "./tables/cost-table"
import { YearlyTable } from "./tables/yearly-table"

export const SummaryOfResultsP2gView = () => {
    return <Stack spacing={2}>
        <p>summary</p>
        
        <YearlySummaryTable />
        
        <ProjectSummaryTable />
        
        <p>economic results</p>
        
        <RevenueTable />
        
        <CostTable />
        
        <YearlyTable />
    </Stack>
}