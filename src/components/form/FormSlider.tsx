import {styled} from "@mui/material";
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
        maxWidth: 220,
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
        <div style={{
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '12px',
            width: '400px',
        }}>
            <div style={{display: 'flex'}}>
                <div style={{verticalAlign: 'baseline', marginRight: '4px'}}>
                    {label}
                </div>
                <HtmlTooltip title={
                    <div style={{
                        fontWeight: 400,
                        width: '250px',
                        fontSize: '14px',
                        color: '#000000',
                        backgroundColor: 'white',
                        padding: '8px',
                        borderRadius: '4px',
                        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                        lineHeight: '1.4'
                    }}>
                        {tooltipContent}
                    </div>}>
                    <InfoOutlineIcon style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                </HtmlTooltip>
            </div>

            <Slider
                name={fieldName}
                value={typeof fieldValue === 'number' ? fieldValue : 30}
                onChange={(_, value) => onChange(fieldName, value)}
                step={30}
                marks
                max={90}
                style={{color: '#000000'}} 
            />

            <div style={{
                color: 'black',
                fontSize: '12px',
                fontWeight: 400,
                marginBottom: '12px',
                width: '430px',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <div>&lt; 30 s</div>
                <div>&lt; 5 min</div>
                <div>&lt; 12.5 min</div>
                <div>&gt; 12.5 min</div>
            </div>
        </div>

    )
}