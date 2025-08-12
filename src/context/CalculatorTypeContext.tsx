import {createContext, type PropsWithChildren, useContext, useState} from 'react'
import {CalculatorType} from "../types";

interface AppContextType {
    calculatorType: CalculatorType;
    setCalculatorType: (type: CalculatorType) => void;
}

const CalculatorTypeContext = createContext<AppContextType>({
    calculatorType: CalculatorType.BEKS,
    setCalculatorType: () => {}
})

export const CalculatorTypeProvider = ({children}: PropsWithChildren) => {
    const [calculatorType, setCalculatorType] = useState(CalculatorType.BEKS)

    return (
        <CalculatorTypeContext value={{
            calculatorType,
            setCalculatorType
        }}>
            {children}
        </CalculatorTypeContext>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCalculatorType = () => useContext(CalculatorTypeContext)
