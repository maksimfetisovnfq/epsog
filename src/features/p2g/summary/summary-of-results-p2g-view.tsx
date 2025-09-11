import { Stack } from "@mui/material"
import { YearlySummaryTable } from "./tables/yearly-summary-table"
import { ProjectSummaryTable } from "./tables/project-summary-table"
import { RevenueTable } from "./tables/revenue-table"
import { CostTable } from "./tables/cost-table"
import { YearlyTable } from "./tables/yearly-table"
import { Tabs } from "@/components/tabs"
import { Fragment } from "react"
import { InfoBanner } from "@/features/beks/summary/components"

export const SummaryOfResultsP2gView = () => {
    const summaryTab = <Fragment key={1}>
        <YearlySummaryTable />

        <ProjectSummaryTable />
    </Fragment>

    const marketTab = <Fragment key={2}>
        <p>123</p>
    </Fragment>

    const economicTab = <Fragment key={3}>
        <RevenueTable />
        <CostTable />
        <YearlyTable />
    </Fragment>

    return (
        <Stack spacing={2}>
            <InfoBanner />
            
            <Tabs labels={["1", "2", "3"]} content={[summaryTab, marketTab, economicTab]} />
        </Stack>
    )
}
