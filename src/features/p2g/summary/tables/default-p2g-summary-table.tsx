import { useLocation } from "@tanstack/react-router";
import { DefaultSummaryTable } from "@/ui/tables/DefaultSummaryTable/defaultSummaryTable";

export const DefaultP2gSummaryTable = () => {
    const location = useLocation();
    const technicalParams = location.state?.technicalParameters?.p2g;
    const economicParams = location.state?.economicParameters?.p2g;
    const values = {
        0: technicalParams ? `${technicalParams.Q_max} MW` : '',
        1: '12',
        2: '12',
        3: '12',
        4: economicParams ? `${economicParams.CAPEX} Eur/MW` : '',
        5: economicParams ? `${economicParams.OPEX} Eur/MW/met` : '',
        6: '12',
    };
    return <DefaultSummaryTable columnTitles={["Vertinama technologija", "P2G technologija"]} values={values} />;
};

