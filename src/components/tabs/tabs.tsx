import { Tab, Tabs as MuiTabs, Stack } from "@mui/material"
import { type ReactNode, useState } from "react"

type Props = {
    labels: string[]
    content: ReactNode[]
}

export const Tabs = ({ labels, content }: Props) => {
    const [tab, setTab] = useState(0)

    return (
        <Stack spacing={2}>
            <MuiTabs
                value={tab}
                onChange={(_, newValue) => setTab(newValue)}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                    "& .MuiTab-root": {
                        textTransform: "none",
                        marginLeft: "8px",
                        padding: "10px 20px",
                        color: "#0F2D46",
                        backgroundColor: "white",
                        borderRadius: "100px",
                        transition: "all 0.2s",
                    },
                    "& .Mui-selected": {
                        color: "white !important",
                        backgroundColor: "#0F2D46",
                    },
                    "& .MuiTabs-indicator": {
                        backgroundColor: "transparent",
                    },
                }}
            >
                {labels.map((label) => (
                    <Tab key={label} label={label} />
                ))}
            </MuiTabs>

            {content[tab] && <Stack spacing={6}>{content[tab]}</Stack>}
        </Stack>
    )
}
