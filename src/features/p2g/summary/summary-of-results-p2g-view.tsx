import { Stack } from "@mui/material"
import { YearlySummaryTable } from "./tables/yearly-summary-table"
import { RevenueTable } from "./tables/revenue-table"
import { CostTable } from "./tables/cost-table"
import { Tabs } from "@/components/tabs"
import { Fragment } from "react"
import { InfoBanner } from "@/components/infoBanner/InfoBanner"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { Title } from "@/ui/title"
import Divider from "@mui/material/Divider"
import { FcrBalancingCapacityTable } from "@/features/p2g/summary/tables/fsr-balancing-capacity-table"
import { AfrrBalancingCapacityTable } from "./tables/afrr-balancing-capacity-table"
import { MfrrBalancingCapacityTable } from "./tables/mfrr-balancing-capacity-table"
import { YearlySummaryChartP2g } from "@/features/p2g/summary/charts/yearly-summary-chart-p2g"
import { NpvAnalysisChartP2g } from "./charts/npv-analysis-chart-p2g"
import { CostProductsChartP2g } from "./charts/cost-products-chart-p2g"
import { UtilisationChartP2g } from "@/features/p2g/summary/charts/utilisation-chart-p2g"
import { DayAheadTable } from "./tables/day-ahead-table"
import { RevenueChartP2g } from "@/features/p2g/summary/charts/revenue-chart-p2g"
import { CostChartP2g } from "@/features/p2g/summary/charts/cost-economic-evaluation-chart-p2g"
import { YearlySummary } from "@/features/p2g/summary/tables/yearly-table"
import { HydrogenSalesTable } from "@/features/p2g/summary/tables/hydrogen-sales-table"
import { DefaultP2gSummaryTable } from "@/features/p2g/summary/tables/default-p2g-summary-table"

export const SummaryOfResultsP2gView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleBackward = () => {
        navigate({
            to: "/p2g/economic-parameters",
            state: { generalData: location.state.generalData, technicalParameters: location.state.technicalParameters},
        })
    }

    const summaryTab = (
        <Fragment key={1}>
            <Stack spacing={1}>
                <Title style={{ fontSize: 24 }}>Summary</Title>
                <DefaultP2gSummaryTable/>
                <YearlySummaryTable />
                <YearlySummaryChartP2g />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <NpvAnalysisChartP2g />
                <CostProductsChartP2g />
                <UtilisationChartP2g />
            </Stack>
        </Fragment>
    )

    const balancingCapacityTab = (
        <Fragment key={1}>
            <Stack spacing={0}>
                <DefaultP2gSummaryTable/>
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
                <DefaultP2gSummaryTable/>
                <AfrrBalancingCapacityTable />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <MfrrBalancingCapacityTable />
            </Stack>
        </Fragment>
    )

    const ElectricityTradeTab = (
        <Fragment key={3}>
            <Stack spacing={0}>
                <DefaultP2gSummaryTable/>
                <DayAheadTable />
            </Stack>
        </Fragment>
    )

    const FourthTab = (
        <Fragment key={4}>
            <Stack spacing={0}>
                <DefaultP2gSummaryTable/>
                <HydrogenSalesTable />
            </Stack>
        </Fragment>
    )

    const marketTab = (
        <Fragment key={2}>
            <Stack spacing={2}>
                <Title style={{ fontSize: 24 }}>Rinkos duomenys</Title>
                <Tabs
                    labels={["Balansavimo pajėgumų rinka", "Balansavimo energijos rinka", "Elektros energijos prekyba", "FourthTab"]}
                    content={[balancingCapacityTab, BalancingEnergyTab, ElectricityTradeTab, FourthTab]}
                />
            </Stack>
        </Fragment>
    )

    const economicTab = (
        <Fragment key={3}>
            <Stack spacing={3}>
                <Title style={{ fontSize: 24 }}>Rinkų produktų ekonominiai rezultatai</Title>
                <RevenueTable />
                <RevenueChartP2g />
                <Divider style={{ marginBottom: 8, marginTop: 32, maxWidth: 768 }} />
                <CostTable />
                <CostChartP2g />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <YearlySummary />
            </Stack>
        </Fragment>
    )

    return (
        <>
            <Stack spacing={2}>
                <InfoBanner />

                <Tabs
                    labels={["Apžvalga", "Rinkų duomenys", "Ekonominis vertinimas"]}
                    content={[summaryTab, marketTab, economicTab]}
                />
            </Stack>

            <FormNavigation handleBackward={handleBackward} backButtonTitle="Koreguoti duomenys" nextButtonTitle="Susisiekti"/>
        </>
    )
}
