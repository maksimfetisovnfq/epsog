import { Box, Stack } from "@mui/material"
import { YearlySummaryTable } from "./tables/yearly-summary-table"
import { RevenueTable } from "./tables/revenue-table"
import { CostTable } from "./tables/cost-table"
import { YearlySummary } from "./tables/yearly-table"
import { Tabs } from "@/components/tabs"
import { Fragment, useRef } from "react"
import { InfoBanner } from "@/components/infoBanner/InfoBanner"
import { CostProductsChartBeks } from "@/features/beks/summary/charts/cost-products-chart-beks"
import { FormNavigation } from "@/components/navigation/form-navigation"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { FcrBalancingCapacityTable } from "@/features/beks/summary/tables/fsr-balancing-capacity-table"
import { AfrrBalancingCapacityTable } from "@/features/beks/summary/tables/afrr-balancing-capacity-table"
import Divider from "@mui/material/Divider"
import { MfrrBalancingCapacityTable } from "@/features/beks/summary/tables/mfrr-balancing-capacity-table"
import { DayAheadTable } from "@/features/beks/summary/tables/day-ahead-table"
import { IntradayTable } from "@/features/beks/summary/tables/intraday-table"
import { NpvAnalysisChartBeks } from "@/features/beks/summary/charts/npv-analysis-chart-beks"
import { CostChartBeks } from "@/features/beks/summary/charts/cost-economic-evaluation-chart-beks"
import { Title } from "@/ui/title"
import { UtilisationChartBeks } from "@/features/beks/summary/charts/utilisation-chart-beks"
import { RevenueChartBeks } from "@/features/beks/summary/charts/revenue-chart-beks"
import { DefaultBeksSummaryTable } from "./tables/default-beks-summary-table"
import { ExportToExcelBeks } from "./export-to-excel"
import { ExportToPdfBeks } from "@/features/beks/summary/export-to-pdf.tsx"
import { contactEmail } from "@/consts.ts"
import { ProjectSummaryTable } from "@/features/beks/summary/tables/project-summary-table.tsx"
import { AfrrBalancingEnergyTable } from "@/features/beks/summary/tables/afrr-balancing-energy-table.tsx"
import { MfrrBalancingEnergyTable } from "@/features/beks/summary/tables/mfrr-balancing-energy-table.tsx"

export const SummaryOfResultsBeksView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleBackward = () => {
        navigate({
            to: "/beks/economic-parameters",
            state: { generalData: location.state.generalData, technicalParameters: location.state.technicalParameters },
        })
    }

    const npvAnalysisChartRef = useRef<HTMLDivElement>(null)
    const costProductsChartRef = useRef<HTMLDivElement>(null)
    const utilisationChartRef = useRef<HTMLDivElement>(null)
    const revenueChartRef = useRef<HTMLDivElement>(null)
    const costChartRef = useRef<HTMLDivElement>(null)

    const summaryTab = (
        <Fragment key={1}>
            <Stack spacing={1}>
                <Title style={{ fontSize: 24 }}>Santrauka</Title>
                <Box style={{ marginBottom: 32 }}>
                    <DefaultBeksSummaryTable />
                </Box>
                <Box style={{ marginBottom: 16 }}>
                    <YearlySummaryTable />
                </Box>
                <Box style={{ marginBottom: 16 }}>
                    <ProjectSummaryTable />
                </Box>
                <Box style={{ marginBottom: 16 }}>
                    <NpvAnalysisChartBeks ref={npvAnalysisChartRef} />
                </Box>
                <Box style={{ marginBottom: 16 }}>
                    <div ref={costProductsChartRef}>
                        <CostProductsChartBeks />
                    </div>
                </Box>
                <div ref={utilisationChartRef}>
                    <UtilisationChartBeks />
                </div>
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
                <AfrrBalancingEnergyTable />
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <MfrrBalancingEnergyTable />
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
                <div ref={revenueChartRef}>
                    <RevenueChartBeks />
                </div>
                <Divider style={{ marginBottom: 8, marginTop: 32, maxWidth: 768 }} />
                <CostTable />
                <div ref={costChartRef}>
                    <CostChartBeks />
                </div>
                <Divider style={{ marginBottom: 32, marginTop: 32, maxWidth: 768 }} />
                <YearlySummary />
            </Stack>
        </Fragment>
    )

    return (
        <>
            <InfoBanner
                showBanner={false}
                actions={
                    <>
                        <ExportToExcelBeks />
                        <ExportToPdfBeks refs={[npvAnalysisChartRef, costProductsChartRef, utilisationChartRef, revenueChartRef, costChartRef]} />
                    </>
                }
            />

            <Tabs
                bordered
                labels={["Apžvalga", "Rinkų duomenys", "Ekonominis vertinimas"]}
                content={[summaryTab, marketTab, economicTab]}
            />

            <FormNavigation
                handleBackward={handleBackward}
                backButtonTitle="Koreguoti duomenis"
                nextButtonTitle="Susisiekti"
                nextButtonEmail={contactEmail}
            />
        </>
    )
}
