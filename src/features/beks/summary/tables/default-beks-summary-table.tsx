import { useLocation } from "@tanstack/react-router"
import { Table } from "@/ui/tables/Table"
import { getReactionTimeDisplay } from "../helpers/get-reaction-time-display"

const rowHeaders = [
    "Įrenginio galia ir talpa",
    "Pasirinkta teikti reguliavimo paslauga",
    "Projekto investicijos, CAPEX (tūkst. EUR)",
    "Projekto veiklos sąnaudos, OPEX (tūkst. EUR)",
]

export const DefaultBeksSummaryTable = () => {
    const location = useLocation()
    const technicalParams = location.state?.technicalParameters?.beks
    const economicParams = location.state?.economicParameters?.beks
    
    const columns = [
        { title: "Vertinama technologija", dataIndex: "label", key: "label" },
        { title: "BEKS", dataIndex: "value", key: "value" },
    ]

    const dataSource = [
        { label: rowHeaders[0], value: technicalParams ? `${technicalParams.q_max} MW / ${technicalParams.q_total} MWh` : "" },
        { label: rowHeaders[1], value: technicalParams ? getReactionTimeDisplay(technicalParams.reaction_time) : "" },
        { label: rowHeaders[2], value: economicParams ? `${economicParams.CAPEX_P} Eur/MW, ${economicParams.CAPEX_C} Eur/MWh` : "" },
        { label: rowHeaders[3], value: economicParams ? `${economicParams.OPEX_P} Eur/MW/met, ${economicParams.OPEX_C} Eur/MWh` : "" },
    ]

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            headerBackgroundColor={{ left: "#F5F7F8", right: "#FFFFFF" }}
            textAlign="left"
        />
    )
}
