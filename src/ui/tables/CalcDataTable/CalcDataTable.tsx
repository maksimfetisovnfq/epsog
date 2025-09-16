import { Table } from "../Table"

interface CalcDataTableProps {
    title?: string
    subtitle?: string
    source?: string
    dataSource?: Array<{
        key: string
        parameter: string
        value: string
    }>
}

export const CalcDataTable = ({ dataSource = [], source = "Header" }: CalcDataTableProps) => {

    return (
        <div>
            <Table columns={[
                {
                    title: source,
                    dataIndex: "parameter",
                    key: "combined-header",
                    colSpan: 2,
                },
                {
                    title: "Value",
                    dataIndex: "value",
                    key: "value",
                    colSpan: 0,
                    render: (row) => {
                        const text = row.value
                        const num = parseFloat( String(text))
                        const isNegative = !isNaN(num) && num < 0
                        return <span style={isNegative ? { color: "#FF3232" } : {}}>{String(text)}</span>
                    },
                },
            ]} dataSource={dataSource} boldHeaders={true} />
        </div>
    )
}
