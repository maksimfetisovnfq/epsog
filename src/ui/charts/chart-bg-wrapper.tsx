import type { PropsWithChildren } from "react"
import { Box } from "@mui/material"

export const ChartBgWrapper = ({ children }: PropsWithChildren) => {
    return (
        <Box
            sx={{
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: "15%",
                    height: "15%",
                    background: "url(/EPSOG_logo_BLACK.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    backgroundSize: "contain",
                    opacity: 0.1,
                    pointerEvents: "none",
                    zIndex: 0,
                },
            }}
        >
            {children}
        </Box>
    )
}
