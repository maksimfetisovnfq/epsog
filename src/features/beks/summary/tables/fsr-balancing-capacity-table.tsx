import { Table } from "@/ui/tables"
import { useFcrBalancingCapacityTable } from "../hooks/use-fcr-balancing-capacity-table"

export const FcrBalancingCapacityTable = () => {
    const tableData = useFcrBalancingCapacityTable()

    if (!tableData) return null

    return <Table {...tableData} />
}
