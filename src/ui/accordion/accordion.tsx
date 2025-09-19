import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { type PropsWithChildren, useState } from "react";
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";

type AccordionProps = PropsWithChildren<{
    title: string;
    titleDescription?: React.ReactNode | undefined;
    children?: React.ReactNode | undefined;
}>;

export const Accordion = ({ title, children, titleDescription }: AccordionProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <MuiAccordion
            sx={{ boxShadow: "none", border: "none", width: { sm: "768px" } }}
            expanded={expanded}
            onChange={(_, isExpanded) => setExpanded(isExpanded)}
        >
            <AccordionSummary
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ padding: 0, alignItems: "start" }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        component="div"
                        sx={{
                            fontSize: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: titleDescription ? "24px" : 0,
                        }}
                    >
                        {title}
                        {expanded ? <HorizontalRuleIcon /> : <AddIcon />}
                    </Typography>
                    <Box>{titleDescription}</Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails> {children} </AccordionDetails>
        </MuiAccordion>
    );
};