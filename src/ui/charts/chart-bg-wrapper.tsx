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
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "url(/EPSOG_logo_BLACK.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "50%",
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
