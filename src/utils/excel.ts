import type { TableProps } from "@/ui/tables"
import * as XLSX from "xlsx"

type StandardTable = {
    title?: string
    description?: string
    columns: TableProps["columns"]
    dataSource: TableProps["dataSource"]
}

type CombinedTable = {
    title?: string
    description?: string
    tables: Array<{
        source?: string
        dataSource: Array<Record<string, unknown>>
    }>
}

type ExportToExcelProps = {
    filename: string;
    sheets: {
        name: string;
        tables: (StandardTable | CombinedTable)[];
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
                sheetData.push([titleText, ''])
                // Add empty row after title for spacing
                sheetData.push([])
            }

            // Check if this is a combined table format (has nested tables)
            if ('tables' in table && table.tables && table.tables.length > 0) {
                // Process each nested table (CombinedTable format)
                table.tables.forEach((nestedTable) => {
                    // Add source as a header if it exists
                    if (nestedTable.source) {
                        sheetData.push([nestedTable.source, ''])
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

                    // No empty row between nested tables - removed spacing
                })
            } else if ('dataSource' in table && table.dataSource && 'columns' in table && table.columns) {
                // Standard table format
                // Add header row
                const headerRow = table.columns.map((column) => column.title)
                sheetData.push(headerRow)

                // Add data rows
                table.dataSource.forEach((row, rowIdx) => {
                    const dataRow = table.columns.map((column, colIdx) => {
                        let cellContent: unknown = null
                        
                        if (typeof column.render === "function") {
                            cellContent = column.render(row, rowIdx, colIdx)
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

        // Apply merges and styles
        const merges: XLSX.Range[] = []
        let currentRow = 0

        sheet.tables.forEach((table, tableIndex) => {
            // Handle title merge and styling
            if (table.title) {
                const titleText = table.description 
                    ? `${table.title} (${table.description})`
                    : table.title
                
                // Merge cells for title
                merges.push({
                    s: { r: currentRow, c: 0 },
                    e: { r: currentRow, c: 1 }
                })
                
                // Apply styling to title cell
                const cellAddress = XLSX.utils.encode_cell({ r: currentRow, c: 0 })
                if (!worksheet[cellAddress]) worksheet[cellAddress] = { v: titleText, t: 's' }
                worksheet[cellAddress].s = {
                    font: { bold: true, color: { rgb: "FFFFFF" } },
                    fill: { fgColor: { rgb: "4A4A4A" } },
                    alignment: { horizontal: 'left', vertical: 'center' }
                }
                
                currentRow++ // title row
                currentRow++ // empty row after title
            }

            // Handle combined tables
            if ('tables' in table && table.tables && table.tables.length > 0) {
                table.tables.forEach((nestedTable) => {
                    if (nestedTable.source) {
                        // Merge cells for source
                        merges.push({
                            s: { r: currentRow, c: 0 },
                            e: { r: currentRow, c: 1 }
                        })
                        
                        // Apply styling to source cell
                        const cellAddress = XLSX.utils.encode_cell({ r: currentRow, c: 0 })
                        if (!worksheet[cellAddress]) worksheet[cellAddress] = { v: nestedTable.source, t: 's' }
                        worksheet[cellAddress].s = {
                            font: { bold: true, color: { rgb: "FFFFFF" } },
                            fill: { fgColor: { rgb: "4A4A4A" } },
                            alignment: { horizontal: 'left', vertical: 'center' }
                        }
                        
                        currentRow++ // source row
                    }
                    
                    currentRow++ // header row
                    currentRow += nestedTable.dataSource.length // data rows
                })
            } else if ('dataSource' in table && table.dataSource) {
                // Standard table
                currentRow++ // header row
                currentRow += table.dataSource.length // data rows
            }

            // Empty row between tables
            if (tableIndex < sheet.tables.length - 1) {
                currentRow++
            }
        })

        // Apply merges
        if (merges.length > 0) {
            worksheet['!merges'] = merges
        }

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name)
    })

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, `${filename}.xlsx`, { cellStyles: true })
}