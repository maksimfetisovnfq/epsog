import { Table as MuiTable, TableBody, TableCell, TableRow } from "@mui/material"
import { FormInput } from "@/components/form"

export interface HourlyTableProps {
    inputWidth?: string
    rows?: number
    cols?: number
}

export const HourlyTable = ({ inputWidth = "186px", rows = 6, cols = 4 }: HourlyTableProps) => {
    const createHourlyPowerTable = () => {
        const tableRows = []
        for (let row = 0; row < rows; row++) {
            const cells = []
            for (let col = 0; col < cols; col++) {
                const hour = row * cols + col
                cells.push(
                    <TableCell key={hour} sx={{ padding: 1, border: "1px solid #CFD5DA" }}>
                        <label
                            htmlFor={`hourly_power_${hour}`}
                            style={{ display: "block", fontWeight: 400, fontSize: "13px", marginBottom: "2px" }}
                        >
                            Hour {hour}
                        </label>
                        <FormInput
                            id={`hourly_power_${hour}`}
                            name={`hourly_power_${hour}`}
                            type="number"
                            width={inputWidth}
                        />
                    </TableCell>
                )
            }
            tableRows.push(<TableRow key={row}>{cells}</TableRow>)
        }
        return tableRows
    }

    return (
        <MuiTable sx={{ border: "1px solid #CFD5DA" }}>
            <TableBody>{createHourlyPowerTable()}</TableBody>
        </MuiTable>
    )
}
