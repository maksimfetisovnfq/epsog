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
import { YearlySummary } from "@/features/p2g/summary/tables/yearly-table.tsx"
import { YearlySummaryChartDsr } from "@/features/dsr/summary/charts/yearly-summary-chart-dsr.tsx"
import { NpvAnalysisChartDsr } from "@/features/dsr/summary/charts/npv-analysis-chart-dsr.tsx"
import { CostProductsChartDsr } from "@/features/dsr/summary/charts/cost-products-chart-dsr.tsx"
import { UtilisationChartDsr } from "@/features/dsr/summary/charts/utilisation-chart-dsr.tsx"
import { FcrBalancingCapacityTable } from "./tables/fsr-balancing-capacity-table"
import { AfrrBalancingCapacityTable } from "@/features/dsr/summary/tables/afrr-balancing-capacity-table.tsx"
import { MfrrBalancingCapacityTable } from "@/features/dsr/summary/tables/mfrr-balancing-capacity-table.tsx"
import { DayAheadTable } from "@/features/dsr/summary/tables/day-ahead-table.tsx"
import { IntradayTable } from "./tables/intraday-table"
import { RevenueChartDsr } from "@/features/dsr/summary/charts/revenue-chart-dsr.tsx"
import { CostChartDsr } from "@/features/dsr/summary/charts/cost-economic-evaluation-chart-dsr.tsx"
import { DefaultDsrSummaryTable } from "@/features/dsr/summary/tables/default-dsr-summary-table.tsx"

export const SummaryOfResultsDsrView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleBackward = () => {
        navigate({
            to: "/dsr/economic-parameters",
            state: { generalData: location.state.generalData, technicalParameters: location.state.technicalParameters},
        })
    }

    const summaryTab = (
        <Fragment key={1}>
            <Stack spacing={1}>
                <Title style={{ fontSize: 24 }}>Santrauka</Title>
                <DefaultDsrSummaryTable/>
                <YearlySummaryTable />
                <YearlySummaryChartDsr />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <NpvAnalysisChartDsr />
                <CostProductsChartDsr />
                <UtilisationChartDsr />
            </Stack>
        </Fragment>
    )

    const balancingCapacityTab = (
        <Fragment key={1}>
            <Stack spacing={0}>
                <DefaultDsrSummaryTable/>
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
                <DefaultDsrSummaryTable/>
                <AfrrBalancingCapacityTable />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <MfrrBalancingCapacityTable />
            </Stack>
        </Fragment>
    )

    const ElectricityTradeTab = (
        <Fragment key={3}>
            <Stack spacing={0}>
                <DefaultDsrSummaryTable/>
                <DayAheadTable />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <IntradayTable />
            </Stack>
        </Fragment>
    )

    const marketTab = (
        <Fragment key={2}>
            <Stack spacing={2}>
                <Title style={{ fontSize: 24 }}>Rinkos duomenys</Title>
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
                <Title style={{ fontSize: 24 }}>Rinkų produktų ekonominiai rezultatai</Title>
                <RevenueTable />
                <RevenueChartDsr />
                <Divider style={{ marginBottom: 8, marginTop: 32, maxWidth: 768 }} />
                <CostTable />
                <CostChartDsr />
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
                    bordered
                    labels={["Apžvalga", "Rinkų duomenys", "Ekonominis vertinimas"]}
                    content={[summaryTab, marketTab, economicTab]}
                />
            </Stack>

            <FormNavigation handleBackward={handleBackward} backButtonTitle="Koreguoti duomenys" nextButtonTitle="Susisiekti"/>
        </>
    )
}
