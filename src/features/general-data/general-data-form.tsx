import {Form, FormInput} from "../../components/form";
import {type GeneralDataSchema, generalDataSchema} from "./general-data-schema";
import {useNavigate} from "@tanstack/react-router";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import {GlobalStyles} from '@mui/material';
import {CalculatorType} from "../../types";
import {useCalculatorType} from "../../context/CalculatorTypeContext.tsx";
import Divider from '@mui/material/Divider';
import {Button} from "../../ui/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const GeneralDataForm = () => {
    const navigate = useNavigate();
    const {calculatorType, setCalculatorType} = useCalculatorType()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCalculatorType(event.target.value as CalculatorType);
    };

    const handleSecondRadioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    };

    const handleSubmit = (data: GeneralDataSchema) => {
        if (calculatorType === CalculatorType.P2H) {
            navigate({
                to: "/technical-parameters-p2h",
                state: {generalData: data},
            });
            return
        }

        if (calculatorType === CalculatorType.BEKS) {
            navigate({
                to: "/technical-parameters-beks",
                state: {generalData: data},
            });
            return;
        }

        if (calculatorType === CalculatorType.P2G) {
            navigate({
                to: "/technical-parameters-p2g",
                state: {generalData: data},
            });
            return;
        }

        if (calculatorType === CalculatorType.DSR) {
            navigate({
                to: "/technical-parameters-dsr",
                state: {generalData: data},
            });
            return;
        }
    }

    const controlProps = (item: string) => ({
        checked: calculatorType === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: {'aria-label': item},
    });

    const radioStyles = {
        '&.Mui-checked': {
            color: '#00EB8C',
        },
        '&:not(.Mui-checked)': {
            color: '#00EB8C',
        },
    };

    return (
        <>
            <GlobalStyles
                styles={{
                    '.MuiContainer-root': {
                        padding: '0px !important',
                    },
                }}
            />
            <Form onSubmit={handleSubmit} validationSchema={generalDataSchema} defaultValues={{
                network: "",
            }}>

                <div style={{
                    fontSize: '32px',
                    fontFamily: 'Arial',
                }}>
                    Bendrieji duomenys
                </div>

                <div style={{marginTop: '48px',}}>
                    <div style={{height: '0'}}>
                        Pasirinkite savo atstovaujamą sektorių
                    </div>
                    <FormInput name="network"/>
                </div>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>
                
                <FormLabel id="demo-radio-buttons-group-label" style={{color: "black", padding: 0,}}>
                    Pasirinkite vertinamą technologiją / įrenginį
                </FormLabel>

                <RadioGroup
                    defaultValue={CalculatorType.BEKS}
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handleChange}
                    style={{ columnGap: '32px' }}
                >

                    {Object.values(CalculatorType).map((type) => (
                        <FormControlLabel
                            key={type}
                            value={type}
                            control={<Radio {...controlProps(type)} sx={radioStyles}/>}
                            label={type.toUpperCase()}
                        />
                    ))}
                </RadioGroup>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormLabel id="demo-radio-buttons-group-label" style={{color: "black", padding: 0,}}>
                    Prie kokio operatoriaus elektros tinklų esate / planuojate prisijungti?
                </FormLabel>
                
                <RadioGroup
                    defaultValue={CalculatorType.BEKS}
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handleSecondRadioGroupChange}
                    style={{ columnGap: '32px' }}
                >
                    <FormControlLabel value="first" control={<Radio sx={radioStyles}/>} label="Perdavimo tinklas" />
                    <FormControlLabel value="second" control={<Radio sx={radioStyles}/>} label="Skirstymo tinklas" />
                </RadioGroup>

                <Divider variant="fullWidth" sx={{marginTop: '379px'}}/>
                
                <div style={{marginTop: '24px', display: 'flex', justifyContent: 'space-between'}}>
                    <Button type="submit" startIcon={<ArrowBackIcon/>}>
                        Atgal
                    </Button>
                    <Button  variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                        Toliau
                    </Button>    
                </div>
                
            </Form>
        </>
    )
}