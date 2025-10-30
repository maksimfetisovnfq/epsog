import { Button } from "@/ui/button"
import { useYearlySummaryTable } from "./hooks/use-yearly-summary-table"
import { exportToPdf, type PdfContent } from "@/utils/pdf"
import { useFcrBalancingCapacityTable } from "./hooks/use-fcr-balancing-capacity-table"
import { useAfrrBalancingCapacityTable } from "./hooks/use-afrr-balancing-capacity-table"
import { useMfrrBalancingCapacityTable } from "./hooks/use-mfrr-balancing-capacity-table"
import { useDayAheadTable } from "./hooks/use-day-ahead-table"
import { useIntradayTable } from "./hooks/use-intraday-table"
import { useRevenueTable } from "./hooks/use-revenue-table"
import { useCostTable } from "./hooks/use-cost-table"
import { useProjectSummaryTable } from "./hooks/use-project-summary-table"
import { useYearlyTable } from "./hooks/use-yearly-table.ts"
import { useDefaultBeksSummaryTable } from "./hooks/use-default-beks-summary-table"
import type { RefObject } from "react"

type Props = {
    refs: RefObject<HTMLDivElement | null>[]
}

export const ExportToPdfBeks = ({refs}: Props) => {
    const defaultSummary = useDefaultBeksSummaryTable()
    const yearlySummary = useYearlySummaryTable()
    const projectSummary = useProjectSummaryTable()
    const fcrBalancingCapacity = useFcrBalancingCapacityTable()
    const afrrBalancingCapacity = useAfrrBalancingCapacityTable()
    const mfrrBalancingCapacity = useMfrrBalancingCapacityTable()
    const dayAhead = useDayAheadTable()
    const intraday = useIntradayTable()
    const revenue = useRevenueTable()
    const cost = useCostTable()
    const yearly = useYearlyTable()
    
    const [npvAnalysisChartRef, costProductsChartRef, utilisationChartRef, revenueChartRef, costChartRef] = refs
    
    const exportBeks = () => {
        const filename = "Beks"

        // Build content array matching the view structure with tab labels as section titles
        const content: PdfContent[] = [
            // Tab 1: Apžvalga (Summary)
            { sectionTitle: "Apzvalga" },
            defaultSummary,
            yearlySummary,
            projectSummary,
            npvAnalysisChartRef,
            costProductsChartRef,
            utilisationChartRef,
            
            // Tab 2: Rinkų duomenys (Market Data)
            { sectionTitle: "Rinku duomenys" },
            
            // Balansavimo pajėgumų rinka (Balancing Capacity Market)
            { sectionTitle: "Balansavimo pajegumu rinka" },
            fcrBalancingCapacity,
            afrrBalancingCapacity,
            mfrrBalancingCapacity,
            
            // Balansavimo energijos rinka (Balancing Energy Market)
            { sectionTitle: "Balansavimo energijos rinka" },
            afrrBalancingCapacity,
            mfrrBalancingCapacity,
            
            // Elektros energijos prekyba (Electricity Trading)
            { sectionTitle: "Elektros energijos prekyba" },
            dayAhead,
            intraday,
            
            // Tab 3: Ekonominis vertinimas (Economic Evaluation)
            { sectionTitle: "Ekonominis vertinimas" },
            revenue,
            revenueChartRef,
            cost,
            costChartRef,
            yearly,
        ].filter(Boolean) as PdfContent[]

        exportToPdf({ filename, content })
    }

    return (
        <Button variant="contained" type="button" onClick={exportBeks}>
            Eksportuoti kaip PDF
        </Button>
    )
}



