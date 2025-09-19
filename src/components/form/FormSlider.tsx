import { Box, styled } from "@mui/material"
import Tooltip, {tooltipClasses, type TooltipProps} from "@mui/material/Tooltip";
import type {ReactNode} from "react";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import Slider from "@mui/material/Slider";

const HtmlTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: theme.typography.pxToRem(12),
    },
}));

type FormSliderProps = {
    label: ReactNode;
    tooltipContent: ReactNode;
    fieldName: string;
    fieldValue: number | number[]
    onChange: (fieldName: string, value: number | number[]) => void;
}

export const FormSlider = ({label, fieldName, fieldValue, tooltipContent, onChange}: FormSliderProps) => {
    return (
        <Box sx={{
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '12px',
            whiteSpace: {sm: "nowrap"},
            width: {sm: "300px"},
        }}>
            <div style={{display: 'flex'}}>
                <div style={{verticalAlign: 'baseline', marginRight: '4px'}}>
                    {typeof label === 'string' ? label.split('*').map((part, index) => (
                        <span key={index}>
                            {part}
                            {index < label.split('*').length - 1 && (
                                <span style={{ color: 'red' }}>*</span>
                            )}
                        </span>
                    )) : label}
                </div>
                <HtmlTooltip title={
                    <Box sx={{
                        fontWeight: 400,
                        width: {sm: "250px"},
                        fontSize: '14px',
                        color: '#000000',
                        backgroundColor: 'white',
                        padding: '8px',
                        borderRadius: '4px',
                        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                        lineHeight: '1.4'
                    }}>
                        {tooltipContent}
                    </Box>}>
                    <InfoOutlineIcon style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                </HtmlTooltip>
            </div>

            <Slider
                name={fieldName}
                value={typeof fieldValue === 'number' ? fieldValue : 30}
                onChange={(_, value) => onChange(fieldName, value)}
                step={30}
                marks={false}
                max={90}
                sx={{
                    color: '#0F2D46',
                    width: {sm: "399px"},
                    '& .MuiSlider-track': {
                        backgroundColor: '#0F2D46',
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#E7EAED',
                    },
                    '& .MuiSlider-thumb': {
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #0F2D46', // Set border color of the circle point
                    },
                }} 
            />

            <Box sx={{
                color: 'black',
                fontSize: '12px',
                fontWeight: 400,
                marginBottom: '12px',
                width: {sm: "430px"},
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <div>&lt; 30 s</div>
                <div>&lt; 5 min</div>
                <div>&lt; 12.5 min</div>
                <div>&gt; 12.5 min</div>
            </Box>
        </Box>

    )
}