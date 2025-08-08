import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { AppProvider } from './context/AppContext'

import { routeTree } from './routeTree.gen'
import type {GeneralDataSchema} from "./features/general-data/general-data-schema";
import type {TechnicalParametersSchema} from "./features/technical-parameters/technical-parameters-schema.ts";
import type {EconomicalParametersSchema} from "./features/economical-parameters/economical-parameters-schema.ts";

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
    
    interface HistoryState {
        generalData?: GeneralDataSchema
        technicalParameters?: TechnicalParametersSchema
        economicParameters?: EconomicalParametersSchema
    }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)

    root.render(
        <StrictMode>
            <AppProvider>
                <RouterProvider router={router} />
            </AppProvider>
        </StrictMode>,
    )
}