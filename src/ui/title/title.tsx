import { Box, type SxProps, type Theme, Typography, type TypographyProps } from "@mui/material"

export const Title = ({ variant, sx, ...props }: TypographyProps) => {
    const h3Sx: SxProps<Theme> = {
        fontSize: "18px",
        fontWeight: 700,
        fontFamily: "Arial",
    }

    return (
        <Box sx={{width: { sm: "768px"}}}>
            <Typography
                {...props}
                sx={[...(Array.isArray(sx) ? sx : sx ? [sx] : []), variant === "h3" && h3Sx]}
                variant={variant}
            />
        </Box>
    )
}
