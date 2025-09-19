import { Tab, Tabs as MuiTabs, Stack, Box } from "@mui/material"
import { type ReactNode, useState } from "react"

type Props = {
    labels: string[]
    content: ReactNode[]
    bordered?: boolean 
}

export const Tabs = ({ labels, content, bordered = false }: Props) => {
    const [tab, setTab] = useState(0)

    return (
        <Box style={{ marginBottom: 24 }}>
            <MuiTabs
                value={tab}
                onChange={(_, newValue) => setTab(newValue)}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                    "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap",
                        gap: "6px",
                        border: bordered ? "1px solid #CFD5DA" : "none", borderRadius: "100px",
                        width: bordered ? {sm:"490px"} : {sm: "768px"},
                        paddingBottom: bordered ? "8px" : "0px",
                        paddingTop: bordered ? "8px" : "0px",
                    },
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
        </Box>
    )
}
