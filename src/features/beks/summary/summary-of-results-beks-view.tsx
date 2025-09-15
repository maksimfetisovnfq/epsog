import { Stack } from "@mui/material"
import { YearlySummaryTable } from "./tables/yearly-summary-table"
import { RevenueTable } from "./tables/revenue-table"
import { CostTable } from "./tables/cost-table"
import { YearlySummary } from "./tables/yearly-table"
import { Tabs } from "@/components/tabs"
import { Fragment } from "react"
import { InfoBanner } from "@/components/infoBanner/InfoBanner.tsx"
import { CostProductsChartBeks } from "@/features/beks/summary/charts/cost-products-chart-beks.tsx"
import { FormNavigation } from "@/components/navigation/form-navigation.tsx"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { FcrBalancingCapacityTable } from "@/features/beks/summary/tables/fsr-balancing-capacity-table.tsx"
import { AfrrBalancingCapacityTable } from "@/features/beks/summary/tables/afrr-balancing-capacity-table.tsx"
import Divider from "@mui/material/Divider"
import { MfrrBalancingCapacityTable } from "@/features/beks/summary/tables/mfrr-balancing-capacity-table.tsx"
import { DayAheadTable } from "@/features/beks/summary/tables/day-ahead-table.tsx"
import { IntradayTable } from "@/features/beks/summary/tables/intraday-table.tsx"
import { NpvAnalysisChartBeks } from "@/features/beks/summary/charts/npv-analysis-chart-beks.tsx"
import { CostChartBeks } from "@/features/beks/summary/charts/cost-economic-evaluation-chart-beks.tsx"
import { Title } from "@/ui/title"
import { YearlySummaryChartBeks } from "@/features/beks/summary/charts/yearly-summary-chart-beks.tsx"
import { UtilisationChartBeks } from "@/features/beks/summary/charts/utilisation-chart-beks.tsx"
import { RevenueChartBeks } from "@/features/beks/summary/charts/revenue-chart-beks.tsx"

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
                <Title style={{fontSize: 24}}>Summary</Title>
                <YearlySummaryTable />
                <YearlySummaryChartBeks />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <NpvAnalysisChartBeks />
                <CostProductsChartBeks />
                <UtilisationChartBeks />
            </Stack>
        </Fragment>
    )

    const balancingCapacityTab = (
        <Fragment key={1}>
            <Stack spacing={0}>
                <FcrBalancingCapacityTable />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <AfrrBalancingCapacityTable />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <MfrrBalancingCapacityTable />
            </Stack>
        </Fragment>
    )

    const BalancingEnergyTab = (
        <Fragment key={2}>
            <Stack spacing={0}>
                <AfrrBalancingCapacityTable />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <MfrrBalancingCapacityTable />
            </Stack>
        </Fragment>
    )

    const ElectricityTradeTab = (
        <Fragment key={3}>
            <Stack spacing={0}>
                <DayAheadTable />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <IntradayTable />
            </Stack>
        </Fragment>
    )

    const marketTab = (
        <Fragment key={2}>
            <Stack spacing={2}>
                <Title style={{fontSize: 24}}>Rinkos duomenys</Title>
                <Tabs
                    labels={["Balansavimo pajėgumų rinka", "Balansavimo energijos rinka", "Elektros energijos prekyba"]}
                    content={[balancingCapacityTab, BalancingEnergyTab, ElectricityTradeTab]}
                />
            </Stack>
        </Fragment>
    )

    const economicTab = (
        <Fragment key={3}>
            <Stack spacing={3}>
                <Title style={{fontSize: 24}}>Rinkų produktų ekonominiai rezultatai</Title>
                <RevenueTable />
                <RevenueChartBeks />
                <Divider style={{ marginBottom: 8, marginTop: 32, maxWidth: 768 }} />
                <CostTable />
                <CostChartBeks />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <YearlySummary />
            </Stack>
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
