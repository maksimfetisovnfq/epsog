import { type ComponentProps, type ForwardedRef, forwardRef, type ReactNode, useImperativeHandle } from 'react'
import { type DefaultValues, FormProvider, type SubmitHandler, useForm, type UseFormSetError } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodType } from 'zod'

export type FormData = Record<string, string | null | number | string[]>

export type BaseFormProps<T extends FormData> = {
    defaultValues: DefaultValues<T>
    validationSchema: ZodType<T>
    onSubmit: SubmitHandler<T>
    onBackward?: () => void
} & Omit<ComponentProps<'form'>, 'onSubmit' | 'ref'>

export type SetErrorRef<T extends FormData> = {
    setError: UseFormSetError<T>;
}

const InnerForm = <T extends FormData>(
    { defaultValues, validationSchema, onSubmit, onBackward, children, ...props }: BaseFormProps<T>,
    ref: ForwardedRef<SetErrorRef<T>>
) => {
    const methods = useForm({
        defaultValues,
        resolver: zodResolver(validationSchema),
    })

    useImperativeHandle(
        ref,
        () => ({
            setError: methods.setError,
        }),
        [methods]
    )

    const handleChange = () => {
        if (!methods.formState.errors.root) return
        methods.clearErrors('root')
    }

    return (
        <FormProvider {...methods}>
            <form {...props} noValidate onChange={handleChange} onSubmit={methods.handleSubmit(onSubmit)}>
                {onBackward && (
                    <button type="button" onClick={onBackward} style={{ marginRight: 8 }}>
                        Back
                    </button>
                )}
                {children}
            </form>
        </FormProvider>
    )
}

export default forwardRef(InnerForm) as <T extends FormData>(
    props: BaseFormProps<T> & {
        ref?: ForwardedRef<SetErrorRef<T>>
    }
) => ReactNode