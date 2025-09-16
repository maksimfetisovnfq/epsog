import { type ComponentProps, type ForwardedRef, forwardRef, type ReactNode, useImperativeHandle } from "react"
import {
    type DefaultValues,
    type FieldValues,
    FormProvider,
    type SubmitHandler,
    useForm,
    type UseFormSetError,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ZodType } from "zod"

export type FormValues = FieldValues

export type BaseFormProps<T extends FormValues> = {
    defaultValues: DefaultValues<T>
    validationSchema: ZodType<T>
    onSubmit: SubmitHandler<T>
    onBackward?: () => void
} & Omit<ComponentProps<"form">, "onSubmit" | "ref">

export type SetErrorRef<T extends FormValues> = {
    setError: UseFormSetError<T>
}

const InnerForm = <T extends FormValues>(
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
        methods.clearErrors("root")
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

export default forwardRef(InnerForm) as <T extends FormValues>(
    props: BaseFormProps<T> & {
        ref?: ForwardedRef<SetErrorRef<T>>
    }
) => ReactNode