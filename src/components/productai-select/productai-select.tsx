import {Controller, useFormContext} from "react-hook-form";
import {FormControlLabel, Radio, RadioGroup, Tooltip} from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import {Productai} from "./types";


const radioStyles = {
    '&.Mui-checked': {
        color: '#00EB8C',
    },
    '&:not(.Mui-checked)': {
        color: '#00EB8C',
    },
};


const tooltipStyles = {
    fontWeight: 400,
    width: '250px',
    fontSize: '14px',
    color: '#000000',
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '4px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    lineHeight: '1.4'
}

export const ProductaiSelect = () => {
    const {control} = useFormContext();
    
    return (
        <Controller
            name="service_type"
            control={control}
            render={({field}) => (
                <RadioGroup {...field} row style={{columnGap: '32px'}}>
                    <div>
                        <FormControlLabel value={Productai.UP} control={<Radio sx={radioStyles}/>} label="Aukštyn"/>
                        <Tooltip title={
                            <div style={tooltipStyles}>
                                <div>
                                    Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią
                                    negu
                                    paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                                </div>
                            </div>}>
                            <InfoOutlineIcon
                                style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                        </Tooltip>
                    </div>
                    <div>
                        <FormControlLabel value={Productai.DOWN} control={<Radio sx={radioStyles}/>} label="Žemyn"/>
                        <Tooltip title={
                            <div style={tooltipStyles}>
                                <div>
                                    Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią
                                    negu
                                    paslaugos reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                                </div>
                            </div>
                        }>
                            <InfoOutlineIcon
                                style={{color: '#6F8190', width: '16px', height: '16px'}}/>
                        </Tooltip>
                    </div>
                    <FormControlLabel value={Productai.BOTH} control={<Radio sx={radioStyles}/>} label="Į abi puses"/>
                </RadioGroup>
            )}
        />

    )
}