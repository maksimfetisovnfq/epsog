import { styled, TextField, type TextFieldProps } from "@mui/material"
import { useFormContext } from "react-hook-form"
import Tooltip, { tooltipClasses, type TooltipProps } from "@mui/material/Tooltip"
import InfoOutlineIcon from "@mui/icons-material/InfoOutline"

export type FormInputProps = TextFieldProps & {
    name: string
    description?: string
    title?: string
    defaultValue?: string
    tooltip?: string
}

export const FormInput = ({ name, label, title, description, tooltip, ...props }: FormInputProps) => {
    const {
        register,
        formState: { errors },
        getValues,
    } = useFormContext()

    const isFilled = getValues(name) !== undefined && getValues(name) !== ""

    const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "transparent",
            color: "rgba(0, 0, 0, 0.87)",
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
        },
    }))

    return (
        <div style={{marginBottom: '24px'}}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: "12px" }}>
                {title && (
                    <div
                        style={{
                            color: "black",
                            fontSize: "14px",
                            fontFamily: "Arial",
                            fontWeight: 400,
                        }}
                    >
                        {title}
                    </div>
                )}
                
                <div>
                    {tooltip && (
                        <HtmlTooltip
                            title={
                                <div
                                    style={{
                                        fontWeight: 400,
                                        width: "230px",
                                        fontSize: "14px",
                                        color: "#000000",
                                        backgroundColor: "#FFFFFF",
                                        padding: "10px 12px",
                                        borderRadius: "6px",
                                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
                                        lineHeight: "1.5",
                                    }}
                                >
                                    {tooltip}
                                </div>
                            }
                        >
                            <InfoOutlineIcon style={{ color: "#6F8190", width: "16px", height: "16px" }} />
                        </HtmlTooltip>
                    )}
                </div>
            </div>

            <TextField
                sx={{
                    display: "block",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 0,
                        width: "400px",
                        height: "48px",
                        color: isFilled ? "#0F2D46" : "#6F8190",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#CFD5DA",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#00EB8C",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#00EB8C",
                        },
                        "&:hover": {
                            color: "#0F2D46",
                        },
                        "&.Mui-focused": {
                            color: "#0F2D46",
                        },
                    },
                }}
                autoComplete={"off"}
                {...register(name, {
                    setValueAs: (v) => {
                        if (typeof v === "string" && v.trim() !== "" && !isNaN(Number(v))) {
                            return Number(v)
                        }
                        return v
                    },
                })}
                error={Boolean(errors[name])}
                helperText={errors[name] ? String(errors[name]?.message) : null}
                label={label}
                {...props}
            />

            {description && (
                <div
                    id={`${name}-description`}
                    style={{
                        marginTop: "8px",
                        fontSize: "12px",
                        fontFamily: "Arial",
                        fontWeight: 400,
                        color: "#6F8190",
                    }}
                >
                    {description}
                </div>
            )}
        </div>
    )
}