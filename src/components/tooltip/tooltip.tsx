import {styled, Tooltip as MuiTooltip, tooltipClasses} from "@mui/material";
import type {TooltipProps} from "@mui/material/Tooltip";

export const Tooltip = styled(({className, ...props}: TooltipProps) => (
    <MuiTooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
    },
}));
