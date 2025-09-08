import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { CalculatorTypeProvider } from './context/CalculatorTypeContext'
import { routeTree } from './routeTree.gen'
import type {GeneralDataSchema} from "./features/general-data/general-data-schema";
import type {TechnicalP2hParametersSchema} from "./features/technical-parameters-p2h/technical-parameters-schema.ts";
import type {TechnicalP2gParametersSchema} from "./features/technical-parameters-p2g/technical-parameters-p2g-schema.ts";
import type {TechnicalBeksParametersSchema} from "./features/technical-parameters-beks/technical-parameters-schema.ts";
import type {TechnicalDsrParametersSchema} from "./features/technical-parameters-dsr/technical-parameters-schema.ts";
import type {EconomicalP2hParametersSchema} from "./features/economical-parameters-p2h/economical-parameters-p2h-schema.ts";
import type {EconomicalP2gParametersSchema} from "./features/economical-parameters-p2g/economical-parameters-p2g-schema.ts";
import type {EconomicalDsrParametersSchema} from "./features/economical-parameters-dsr/economical-parameters-schema.ts";
import type {EconomicalBeksParametersSchema} from "./features/economical-parameters-beks/economical-parameters-schema.ts";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createRouter({ routeTree })
const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
    
    interface HistoryState {
        generalData?: GeneralDataSchema
        technicalParameters?: {
            p2h?: TechnicalP2hParametersSchema
            beks?: TechnicalBeksParametersSchema
            p2g?: TechnicalP2gParametersSchema
            dsr?: TechnicalDsrParametersSchema
        }
        economicParameters?: {
            p2h?: EconomicalP2hParametersSchema
            beks?: EconomicalBeksParametersSchema 
            p2g?: EconomicalP2gParametersSchema
            dsr?: EconomicalDsrParametersSchema
        }
    }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)

    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <CalculatorTypeProvider>
                    <RouterProvider router={router} />
                </CalculatorTypeProvider>
            </QueryClientProvider>
        </StrictMode>,
    )
}