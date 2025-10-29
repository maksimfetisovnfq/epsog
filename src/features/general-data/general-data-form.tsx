import { Form, FormInput } from "../../components/form"
import { type GeneralDataSchema, generalDataSchema } from "./general-data-schema"
import { useNavigate, useLocation } from "@tanstack/react-router"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import Radio from "@mui/material/Radio"
import Divider from "@mui/material/Divider"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import InfoOutlineIcon from "@mui/icons-material/InfoOutline"
import { CalculatorType, CalculatorTypeTooltipsTitle, CalculatorTypeTooltipsDescription } from "../../types"
import { Typography } from "@mui/material"
import { useFormContext, useWatch, Controller } from "react-hook-form"
import { FormNavigation } from "@/components/navigation/form-navigation.tsx"
import { Tooltip } from "@/components/tooltip"

const country = ["Kaunas", "Klaipėda", "Marijampolė", "Panevėžys", "Šiauliai", "Tauragė", "Telšiai", "Utena", "Vilnius"]

const GeneralContext = () => {
    const { control } = useFormContext()
    const sector = useWatch({ control, name: "sector" })
    const isConcentrator = sector === "other"

    return (
        <>
            <div style={{ fontSize: "32px", fontWeight: 400 }}>Bendrieji duomenys</div>
            <div style={{ marginTop: "48px" }}>
                <div style={{ height: "18px", marginBottom: "12px" }}>Pasirinkite savo atstovaujamą sektorių:</div>
                <Controller
                    name="sector"
                    control={control}
                    render={({ field }) => (
                        <Select {...field} sx={{ height: "48px", width: { sm: 400 } }} displayEmpty>
                            <MenuItem value="services">Paslaugų</MenuItem>
                            <MenuItem value="energy">Energetikos</MenuItem>
                            <MenuItem value="industries">Pramonės</MenuItem>
                            <MenuItem value="collector">Telkėjas</MenuItem>
                            <MenuItem value="other">Kita</MenuItem>
                        </Select>
                    )}
                />
                {(isConcentrator ) && (
                    <div style={{ marginTop: "24px" }}>
                        <FormInput
                            style={{ width: "400px" }}
                            placeholder="Įveskite telkėjo pavadinimą"
                            name="concentratorName"
                        />
                    </div>
                )}
            </div>
        </>
    )
}

const FormContent = ({ handleBackward }: { handleBackward: () => void }) => {
    const { control } = useFormContext()
    //const sector = useWatch({ control, name: "sector" })

    const radioStyles = { "&.Mui-checked": { color: "#00EB8C" } }

    return (
        <>
            <GeneralContext />
            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormLabel id="technology-group-label" style={{ color: "black", padding: 0 }}>
                Pasirinkite vertinamą technologiją / įrenginį:
            </FormLabel>
            <Controller
                name="calculatorType"
                control={control}
                render={({ field }) => (
                    <RadioGroup
                        {...field}
                        row
                        aria-labelledby="technology-group-label"
                        style={{ columnGap: "32px", display: "flex", flexWrap: "wrap" }}
                    >
                        {Object.values(CalculatorType).map((type) => (
                            <div style={{ display: "flex", alignItems: "center" }} key={type}>
                                <FormControlLabel
                                    value={type}
                                    control={<Radio sx={radioStyles} />}
                                    label={type.toUpperCase()}
                                />
                                <Tooltip
                                    title={
                                        <div style={{ fontSize: "14px", color: "#000000", backgroundColor: "white" }}>
                                            <Typography marginBottom={"8px"} width={211} fontWeight={600}>
                                                {CalculatorTypeTooltipsTitle[type]}
                                            </Typography>
                                            <div
                                                style={{
                                                    fontWeight: 400,
                                                    width: "211px",
                                                }}
                                            >
                                                {CalculatorTypeTooltipsDescription[type]}
                                            </div>
                                        </div>
                                    }
                                >
                                    <InfoOutlineIcon style={{ color: "#6F8190", width: "20px", height: "20px" }} />
                                </Tooltip>
                            </div>
                        ))}
                    </RadioGroup>
                )}
            />

            <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

            <FormLabel id="provider-group-label" style={{ color: "black", padding: 0, display: "flex" }}>
                <div style={{ marginRight: "4px" }}>
                    Prie kokio operatoriaus elektros tinklų esate / planuojate prisijungti?
                </div>

                <Tooltip
                    title={
                        <div style={{ fontSize: "14px", color: "#000000", backgroundColor: "white" }}>
                            <div style={{ fontWeight: 400, width: "211px" }}>
                                Priklausomai nuo įrenginių prijungimo taško, skaičiavimuose vertinamas skirtingas
                                energijos persiuntimo tarifas.
                            </div>
                        </div>
                    }
                >
                    <InfoOutlineIcon style={{ color: "#6F8190", width: "16px", height: "16px" }} />
                </Tooltip>
            </FormLabel>

            <Controller
                name="provider"
                control={control}
                render={({ field }) => (
                    <RadioGroup
                        {...field}
                        row
                        aria-labelledby="provider-group-label"
                        style={{ columnGap: "32px", display: "flex", flexWrap: "wrap" }}
                    >
                        <FormControlLabel
                            value="Litgrid"
                            control={<Radio sx={radioStyles} />}
                            label="Perdavimo tinklas"
                        />
                        <FormControlLabel value="ESO" control={<Radio sx={radioStyles} />} label="Skirstymo tinklas" />
                    </RadioGroup>
                )}
            />

            {useWatch({ control, name: "calculatorType" }) === CalculatorType.P2H && (
                <div>
                    <Divider variant="fullWidth" sx={{ marginTop: "24px", marginBottom: "24px" }} />
                    <div style={{ height: "18px", marginBottom: "12px", display: "flex" }}>
                        Pasirinkite savo apskritį <div style={{ color: "red" }}> * </div>
                    </div>
                    <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                            <Select {...field} style={{ height: "48px", width: "400px" }} displayEmpty>
                                {country.map((c) => (
                                    <MenuItem value={c} key={c}>
                                        {c}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </div>
            )}

            <FormNavigation handleBackward={handleBackward} />
        </>
    )
}

export const GeneralDataForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const navState = location.state?.generalData

    const handleSubmit = (data: GeneralDataSchema) => {
        if (data.calculatorType === CalculatorType.P2H) {
            navigate({ to: "/p2h/technical-parameters", state: { generalData: data } })
        } else if (data.calculatorType === CalculatorType.BEKS) {
            navigate({ to: "/beks/technical-parameters", state: { generalData: data } })
        } else if (data.calculatorType === CalculatorType.P2G) {
            navigate({ to: "/p2g/technical-parameters", state: { generalData: data } })
        } else if (data.calculatorType === CalculatorType.DSR) {
            navigate({ to: "/dsr/technical-parameters", state: { generalData: data } })
        }
    }

    const handleBackward = () => {
        navigate({ to: "/" })
    }

    return (
        <Form
            defaultValues={{
                sector: navState?.sector || "",
                provider: navState?.provider || "Litgrid",
                country: navState?.country || "Kaunas",
                concentratorName: navState?.concentratorName || "",
                calculatorType: navState?.calculatorType || CalculatorType.BEKS,
            }}
            onSubmit={handleSubmit}
            validationSchema={generalDataSchema}
        >
            <FormContent handleBackward={handleBackward} />
        </Form>
    )
}
