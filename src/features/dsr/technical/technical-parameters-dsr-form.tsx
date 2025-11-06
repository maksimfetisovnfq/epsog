import { Form, ServiceTypeSelect, FormInput } from "@/components/form"
import {
    getDefaultTechnicalParametersDsr,
    type TechnicalDsrParametersSchema,
    getTechnicalParametersDsrSchema,
} from "./technical-parameters-dsr-schema.ts"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { Stack, Checkbox, FormControlLabel, Box, Typography } from "@mui/material"
import { FormNavigation } from "@/components/navigation/form-navigation"
import Divider from "@mui/material/Divider"
import { ReactionTimeSlider } from "@/components/reaction-time-slider"
import { HourlyTable } from "@/ui/tables/HourlyTable/hourlyTable"
import { Title } from "@/ui/title"
import FormLabel from "@mui/material/FormLabel"
import { useState } from "react"
import { useFormContext } from "react-hook-form"

interface FormContentProps {
    useHourlyPower: boolean
    setUseHourlyPower: (value: boolean) => void
    useMinMaxPower: boolean
    setUseMinMaxPower: (value: boolean) => void
    handleBackward: () => void
}

const FormContent = ({ useHourlyPower, setUseHourlyPower, useMinMaxPower, setUseMinMaxPower, handleBackward }: FormContentProps) => {
    const { watch } = useFormContext()
    const qMin = watch("Q_min")
    const qMax = watch("Q_max")

    return (
        <>
            <Stack spacing={2}>
                <Title style={{ fontSize: "32px", marginBottom: "48px", fontWeight: 400 }}>Techniniai parametrai</Title>
                <FormInput
                    name="Q_avg"
                    title="Vidutinė įrenginio galia (MW)"
                    type="number"
                    description="TODO"
                    placeholder="TODO"
                    tooltip="Nurodykite kokia jūsų įrenginio vidutinė galia naudojama prie įprastinių veiklos sąlygų."
                    isRequired
                />
                <Divider />
                <FormInput
                    name="Q_min"
                    title="Minimali įrenginio galia (MW)"
                    type="number"
                    description="TODO"
                    placeholder="TODO"
                    tooltip="Nurodykite kokia jūsų įrenginio minimali galia. Taip įvertinsime potencialą sumažinti energijos vartojimą konkrečiu laikotarpiu."
                    isRequired
                />
                <Divider />
                <FormInput
                    name="Q_max"
                    title="Maksimali įrenginio galia (MW)"
                    type="number"
                    description="TODO"
                    placeholder="TODO"
                    tooltip="Nurodykite kokia jūsų įrenginio maksimali galia. Taip įvertinsime potencialą padidinti energijos vartojimą konkrečiu laikotarpiu."
                    isRequired
                />
                <Divider />
                <FormInput
                    name="T_shift"
                    title="Laiko poslinkis (15 min. intervalais) energijos atstatymui"
                    type="number"
                    description="TODO"
                    placeholder="TODO"
                    tooltip="Jeigu planuote dalyvauti balansavimo rinkoje, jūsų įrenginio pajėgumas didinti ar mažinti energijos vartojimą bus panaudotas konkrečiam 15 min laikotarpiui. Nurodykite, po kiek laiko (matuojant valandos ketvirčiais) norite atstatyti savo įrenginio veikimą į įprastą būseną. Jeigu nežinote, tiesiog įrašykite 1, tai reikš, kad artimiausiu 15 min laikotarpiu įrenginio veikimas būtų gražintas į normalią būsena."
                    isRequired
                />

                <Divider />

                <div>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: "16px" }}>
                        <h6 style={{ margin: 0, fontSize: "16px", fontWeight: 400 }}>
                            Pasirenkami valandiniai galios profiliai
                        </h6>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={useHourlyPower}
                                    onChange={(e) => setUseHourlyPower(e.target.checked)}
                                    sx={{
                                        color: "#00EB8C",
                                        "&.Mui-checked": { color: "#00EB8C" },
                                    }}
                                />
                            }
                            label="Naudoti valandinius vidutinės galios profilius"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={useMinMaxPower}
                                    onChange={(e) => setUseMinMaxPower(e.target.checked)}
                                    sx={{
                                        color: "#00EB8C",
                                        "&.Mui-checked": { color: "#00EB8C" },
                                    }}
                                />
                            }
                            label="Naudoti valandinius min/max galios profilius"
                        />
                    </Box>

                    {useHourlyPower && (
                        <Box sx={{ marginBottom: "24px" }}>
                            <Typography variant="subtitle2" sx={{ marginBottom: "8px", fontWeight: 500 }}>
                                Hourly Power
                            </Typography>
                            <HourlyTable namePrefix="hourly_power" minValue={qMin} maxValue={qMax} />
                        </Box>
                    )}

                    {useMinMaxPower && (
                        <>
                            <Box sx={{ marginBottom: "24px" }}>
                                <Typography variant="subtitle2" sx={{ marginBottom: "8px", fontWeight: 500 }}>
                                    Min Hourly Power
                                </Typography>
                                <HourlyTable namePrefix="min_hourly_power" minValue={qMin} maxValue={qMax} />
                            </Box>
                            <Box sx={{ marginBottom: "24px" }}>
                                <Typography variant="subtitle2" sx={{ marginBottom: "8px", fontWeight: 500 }}>
                                    Max Hourly Power
                                </Typography>
                                <HourlyTable namePrefix="max_hourly_power" minValue={qMin} maxValue={qMax} />
                            </Box>
                        </>
                    )}
                </div>

                <Divider style={{ marginTop: "24px", marginBottom: "24px" }} />

                <FormLabel style={{ color: "black", padding: 0, marginBottom: "12px", fontSize: "14px" }}>
                    {"Pasirinkite galimą teikti reguliavimo paslaugą".split("*").map((part, index) => (
                        <span key={index}>
                            {part}
                            {index < "Pasirinkite galimą teikti reguliavimo paslaugą".split("*").length - 1 && (
                                <span style={{ color: "red" }}>*</span>
                            )}
                        </span>
                    ))}
                </FormLabel>

                <ServiceTypeSelect />

                <ReactionTimeSlider
                    field={"reaction_time"}
                    label={"Reakcijos laikas (s), per kurį įrenginys pasiekia nurodytą (minimalią/maksimalią) galią"}
                />
            </Stack>

            <FormNavigation handleBackward={handleBackward} />
        </>
    )
}

export const TechnicalParametersDsrForm = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [useHourlyPower, setUseHourlyPower] = useState(true)
    const [useMinMaxPower, setUseMinMaxPower] = useState(true)

    const handleSubmit = (data: TechnicalDsrParametersSchema) => {
        navigate({
            to: "/dsr/economic-parameters",
            state: {
                generalData: location.state.generalData,
                technicalParameters: { dsr: data },
            },
        })
    }

    const handleBackward = () => {
        navigate({ to: "/general-data" })
    }

    return (
        <Form
            onSubmit={handleSubmit}
            // @ts-expect-error Zod schema inference
            validationSchema={getTechnicalParametersDsrSchema(useHourlyPower, useMinMaxPower)}
            defaultValues={
                location.state?.technicalParameters?.dsr ||
                getDefaultTechnicalParametersDsr(useHourlyPower, useMinMaxPower)
            }
        >
            <FormContent
                useHourlyPower={useHourlyPower}
                setUseHourlyPower={setUseHourlyPower}
                useMinMaxPower={useMinMaxPower}
                setUseMinMaxPower={setUseMinMaxPower}
                handleBackward={handleBackward}
            />
        </Form>
    )
}
