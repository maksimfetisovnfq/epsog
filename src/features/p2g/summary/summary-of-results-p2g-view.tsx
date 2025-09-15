import { Stack } from "@mui/material"
import { YearlySummaryTable } from "./tables/yearly-summary-table"
import { ProjectSummaryTable } from "./tables/project-summary-table"
import { RevenueTable } from "./tables/revenue-table"
import { CostTable } from "./tables/cost-table"
import { YearlyTable } from "./tables/yearly-table"
import { Tabs } from "@/components/tabs"
import { Fragment } from "react"
import { InfoBanner } from "@/components/infoBanner/InfoBanner"
import { NpvAnalysisChartP2g } from "@/features/p2g/summary/charts/npv-analysis-chart-p2g.tsx"
import { YearlySummaryChartP2g } from "@/features/p2g/summary/charts/yearly-summary-chart-p2g.tsx"
import { CostProductsChartP2g } from "@/features/p2g/summary/charts/cost-products-chart-p2g.tsx"
import { UtilisationChartP2g } from "@/features/p2g/summary/charts/utilisation-chart-p2g.tsx"
import { RevenueChartP2g } from "@/features/p2g/summary/charts/revenue-chart-p2g.tsx"
import { CostChartP2g } from "@/features/p2g/summary/charts/cost-economic-evaluation-chart-p2g.tsx"

export const SummaryOfResultsP2gView = () => {
    const summaryTab = <Fragment key={1}>
        <YearlySummaryTable />
        <YearlySummaryChartP2g/>
        <NpvAnalysisChartP2g />
        <CostProductsChartP2g />
        <ProjectSummaryTable />
        <UtilisationChartP2g />
    </Fragment>

    const marketTab = <Fragment key={2}>
        <p>123</p>
    </Fragment>

    const economicTab = <Fragment key={3}>
        <RevenueTable />
        <RevenueChartP2g/>
        <CostTable />
        <CostChartP2g />
        <YearlyTable />
    </Fragment>

    return (
        <Stack spacing={2}>
            <InfoBanner />
            
            <Tabs labels={["1", "2", "3"]} content={[summaryTab, marketTab, economicTab]} />
        </Stack>
    )
}
