import { z } from "zod"

export const numberField = (errorMessage: string = "Šis laukas yra privalomas") =>
    z.preprocess(
        (val) => {
            if (val === "" || val === null || val === undefined) return undefined
            return val
        },
        z.number({
            required_error: errorMessage,
            invalid_type_error: errorMessage,
        })
    )

export const formatNumber = (num: number): string => {
    return num.toLocaleString("en-US")
}

export const errorMessages = {
    required: "Šis laukas yra privalomas",
    greaterThan: (value: number) => `Reikšmė turi būti didesnė už ${formatNumber(value)}`,
    greaterThanOrEqual: (value: number) => `Reikšmė turi būti didesnė arba lygi ${formatNumber(value)}`,
    lessThan: (value: number) => `Reikšmė turi būti mažesnė už ${formatNumber(value)}`,
    lessThanOrEqual: (value: number) => `Reikšmė turi būti mažesnė arba lygi ${formatNumber(value)}`,
    between: (min: number, max: number) => `Reikšmė turi būti nuo ${formatNumber(min)} iki ${formatNumber(max)}`,
    integer: "Reikšmė turi būti sveikasis skaičius",
}
