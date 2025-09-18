import Typography from "@mui/material/Typography"
import AddIcon from "@mui/icons-material/Add"
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"
import { type PropsWithChildren, useState } from "react"
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary } from "@mui/material"

type AccordionProps = PropsWithChildren<{
    title: string
    children?: React.ReactNode | undefined
}>

export const Accordion = ({ title, children }: AccordionProps) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <MuiAccordion
            sx={{ boxShadow: "none", border: "none", width: {sm: "768px"} }}
            expanded={expanded}
            onChange={(_, isExpanded) => setExpanded(isExpanded)}
        >
            <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
                expandIcon={expanded ? <HorizontalRuleIcon /> : <AddIcon />}
                sx={{ padding: 0, alignItems: "center" }}
            >
                <Typography
                    component="div"
                    sx={{ fontSize: "32px", flexGrow: 1, display: "flex", alignItems: "center" }}
                >
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails> {children} </AccordionDetails>
        </MuiAccordion>
    )
}
