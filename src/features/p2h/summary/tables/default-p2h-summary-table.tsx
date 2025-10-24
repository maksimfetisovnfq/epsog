import { useLocation } from "@tanstack/react-router"
import { Table } from "@/ui/tables/Table"

const rowHeaders = [
    "Įrenginio galia ir talpa",
    "Reakcijos laikas įjungiant šilumos siurblį (reguliavimas žemyn)",
    "Reakcijos laikas išjungiant šilumos siurblį (reguliavimas aukštyn)",
    "Projekto investicijos, CAPEX (tūkst. EUR)",
    "Projekto veiklos sąnaudos, OPEX (tūkst. EUR)",
]

export const DefaultP2hSummaryTable = () => {
    const location = useLocation()
    const technicalParams = location.state?.technicalParameters?.p2h
    const economicParams = location.state?.economicParameters?.p2h

    const columns = [
        { title: "Vertinama technologija", dataIndex: "label", key: "label" },
        { title: "P2H technologija", dataIndex: "value", key: "value" },
    ]

    const dataSource = [
        { label: rowHeaders[0], value: technicalParams ? `${technicalParams.Q_yearly} MW` : "" },
        technicalParams?.reaction_time_d
            ? { label: rowHeaders[1], value: `${technicalParams.reaction_time_d} min` }
            : null,
        technicalParams?.reaction_time_u
            ? { label: rowHeaders[2], value: `${technicalParams.reaction_time_u} min` }
            : null,
        { label: rowHeaders[3], value: economicParams ? `${economicParams.CAPEX_HP} Eur/MW` : "" },
        { label: rowHeaders[4], value: economicParams ? `${economicParams.OPEX_HP} Eur/MW/met` : "" },
    ].filter(Boolean)

    return (
        <Table
            columns={columns}
            dataSource={dataSource as { label: string; value: string }[]}
            headerBackgroundColor={{ left: "#F5F7F8", right: "#FFFFFF" }}
            textAlign="left"
        />
    )
}
