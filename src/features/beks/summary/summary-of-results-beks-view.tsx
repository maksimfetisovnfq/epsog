import { Stack } from "@mui/material"
import { YearlySummaryTable } from "./tables/yearly-summary-table"
import { RevenueTable } from "./tables/revenue-table"
import { CostTable } from "./tables/cost-table"
import { YearlyTable } from "./tables/yearly-table"
import { Tabs } from "@/components/tabs"
import { Fragment } from "react"
import { InfoBanner } from "@/components/infoBanner/InfoBanner.tsx"
import { YearlySummaryChart } from "@/features/beks/summary/charts/yearly-summary-chart.tsx"
import { CostProductsChart } from "@/features/beks/summary/charts/cost-products-chart.tsx"
import { UtilisationChart } from "@/features/beks/summary/charts/utilisation-chart.tsx"
import { FormNavigation } from "@/components/navigation/form-navigation.tsx"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { FcrBalancingCapacityTable } from "@/features/beks/summary/tables/fsr-balancing-capacity-table.tsx"
import { AfrrBalancingCapacityTable } from "@/features/beks/summary/tables/afrr-balancing-capacity-table.tsx"
import Divider from "@mui/material/Divider"
import { MfrrBalancingCapacityTable } from "@/features/beks/summary/tables/mfrr-balancing-capacity-table.tsx"
import { DayAheadTable } from "@/features/beks/summary/tables/day-ahead-table.tsx"
import { IntradayTable } from "@/features/beks/summary/tables/intraday-table.tsx"
import { NPVAnalysisChart } from "@/features/beks/summary/charts/npv-analysis-chart.tsx"

export const SummaryOfResultsBeksView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleBackward = () => {
        navigate({
            to: "/economic-parameters-beks",
            state: { generalData: location.state.generalData },
        })
    }

    const summaryTab = (
        <Fragment key={1}>
            <Stack spacing={1}>
                <YearlySummaryTable />
                <YearlySummaryChart />
                <Divider style={{ marginBottom: 32, marginTop: 32 }} />
                <NPVAnalysisChart />
                <CostProductsChart />
                <UtilisationChart />
            </Stack>
        </Fragment>
    )

    const balancingCapacityTab = (
        <Fragment key={1}>
            <Stack spacing={0}>
                <FcrBalancingCapacityTable />
                <Divider style={{ marginBottom: 32, marginTop: 32 }} />
                <AfrrBalancingCapacityTable />
                <Divider style={{ marginBottom: 32, marginTop: 32 }} />
                <MfrrBalancingCapacityTable />
            </Stack>
        </Fragment>
    )

    const BalancingEnergyTab = (
        <Fragment key={2}>
            <Stack spacing={0}>
                <AfrrBalancingCapacityTable />
                <Divider style={{ marginBottom: 32, marginTop: 32 }} />
                <MfrrBalancingCapacityTable />
            </Stack>
        </Fragment>
    )

    const ElectricityTradeTab = (
        <Fragment key={3}>
            <Stack spacing={0}>
                <DayAheadTable />
                <Divider style={{ marginBottom: 32, marginTop: 32 }} />
                <IntradayTable/>
            </Stack>
        </Fragment>
    )

    const marketTab = (
        <Fragment key={2}>
            <Stack spacing={2}>
                <Tabs
                    labels={["Balansavimo pajėgumų rinka", "Balansavimo energijos rinka", "Elektros energijos prekyba"]}
                    content={[balancingCapacityTab, BalancingEnergyTab, ElectricityTradeTab]}
                />
            </Stack>
        </Fragment>
    )

    const economicTab = (
        <Fragment key={3}>
            <RevenueTable />
            <CostTable />
            <YearlyTable />
        </Fragment>
    )

    return (
        <>
            <InfoBanner />

            <Stack spacing={2}>
                <Tabs
                    labels={["Apžvalga", "Rinkų duomenys", "Ekonominis vertinimas"]}
                    content={[summaryTab, marketTab, economicTab]}
                />
            </Stack>

            <FormNavigation handleBackward={handleBackward} />
        </>
    )
}
