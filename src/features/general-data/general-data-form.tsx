import { Form, FormInput } from "../../components/form";
import { type GeneralDataSchema, generalDataSchema } from "./general-data-schema";
import { useNavigate, useLocation } from "@tanstack/react-router";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import { Button } from "../../ui/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip, { tooltipClasses, type TooltipProps } from '@mui/material/Tooltip';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import { CalculatorType, CalculatorTypeTooltipsTitle, CalculatorTypeTooltipsDescription } from "../../types";
import { styled, Typography } from "@mui/material";
import { useFormContext, useWatch, Controller } from "react-hook-form";

const GeneralContext = () => {
    const { control } = useFormContext();
    const sector = useWatch({ control, name: 'sector' });
    const isConcentrator = sector === 'concentrator';

    return (
        <>
            <div style={{ fontSize: '32px', fontWeight: 400 }}>
                Bendrieji duomenys
            </div>
            <div style={{ marginTop: '48px' }}>
                <div style={{ height: '18px', marginBottom: '12px' }}>
                    Pasirinkite savo atstovaujamą sektorių
                </div>
                <Controller
                    name="sector"
                    control={control}
                    render={({ field }) => (
                        <Select {...field} style={{ height: '48px', width: '400px' }} displayEmpty>
                            <MenuItem value=""><em>Sektorius</em></MenuItem>
                            <MenuItem value="concentrator">Esu telkėjas</MenuItem>
                        </Select>
                    )}
                />
                {isConcentrator && (
                    <div style={{ marginTop: '24px' }}>
                        <FormInput style={{ width: '400px' }} placeholder="Įveskite telkėjo pavadinimą" name="concentratorName" />
                    </div>
                )}
            </div>
        </>
    );
};

const FormContent = ({ handleBackward }: { handleBackward: () => void }) => {
    const { control } = useFormContext();
    const sector = useWatch({ control, name: 'sector' });

    const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#FAFAFA',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }));

    const radioStyles = { '&.Mui-checked': { color: '#00EB8C' } };

    return (
        <>
            <GeneralContext />
            <Divider style={{ marginTop: '24px', marginBottom: '24px' }} />

            <FormLabel id="technology-group-label" style={{ color: "black", padding: 0 }}>
                Pasirinkite vertinamą technologiją / įrenginį
            </FormLabel>
            <Controller
                name="calculatorType"
                control={control}
                render={({ field }) => (
                    <RadioGroup {...field} row aria-labelledby="technology-group-label" style={{ columnGap: '32px' }}>
                        {Object.values(CalculatorType).map((type) => (
                            <div style={{ display: 'flex', alignItems: 'center' }} key={type}>
                                <FormControlLabel value={type} control={<Radio sx={radioStyles} />} label={type.toUpperCase()} />
                                <HtmlTooltip title={
                                    <div style={{ fontSize: '14px', color: '#000000', backgroundColor: 'white' }}>
                                        <Typography marginBottom={'8px'} width={211} fontWeight={600}>{CalculatorTypeTooltipsTitle[type]}</Typography>
                                        <div style={{ fontWeight: 400, width: '211px' }}>{CalculatorTypeTooltipsDescription[type]}</div>
                                    </div>
                                }>
                                    <InfoOutlineIcon style={{ color: '#6F8190', width: '20px', height: '20px' }} />
                                </HtmlTooltip>
                            </div>
                        ))}
                    </RadioGroup>
                )}
            />

            <Divider style={{ marginTop: '24px', marginBottom: '24px' }} />

            <FormLabel id="provider-group-label" style={{ color: "black", padding: 0, display: 'flex' }}>
                <div style={{ marginRight: '4px' }}>
                    Prie kokio operatoriaus elektros tinklų esate / planuojate prisijungti?
                </div>
                <HtmlTooltip title={
                    <div style={{ fontSize: '14px', color: '#000000', backgroundColor: 'white' }}>
                        <div style={{ fontWeight: 400, width: '211px' }}>
                            Priklausomai nuo įrenginių prijungimo taško, skaičiavimuose vertinamas skirtingas energijos persiuntimo tarifas.
                        </div>
                    </div>
                }>
                    <InfoOutlineIcon style={{ color: '#6F8190', width: '16px', height: '16px' }} />
                </HtmlTooltip>
            </FormLabel>
            <Controller
                name="provider"
                control={control}
                render={({ field }) => (
                    <RadioGroup {...field} row aria-labelledby="provider-group-label" style={{ columnGap: '32px' }}>
                        <FormControlLabel value="Litgrid" control={<Radio sx={radioStyles} />} label="Perdavimo tinklas" />
                        <FormControlLabel value="ESO" control={<Radio sx={radioStyles} />} label="Skirstymo tinklas" />
                    </RadioGroup>
                )}
            />

            {sector === 'concentrator' && (
                <div>
                    <Divider variant="fullWidth" sx={{ marginTop: '24px', marginBottom: '24px' }} />
                    <div style={{ height: '18px', marginBottom: '12px' }}>Pasirinkite savo apskritį *</div>
                    <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                            <Select {...field} style={{ height: '48px', width: '400px' }} displayEmpty>
                                <MenuItem value="Africa">Africa</MenuItem>
                                <MenuItem value="India">India</MenuItem>
                            </Select>
                        )}
                    />
                </div>
            )}

            {sector === 'concentrator' ? (
                <Divider variant="fullWidth" sx={{ marginTop: '64px' }} />
            ) : (
                <Divider variant="fullWidth" sx={{ marginTop: '379px' }} />
            )}

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleBackward}>
                    Atgal
                </Button>
                <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon />}>
                    Toliau
                </Button>
            </div>
        </>
    );
}

// The main form component is now much cleaner. It handles logic and state, but not the UI fields.
export const GeneralDataForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navState = location.state?.generalData;

    const handleSubmit = (data: GeneralDataSchema) => {
        if (data.calculatorType === CalculatorType.P2H) {
            navigate({ to: "/technical-parameters-p2h", state: { generalData: data } });
        } else if (data.calculatorType === CalculatorType.BEKS) { 
            navigate({ to: "/technical-parameters-beks", state: { generalData: data } });
        } else if (data.calculatorType === CalculatorType.P2G) {
            navigate({ to: "/technical-parameters-p2g", state: { generalData: data } });
        } else if (data.calculatorType === CalculatorType.DSR) {
            navigate({ to: "/technical-parameters-dsr", state: { generalData: data } });
        }
    };

    const handleBackward = () => {
        navigate({ to: "/" });
    };

    return (
        <div style={{ fontFamily: 'Arial', width: '760px' }}>
            <Form
                defaultValues={{
                    sector: navState?.sector || "",
                    provider: navState?.provider || "Litgrid",
                    country: navState?.country || "",
                    concentratorName: navState?.concentratorName || "",
                    calculatorType: navState?.calculatorType || CalculatorType.BEKS,
                }}
                onSubmit={handleSubmit}
                validationSchema={generalDataSchema}
            >
                {/* CHANGED: Render the new component that contains all the form fields */}
                <FormContent handleBackward={handleBackward} />
            </Form>
        </div>
    );
};