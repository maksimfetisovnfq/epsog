import type { TableProps } from "@/ui/tables"
import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"

export type StandardTable = {
    title?: string
    description?: string
    columns: TableProps["columns"]
    dataSource: TableProps["dataSource"]
}

export type CombinedTable = {
    title?: string
    description?: string
    tables: Array<{
        source?: string
        dataSource: Array<Record<string, unknown>>
    }>
}

type ExportToPdfProps = {
    filename: string
    tables: (StandardTable | CombinedTable)[]
}

export const exportToPdf = ({ filename, tables }: ExportToPdfProps) => {
    // Create a new PDF document
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
    })

    let startY = 10

    // Process each table
    tables.forEach((table, tableIndex) => {
        // Add title if exists
        if (table.title) {
            const titleText = table.description 
                ? `${table.title} (${table.description})`
                : table.title

            // Check if we need a new page
            if (startY > 270) {
                doc.addPage()
                startY = 10
            }

            doc.setFontSize(14)
            doc.setFont("helvetica", "bold")
            doc.setTextColor(74, 74, 74) // Dark gray
            doc.text(titleText, 14, startY)
            startY += 8
        }

        // Check if this is a combined table format (has nested tables)
        if ('tables' in table && table.tables && table.tables.length > 0) {
            // Process each nested table (CombinedTable format)
            table.tables.forEach((nestedTable) => {
                // Add source as a subtitle if it exists
                if (nestedTable.source) {
                    if (startY > 270) {
                        doc.addPage()
                        startY = 10
                    }

                    doc.setFontSize(12)
                    doc.setFont("helvetica", "bold")
                    doc.setTextColor(74, 74, 74)
                    doc.text(nestedTable.source, 14, startY)
                    startY += 6
                }

                // Create table data
                const tableData = nestedTable.dataSource.map((row) => [
                    String(row.parameter || ""),
                    String(row.value || "")
                ])

                // Add table using autoTable
                autoTable(doc, {
                    startY: startY,
                    head: [["Parameter", "Value"]],
                    body: tableData,
                    theme: "grid",
                    styles: {
                        fontSize: 9,
                        cellPadding: 3,
                    },
                    headStyles: {
                        fillColor: [74, 74, 74],
                        textColor: [255, 255, 255],
                        fontStyle: "bold",
                    },
                    margin: { left: 14, right: 14 },
            })

                // Update startY for next table
                // @ts-expect-error - lastAutoTable is added by jspdf-autotable plugin
                startY = doc.lastAutoTable.finalY + 5
            })
        } else if ('dataSource' in table && table.dataSource && 'columns' in table && table.columns) {
            // Standard table format
            
            // Create header row
            const headers = table.columns.map((column) => String(column.title))

            // Create data rows
            const tableData = table.dataSource.map((row, rowIdx) => {
                return table.columns.map((column, colIdx) => {
                    let cellContent: unknown = null
                    
                    if (typeof column.render === "function") {
                        cellContent = column.render(row, rowIdx, colIdx)
                    } else if (typeof column.render === "string") {
                        cellContent = row[column.render]
                    } else if (column.dataIndex) {
                        cellContent = row[column.dataIndex]
                    }
                    
                    return String(cellContent ?? "")
                })
            })

            // Add table using autoTable
            autoTable(doc, {
                startY: startY,
                head: [headers],
                body: tableData,
                theme: "grid",
                styles: {
                    fontSize: 9,
                    cellPadding: 3,
                },
                headStyles: {
                    fillColor: [74, 74, 74],
                    textColor: [255, 255, 255],
                    fontStyle: "bold",
                },
                margin: { left: 14, right: 14 },
            })

            // Update startY for next table
            // @ts-expect-error - lastAutoTable is added by jspdf-autotable plugin
            startY = doc.lastAutoTable.finalY + 8
        }

        // Add spacing between tables
        if (tableIndex < tables.length - 1) {
            startY += 5
        }
    })

    // Save the PDF
    doc.save(`${filename}.pdf`)
}

