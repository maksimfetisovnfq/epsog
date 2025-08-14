import {TextField, type TextFieldProps} from '@mui/material'
import {useFormContext} from 'react-hook-form'
import {useState, useEffect} from 'react';
import Tooltip from "@mui/material/Tooltip";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

export type FormInputProps = TextFieldProps & {
    name: string
    description?: string
    title?: string
    defaultValue?: string
    tooltip?: string
}


export const FormInput = ({name, label, title, description, defaultValue, tooltip, ...props}: FormInputProps) => {
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
        <div style={{margin: '24px 0px'}}>

            <div style={{display: 'flex', alignItems: 'center', gap: 4, marginBottom: '12px'}}>
                {title && (
                    <div
                        style={{
                            color: 'black',
                            fontSize: '14px',
                            fontFamily: 'Arial',
                            fontWeight: 400,
                        }}>
                        {title}
                    </div>
                )}

                <div>
                    {tooltip && (
                        <Tooltip title={tooltip} sx={{marginLeft: 0}}>
                            <InfoOutlineIcon/>
                        </Tooltip>
                    )}
                </div>
            </div>


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
                {...register(name, {
                    setValueAs: v => {
                        if (typeof v === 'string' && v.trim() !== '' && !isNaN(Number(v))) {
                            return Number(v);
                        }
                        return v;
                    }
                })}
                error={Boolean(errors[name])}
                helperText={errors[name] ? String(errors[name]?.message) : null}
                label={label}
                onFocus={handleFocus}
                onClick={handleClick}
                {...props}
            />

            {description && (
                <div
                    id={`${name}-description`}
                    style={{
                        marginTop: '8px',
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 400,
                        color: '#6F8190',
                    }}>

                    {description}
                </div>
            )}
        </div>
    )
}