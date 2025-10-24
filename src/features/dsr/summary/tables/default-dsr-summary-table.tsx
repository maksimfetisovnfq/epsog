import { useLocation } from "@tanstack/react-router";
import { Table } from "@/ui/tables/Table";

const rowHeaders = [
    'Įrenginio galia ir talpa',
    "Projekto investicijos, CAPEX (tūkst. EUR)",
    "Projekto veiklos sąnaudos, OPEX (tūkst. EUR)",
];

export const DefaultDsrSummaryTable = () => {
    const location = useLocation();
    const technicalParams = location.state?.technicalParameters?.dsr;
    const economicParams = location.state?.economicParameters?.dsr;
    
    const columns = [
        { title: "Vertinama technologija", dataIndex: "label", key: "label" },
        { title: "DSR technologija", dataIndex: "value", key: "value" },
    ];

    const dataSource = [
        { label: rowHeaders[0], value: technicalParams ? `${technicalParams.Q_max} MW` : '' },
        { label: rowHeaders[4], value: economicParams ? `${economicParams.CAPEX} Eur/MW` : '' },
        { label: rowHeaders[5], value: economicParams ? `${economicParams.OPEX} Eur/MW/met` : '' },
    ];

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            headerBackgroundColor={{ left: "#F5F7F8", right: "#FFFFFF" }}
            textAlign="left"
        />
    );
};

