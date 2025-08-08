import {TextField, type TextFieldProps} from '@mui/material'
import {useFormContext} from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';

export type FormInputProps = TextFieldProps & {
    name: string
    description?: string
    title?: string
    defaultValue?: string
}


export const FormInput = ({name, label, title, description, defaultValue, ...props }: FormInputProps) => {
    const {
        register,
        formState: {errors},
        setValue,
        watch
    } = useFormContext()

    const [hasUserInteracted, setHasUserInteracted] = useState(false);
    const [isDefaultValueSet, setIsDefaultValueSet] = useState(false);
    const currentValue = watch(name);

    useEffect(() => {
        if (defaultValue && !currentValue && !hasUserInteracted) {
            setValue(name, defaultValue);
            setIsDefaultValueSet(true);
        }
    }, [defaultValue, currentValue, hasUserInteracted, setValue, name]);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!hasUserInteracted && isDefaultValueSet && defaultValue) {
            setValue(name, '');
            setHasUserInteracted(true);
            setIsDefaultValueSet(false);
        }
        
        if (props.onFocus) {
            props.onFocus(event);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        if (!hasUserInteracted && isDefaultValueSet && defaultValue) {
            setValue(name, '');
            setHasUserInteracted(true);
            setIsDefaultValueSet(false);
        }
        
        if (props.onClick) {
            props.onClick(event);
        }
    };

    return (
        <div style={{ margin: '24px 0px'}}>
            {title && (
                <InputLabel
                    shrink htmlFor="bootstrap-input"
                    sx={{
                        color: 'black',
                        fontSize: '14px',
                        fontFamily: 'Arial',
                        fontWeight: 400,
                    }}>
                    {title}
                </InputLabel>
            )}

            <TextField 
                sx={{
                    display: 'block',
                    '& .MuiFormControl-root-MuiTextField-root': {},
                    '& .MuiInputBase-input': {
                        mb: 2,
                        color: '#6F8190',
                        borderColor: '#CFD5DA',
                        fontSize: '16px',
                        fontFamily: 'Arial',
                        fontWeight: 400,
                        lineHeight: '20px',
                        padding: '14px 16px',
                        margin: 0,
                    },
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                        width: '400px',
                        height: '48px',
                    },
                }}
                {...register(name)}
                error={Boolean(errors[name])}
                helperText={errors[name] ? String(errors[name]?.message) : null}
                label={label}
                onFocus={handleFocus}
                onClick={handleClick}
                {...props}
            />

            {description && (
                <FormHelperText
                    id={`${name}-description`}
                    sx={{
                        marginTop: '8px',
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 400,
                    }}>

                    {description}
                </FormHelperText>
            )}
        </div>
    )
}