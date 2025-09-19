import { useFormContext, useWatch } from "react-hook-form"
import { FormSlider } from "@/components/form"

type ReactionTimeSliderProps = {
    field: string
    label: string
}

export const ReactionTimeSlider = ({ field, label }: ReactionTimeSliderProps) => {
    const { setValue, control } = useFormContext()
    const fieldValue = useWatch({ control, name: field })

    const handleReactionTimeChange = (fieldName: string, value: number | number[]) => {
        const sliderValue = Array.isArray(value) ? value[0] : value
        setValue(fieldName, sliderValue, { shouldValidate: true })
    }

    return (
        <FormSlider
            label={label}
            tooltipContent={
                <>
                    <ul style={{ paddingLeft: "20px", margin: "0 0 8px 0"}}>
                        <li>FCR paslaugai maksimali galia turi būti pasiekta neilgiau negu 30 s</li>
                        <li>aFRR – 5 min</li>
                        <li>mFRR – 12,5 min</li>
                    </ul>
                    <div>
                        Jeigu nurodomas didesnis laikas per kurį įrenginys pasiekia maksimalią galią negu paslaugos
                        reikalavimas, tuomet vertinama kad tos paslaugos įrenginys neteiks.
                    </div>
                </>
            }
            fieldName={field}
            fieldValue={fieldValue}
            onChange={handleReactionTimeChange}
        />
    )
}
