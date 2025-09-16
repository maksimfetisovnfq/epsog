import { type SxProps, type Theme, Typography, type TypographyProps } from "@mui/material"

export const Title = ({ variant, sx, ...props }: TypographyProps) => {
    const h3Sx: SxProps<Theme> = {
        fontSize: "18px",
        fontWeight: 400,
        fontFamily: "Arial",
    }

    return (
        <Typography
            {...props}
            sx={{
                ...sx,
                ...(variant === "h3" ? h3Sx : {}),
            }}
            variant={variant}
        />
    )
}
