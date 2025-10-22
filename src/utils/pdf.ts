import type { TableProps } from "@/ui/tables"
import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"

// Helper function to convert special characters to similar ASCII equivalents
// This is a workaround for jsPDF's limited Unicode support in built-in fonts
const normalizeTextForPdf = (text: string): string => {
    // Map Lithuanian and other special characters to their closest ASCII equivalents
    const charMap: Record<string, string> = {
        'ą': 'a', 'č': 'c', 'ę': 'e', 'ė': 'e', 'į': 'i', 
        'š': 's', 'ų': 'u', 'ū': 'u', 'ž': 'z',
        'Ą': 'A', 'Č': 'C', 'Ę': 'E', 'Ė': 'E', 'Į': 'I',
        'Š': 'S', 'Ų': 'U', 'Ū': 'U', 'Ž': 'Z',
        // Add more mappings as needed
        'ä': 'a', 'ö': 'o', 'ü': 'u',
        'Ä': 'A', 'Ö': 'O', 'Ü': 'U',
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
    }
    
    return text.split('').map(char => charMap[char] || char).join('')
}

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
    // Create a new PDF document with proper character encoding
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        putOnlyUsedFonts: true,
        compress: true,
    })


    let startY = 10

    // Process each table
    tables.forEach((table, tableIndex) => {
        // Add title if exists
        if (table.title) {
            const titleText = normalizeTextForPdf(
                table.description 
                    ? `${table.title} (${table.description})`
                    : table.title
            )

            // Check if we need a new page
            if (startY > 270) {
                doc.addPage()
                startY = 10
            }

            doc.setFontSize(14)
            doc.setFont("helvetica", "bold")
            doc.setTextColor(74, 74, 74) // Dark gray
            
            // Split text to fit within page width (A4 width - margins)
            const maxWidth = 182 // 210mm (A4 width) - 28mm (14mm left + 14mm right margins)
            const splitTitle = doc.splitTextToSize(titleText, maxWidth)
            
            // Add wrapped text
            doc.text(splitTitle, 14, startY)
            
            // Calculate height of wrapped text (each line is approximately 6mm at font size 14)
            const titleHeight = splitTitle.length * 6
            startY += titleHeight + 2
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
                    
                    // Split text to fit within page width
                    const maxWidth = 182 // A4 width - margins
                    const splitSource = doc.splitTextToSize(normalizeTextForPdf(nestedTable.source), maxWidth)
                    doc.text(splitSource, 14, startY)
                    
                    // Calculate height of wrapped text (each line is approximately 5mm at font size 12)
                    const sourceHeight = splitSource.length * 5
                    startY += sourceHeight + 1
                }

                // Create table data
                const tableData = nestedTable.dataSource.map((row) => [
                    normalizeTextForPdf(String(row.parameter || "")),
                    normalizeTextForPdf(String(row.value || ""))
                ])

                // Add table using autoTable with Unicode support
                autoTable(doc, {
                    startY: startY,
                    head: [[normalizeTextForPdf("Parameter"), normalizeTextForPdf("Value")]],
                    body: tableData,
                    theme: "grid",
                    styles: {
                        fontSize: 9,
                        cellPadding: 3,
                        font: "helvetica",
                    },
                    headStyles: {
                        fillColor: [74, 74, 74],
                        textColor: [255, 255, 255],
                        fontStyle: "bold",
                    },
                    margin: { left: 14, right: 14 },
                    // Enable Unicode support
                    didParseCell: function(data) {
                        // Ensure proper text encoding
                        if (data.cell.raw && typeof data.cell.raw === 'string') {
                            data.cell.text = [data.cell.raw]
                        }
                    },
            })

                // Update startY for next table
                // @ts-expect-error - lastAutoTable is added by jspdf-autotable plugin
                startY = doc.lastAutoTable.finalY + 10 // Increased spacing between nested tables
            })
        } else if ('dataSource' in table && table.dataSource && 'columns' in table && table.columns) {
            // Standard table format
            
            // Create header row
            const headers = table.columns.map((column) => normalizeTextForPdf(String(column.title)))

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
                    
                    return normalizeTextForPdf(String(cellContent ?? ""))
                })
            })

            // Add table using autoTable with Unicode support
            autoTable(doc, {
                startY: startY,
                head: [headers],
                body: tableData,
                theme: "grid",
                styles: {
                    fontSize: 9,
                    cellPadding: 3,
                    font: "helvetica",
                },
                headStyles: {
                    fillColor: [74, 74, 74],
                    textColor: [255, 255, 255],
                    fontStyle: "bold",
                },
                margin: { left: 14, right: 14 },
                // Enable Unicode support
                didParseCell: function(data) {
                    // Ensure proper text encoding
                    if (data.cell.raw && typeof data.cell.raw === 'string') {
                        data.cell.text = [data.cell.raw]
                    }
                },
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

