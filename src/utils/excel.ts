import type { TableProps } from "@/ui/tables"
import * as XLSX from "xlsx"

type ExportToExcelProps = {
    filename: string;
    sheets: {
        name: string;
        tables: {
            title?: string
            description?: string
            columns: TableProps["columns"]
            dataSource: TableProps["dataSource"]
            tables?: Array<{
                source?: string
                dataSource: Array<Record<string, unknown>>
            }>
        }[];
    }[];
}


export const exportToExcel = ({filename, sheets}: ExportToExcelProps) => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new()

    // Process each sheet
    sheets.forEach((sheet) => {
        const sheetData: unknown[][] = []

        // Process each table in the sheet
        sheet.tables.forEach((table, tableIndex) => {
            // Add title row if title exists, with description in parentheses if available
            if (table.title) {
                const titleText = table.description 
                    ? `${table.title} (${table.description})`
                    : table.title
                sheetData.push([titleText])
                // Add empty row after title for spacing
                sheetData.push([])
            }

            // Check if this is a combined table format (has nested tables)
            if (table.tables && table.tables.length > 0) {
                // Process each nested table (CombinedTable format)
                table.tables.forEach((nestedTable, nestedIndex) => {
                    // Add source as a header if it exists
                    if (nestedTable.source) {
                        sheetData.push([nestedTable.source])
                    }

                    // Add header row for parameter and value
                    sheetData.push(["Parameter", "Value"])

                    // Add data rows
                    nestedTable.dataSource.forEach((row) => {
                        const dataRow = [
                            row.parameter,
                            row.value
                        ]
                        sheetData.push(dataRow)
                    })

                    // Add empty row between nested tables (if not the last one)
                    if (nestedIndex < table.tables!.length - 1) {
                        sheetData.push([])
                    }
                })
            } else {
                // Standard table format
                // Add header row
                const headerRow = table.columns.map((column) => column.title)
                sheetData.push(headerRow)

                // Add data rows
                table.dataSource.forEach((row, rowIdx) => {
                    const dataRow = table.columns.map((column, colIdx) => {
                        let cellContent: unknown = null
                        
                        if (typeof column.render === "function") {
                            // Call the render function to get the value
                            const rendered = column.render(row, rowIdx, colIdx)
                            // Extract text content from React nodes if needed
                            cellContent = rendered
                        } else if (typeof column.render === "string") {
                            cellContent = row[column.render]
                        } else if (column.dataIndex) {
                            cellContent = row[column.dataIndex]
                        }
                        
                        return cellContent
                    })
                    sheetData.push(dataRow)
                })
            }

            // Add empty row between tables (if not the last table)
            if (tableIndex < sheet.tables.length - 1) {
                sheetData.push([])
            }
        })

        // Create worksheet from data
        const worksheet = XLSX.utils.aoa_to_sheet(sheetData)

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name)
    })

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, `${filename}.xlsx`)
}