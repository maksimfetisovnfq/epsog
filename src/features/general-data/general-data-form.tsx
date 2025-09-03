import {Form, FormInput} from "../../components/form";
import {type GeneralDataSchema, generalDataSchema} from "./general-data-schema";
import {useNavigate, useLocation} from "@tanstack/react-router";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import {Button} from "../../ui/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {useState, useEffect} from "react";
import Tooltip from '@mui/material/Tooltip';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import {CalculatorType, CalculatorTypeTooltips} from "../../types";
import {useCalculatorType} from "../../context/CalculatorTypeContext.tsx";

export const GeneralDataForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {calculatorType, setCalculatorType} = useCalculatorType();
    const navState = location.state?.generalData;
    const initialIsConcentrator = !!(navState?.sector && navState?.sector !== '' && navState?.sector !== 'Litgrid' && navState?.sector !== 'ESO');
    const [isConcentrator, setIsConcentrator] = useState<boolean>(initialIsConcentrator);
    const [sector, setSector] = useState<string>(navState?.sector || "");
    const [provider, setProvider] = useState<string>(navState?.provider || "Litgrid");

    useEffect(() => {
        if (navState) {
            setSector(navState.sector || "");
            setProvider(navState.provider || "Litgrid");
            setIsConcentrator(!!(navState.sector && navState.sector !== '' && navState.sector !== 'Litgrid' && navState.sector !== 'ESO'));
        }
    }, [navState]);

    const handleSectorSelect = (e: React.ChangeEvent<{ value: unknown }>) => {
        const value = (e.target as HTMLInputElement).value as string;
        if (value === 'concentrator') {
            setIsConcentrator(true);
            setSector(navState?.sector && navState?.sector !== 'Litgrid' && navState?.sector !== 'ESO' ? navState.sector : "");
        } else {
            setIsConcentrator(false);
            setSector(value);
        }
    };

    const handleSectorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSector(e.target.value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCalculatorType(event.target.value as CalculatorType);
    };

    const handleProviderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProvider(event.target.value);
    };

    const handleSubmit = (data: GeneralDataSchema) => {
        if (calculatorType === CalculatorType.P2H) {
            navigate({
                to: "/technical-parameters-p2h",
                state: {generalData: data},
            });
            return;
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
    };

    const handleBackward = () => {
        navigate({to: "/"});
    };

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
        <div style={{fontFamily: 'Arial', width: '760px'}}>
            <Form
                defaultValues={{
                    sector: sector || "",
                    provider: provider || ""
                }}
                onSubmit={data => handleSubmit({...data, provider, sector})}
                validationSchema={generalDataSchema}>

                <div style={{
                    fontSize: '32px',
                    fontWeight: 400,
                }}>
                    Bendrieji duomenys
                </div>

                <div style={{marginTop: '48px',}}>
                    <div style={{height: '18px', marginBottom: '12px'}}>
                        Pasirinkite savo atstovaujamą sektorių
                    </div>

                    <Select
                        style={{height: '48px', width: '400px'}}
                        value={isConcentrator ? 'concentrator' : sector}
                        onChange={handleSectorSelect}
                        displayEmpty
                        inputProps={{'aria-label': 'Without label'}}
                    >
                        <MenuItem value="" key="sector">Sektorius</MenuItem>
                        <MenuItem value="concentrator" key="concentrator">Esu telkėjas</MenuItem>
                    </Select>

                    {isConcentrator && (
                        <FormInput
                            style={{width: '400px'}}
                            placeholder="Sektorius"
                            name="sector"
                            value={sector}
                            onChange={handleSectorInput}
                        />
                    )}
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
                    style={{columnGap: '32px'}}
                >

                    {Object.values(CalculatorType).map((type) => (
                        <div style={{display: 'flex', alignItems: 'center'}} key={type}>
                            <div>
                                <FormControlLabel
                                    value={type}
                                    control={<Radio {...controlProps(type)} sx={radioStyles}/>}
                                    label={type.toUpperCase()}
                                    sx={{verticalAlign: 'baseline', marginRight: '4px'}}
                                />
                            </div>

                            <div>
                                <Tooltip title={CalculatorTypeTooltips[type]}>
                                    <InfoOutlineIcon style={{color: '#6F8190'}}/>
                                </Tooltip>
                            </div>
                        </div>
                    ))}
                </RadioGroup>

                <Divider style={{marginTop: '24px', marginBottom: '24px'}}/>

                <FormLabel
                    id="demo-radio-buttons-group-label"
                    style={{color: "black", padding: 0, display: 'flex'}}>

                    <div style={{marginRight: '4px'}}>
                        Prie kokio operatoriaus elektros tinklų esate / planuojate prisijungti?
                    </div>

                    <Tooltip title="
                    Priklausomai nuo įrenginių prijungimo taško,
                    skaičiavimuose vertinamas skirtingas energijos persiuntimo tarifas.">
                        <InfoOutlineIcon/>
                    </Tooltip>
                </FormLabel>


                <RadioGroup
                    value={provider}
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="provider"
                    onChange={handleProviderChange}
                    style={{columnGap: '32px'}}
                >
                    <FormControlLabel value="Litgrid" control={<Radio sx={radioStyles}/>} label="Perdavimo tinklas"/>
                    <FormControlLabel value="ESO" control={<Radio sx={radioStyles}/>} label="Skirstymo tinklas"/>
                </RadioGroup>


                {isConcentrator &&  (
                    <div>
                        <Divider variant="fullWidth" sx={{marginTop: '24px', marginBottom: '24px'}}/>

                        <div style={{height: '18px', marginBottom: '12px'}}>
                            Pasirinkite savo apskritį *
                        </div>

                        <Select
                            style={{height: '48px', width: '400px'}}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                        </Select>

                    </div>)}

                {isConcentrator ? (
                    <Divider variant="fullWidth" sx={{marginTop: '64px'}}/>
                ) : (
                    <Divider variant="fullWidth" sx={{marginTop: '379px'}}/>
                )}

                <div style={{marginTop: '24px', display: 'flex', justifyContent: 'space-between'}}>
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIcon/>}
                        onClick={handleBackward}
                    >
                        Atgal
                    </Button>
                    <Button
                        variant="contained"
                        type="submit"
                        endIcon={<ArrowForwardIcon/>}
                    >
                        Toliau
                    </Button>
                </div>

            </Form>
        </div>
    )
}