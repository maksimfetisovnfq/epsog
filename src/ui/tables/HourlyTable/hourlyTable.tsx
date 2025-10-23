import { Box, Slider, Typography } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { useState, useEffect } from "react"

export interface HourlyTableProps {
    maxValue?: number
    hours?: number
    sliderHeight?: number
    namePrefix?: string
}

export const HourlyTable = ({ 
    maxValue = 24, 
    hours = 24, 
    sliderHeight = 200,
    namePrefix = "hourly_power"
}: HourlyTableProps) => {
    const { setValue, watch } = useFormContext()
    const [values, setValues] = useState<number[]>(Array(hours).fill(0))

    // Watch all hour values
    useEffect(() => {
        const newValues = Array.from({ length: hours }, (_, i) => {
            const watchedValue = watch(`${namePrefix}_${i}`)
            return watchedValue !== undefined ? Number(watchedValue) : 0
        })
        setValues(newValues)
    }, [hours, namePrefix, watch])

    const handleSliderChange = (hour: number, newValue: number | number[]) => {
        const value = Array.isArray(newValue) ? newValue[0] : newValue
        setValues(prev => {
            const updated = [...prev]
            updated[hour] = value
            return updated
        })
        setValue(`${namePrefix}_${hour}`, value)
    }

    return (
        <Box sx={{ 
            display: "grid",
            gridTemplateColumns: {
                xs: "repeat(4, 1fr)",  // Mobile: 4 sliders per row
                sm: "repeat(6, 1fr)",  // Tablet: 6 sliders per row
                md: "repeat(12, 1fr)", // Desktop: 12 sliders per row
            },
            gap: 2, 
            padding: 2,
            backgroundColor: "#f5f5f5",
            borderRadius: 1
        }}>
            {Array.from({ length: hours }, (_, hour) => (
                <Box
                    key={hour}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                        minWidth: "40px",
                        justifyContent: "flex-end"
                    }}
                >
                    {/* Display value on top */}
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            fontWeight: 600, 
                            fontSize: "14px",
                            color: "#666",
                            minHeight: "20px"
                        }}
                    >
                        {values[hour]?.toFixed(1) || "0.0"}
                    </Typography>

                    {/* Vertical slider */}
                    <Slider
                        orientation="vertical"
                        value={values[hour] || 0}
                        onChange={(_, value) => handleSliderChange(hour, value)}
                        min={0}
                        max={maxValue}
                        step={0.1}
                        sx={{
                            height: sliderHeight,
                            color: "#00EB8C",
                            '& .MuiSlider-thumb': {
                                width: 16,
                                height: 16,
                            },
                            '& .MuiSlider-track': {
                                width: 4,
                            },
                            '& .MuiSlider-rail': {
                                width: 4,
                            }
                        }}
                    />

                    {/* Hour label at bottom */}
                    <Typography 
                        variant="caption" 
                        sx={{ 
                            fontSize: "12px",
                            color: "#666",
                            textAlign: "center"
                        }}
                    >
                        {hour}h
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}
