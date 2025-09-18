import { useLocation } from "@tanstack/react-router";
import { DefaultSummaryTable } from "@/ui/tables/DefaultSummaryTable/defaultSummaryTable";

export const DefaultBeksSummaryTable = () => {
    const location = useLocation();
    const technicalParams = location.state?.technicalParameters?.beks;
    const economicParams = location.state?.economicParameters?.beks;
    const values = {
        0: technicalParams ? `${technicalParams.q_max} MW / ${technicalParams.q_total} MWh` : '',
        1: '12',
        2: '12',
        3: '12',
        4: economicParams ? `${economicParams.CAPEX_P} Eur/MW, ${economicParams.CAPEX_C} Eur/MWh` : '',
        5: economicParams ? `${economicParams.OPEX_P} Eur/MW/met, ${economicParams.OPEX_C} Eur/MWh` : '',
        6: '12',
    };
    return <DefaultSummaryTable values={values} />;
};

