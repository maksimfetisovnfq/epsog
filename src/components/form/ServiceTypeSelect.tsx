import {Controller, useFormContext, useWatch} from "react-hook-form";
import {FormControlLabel, Radio, RadioGroup, styled, Tooltip, tooltipClasses} from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import type {TooltipProps} from "@mui/material/Tooltip";
import {useEffect} from "react";


const radioStyles = {
    '&.Mui-checked': {
        color: '#00EB8C',
    },
    '&:not(.Mui-checked)': {
        color: '#00EB8C',
    },
};
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

export const ServiceTypeSelect = () => {
    const {control, setValue} = useFormContext();
    const serviceType = useWatch({control, name: 'service_type'});

    useEffect(() => {
        const produktai = {FCR: false, aFRRd: false, aFRRu: false, mFRRd: false, mFRRu: false};

        if (serviceType === 'up') {
            produktai.aFRRu = true;
            produktai.mFRRu = true;
        } else if (serviceType === 'down') {
            produktai.aFRRd = true;
            produktai.mFRRd = true;
        } else if (serviceType === 'both') {
            produktai.FCR = true;
            produktai.aFRRd = true;
            produktai.aFRRu = true;
            produktai.mFRRd = true;
            produktai.mFRRu = true;
        }

        setValue('produktai', produktai);

    }, [serviceType, setValue]);


    return (
        <Controller
            name="service_type"
            control={control}
            render={({field}) => (
                <RadioGroup {...field} row style={{columnGap: '32px'}}>
                    <div>
                        <FormControlLabel value="up" control={<Radio sx={radioStyles}/>} label="Aukštyn"/>
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
                                <div>
                                    Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią
                                    negu
                                    paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                                </div>
                            </div>}>
                            <InfoOutlineIcon
                                style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                        </HtmlTooltip>
                    </div>
                    <div>
                        <FormControlLabel value="down" control={<Radio sx={radioStyles}/>} label="Žemyn"/>
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
                                <div>
                                    Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią
                                    negu
                                    paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                                </div>
                            </div>
                        }>
                            <InfoOutlineIcon
                                style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                        </HtmlTooltip>
                    </div>
                    <FormControlLabel value="both" control={<Radio sx={radioStyles}/>} label="Į abi puses"/>
                </RadioGroup>
            )}
        />

    )
}