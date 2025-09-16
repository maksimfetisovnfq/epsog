import { Table } from "../Table"

interface CombinedTableProps {
    source?: string
    dataSource?: Array<{
        key: string
        parameter: string
        value: string
    }>
}

export const CombinedTable = ({ dataSource = [], source = "Header" }: CombinedTableProps) => {
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
                    render: (row: Record<string, unknown>) => {
                        const text = row.value as string;
                        const num = parseFloat(text);
                        const isNegative = !isNaN(num) && num < 0;
                        return <span style={isNegative ? { color: "#FF3232" } : {}}>{text}</span>;
                    },
                },
            ]} dataSource={dataSource} boldHeaders={true} />
        </div>
    )
}
