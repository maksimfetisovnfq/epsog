import { useLocation } from "@tanstack/react-router";
import { DefaultSummaryTable } from "@/ui/tables/DefaultSummaryTable/defaultSummaryTable";

export const DefaultDsrSummaryTable = () => {
    const location = useLocation();
    const technicalParams = location.state?.technicalParameters?.dsr;
    const economicParams = location.state?.economicParameters?.dsr;
    const values = {
        0: technicalParams ? `${technicalParams.Q_max} MW` : '',
        1: '12',
        2: '12',
        3: '12',
        4: economicParams ? `${economicParams.CAPEX} Eur/MW` : '',
        5: economicParams ? `${economicParams.OPEX} Eur/MW/met` : '',
        6: '12',
    };
    return <DefaultSummaryTable columnTitles={["Vertinama technologija", "DSR technologija"]} values={values} />;
};

