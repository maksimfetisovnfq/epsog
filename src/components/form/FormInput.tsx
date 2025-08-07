import {TextField, type TextFieldProps} from '@mui/material'
import {useFormContext} from 'react-hook-form'

export type FormInputProps = TextFieldProps & {
    name: string
}

// TODO styles
export const FormInput = ({name, label, ...props}: FormInputProps) => {
    const {
        register,
        formState: {errors},
    } = useFormContext()

    return (
        <TextField
            sx={{
                mb: 2,
            }}
            {...register(name)}
            error={Boolean(errors[name])}
            helperText={errors[name] ? String(errors[name]?.message) : null}
            label={label}
            {...props}
        />
    )
}