import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'
import type {GeneralDataSchema} from "./features/general-data/general-data-schema";

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
    
    interface HistoryState {
        generalData?: GeneralDataSchema
        technicalParameters?: Tech
        economicParameters?: {}
    }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)

    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    )
}