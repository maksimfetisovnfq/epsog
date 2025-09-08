import {Stack} from "@mui/material";
import {RevenueTable} from "./tables/revenue-table";
import {YearlySummaryTable} from "./tables/yearly-summary-table";
import {ProjectSummaryTable} from "./tables/project-summary-table";
import {CostTable} from "./tables/cost-table";
import {YearlyTable} from "./tables/yearly-table";
import {NpvAnalysisChart} from "../../components/charts/npv-analysis-chart.tsx";
import {useSummaryP2g} from "./use-summary-p2g";

export const SummaryOfResultsP2g = () => {
    const data = useSummaryP2g()

    if (!data) return
    
    return <Stack spacing={2}>
        <YearlySummaryTable/>
        
        <ProjectSummaryTable/>

        <RevenueTable/>
        
        <CostTable/>
        
        <YearlyTable/>
        
        <NpvAnalysisChart data={data.aggregated.summary.npv_chart_data} />
    </Stack>
}