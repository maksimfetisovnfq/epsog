import { Stack } from "@mui/material"
import { YearlySummaryTable } from "./tables/yearly-summary-table"
import { ProjectSummaryTable } from "./tables/project-summary-table"
import { RevenueTable } from "./tables/revenue-table"
import { CostTable } from "./tables/cost-table"
import { YearlyTable } from "./tables/yearly-table"
import { Tabs } from "@/components/tabs"
import { Fragment } from "react"
import { InfoBanner } from "@/components/infoBanner/InfoBanner"
import { YearlySummaryChartP2h } from "@/features/p2h/summary/charts/yearly-summary-chart-p2h.tsx"
import { NpvAnalysisChartP2h } from "./charts/npv-analysis-chart-p2h"
import { CostProductsChartP2h } from "@/features/p2h/summary/charts/cost-products-chart-p2h.tsx"
import { UtilisationChartP2h } from "./charts/utilisation-chart-p2h"
import { RevenueChartP2h } from "./charts/revenue-chart-p2h"
import { CostChartP2h } from "@/features/p2h/summary/charts/cost-economic-evaluation-chart-p2h.tsx"

export const SummaryOfResultsP2hView = () => {
    const summaryTab = (
        <Fragment key={1}>
            <YearlySummaryTable />
            <YearlySummaryChartP2h />
            <NpvAnalysisChartP2h />
            <CostProductsChartP2h />
            <ProjectSummaryTable />
            <UtilisationChartP2h />
        </Fragment>
    )

    const marketTab = (
        <Fragment key={2}>
            <p>123</p>
        </Fragment>
    )

    const economicTab = (
        <Fragment key={3}>
            <RevenueTable />
            <RevenueChartP2h />
            <CostTable />
            <CostChartP2h />
            <YearlyTable />
        </Fragment>
    )

    return (
        <Stack spacing={2}>
            <InfoBanner />

            <Tabs labels={["1", "2", "3"]} content={[summaryTab, marketTab, economicTab]} />
        </Stack>
    )
}
