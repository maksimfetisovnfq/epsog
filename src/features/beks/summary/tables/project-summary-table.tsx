import { Table } from "@/ui/tables"
import { useProjectSummaryTable } from "../hooks/use-project-summary-table.ts"

export const ProjectSummaryTable = () => {
    const tableProps = useProjectSummaryTable()

    if (!tableProps) return null

    return <Table  {...tableProps} />
}
