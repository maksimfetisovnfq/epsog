import { useLocation } from "@tanstack/react-router";
import { DefaultSummaryTable } from "@/ui/tables/DefaultSummaryTable/defaultSummaryTable";

export const DefaultP2hSummaryTable = () => {
    const location = useLocation();
    const technicalParams = location.state?.technicalParameters?.p2h;
    const economicParams = location.state?.economicParameters?.p2h;
    const values = {
        0: technicalParams ? `${technicalParams.Q_yearly} MW` : '',
        1: '12',
        2: '12',
        3: '12',
        4: economicParams ? `${economicParams.CAPEX_P} Eur/MW` : '',
        5: economicParams ? `${economicParams.OPEX_HP} Eur/MW/met` : '',
        6: '12',
    };
    return <DefaultSummaryTable columnTitles={["Vertinama technologija", "P2H technologija"]} values={values} />;
};

