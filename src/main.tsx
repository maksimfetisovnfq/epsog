import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { CalculatorTypeProvider } from "./context/CalculatorTypeContext"
import { routeTree } from "./routeTree.gen"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { GeneralDataSchema } from "./features/general-data/general-data-schema"
import type { TechnicalP2hParametersSchema } from "./features/p2h/technical/technical-parameters-schema"
import type { TechnicalP2gParametersSchema } from "./features/p2g/technical/technical-parameters-p2g-schema"
import type { EconomicalP2hParametersSchema } from "./features/p2h/economical/economical-parameters-p2h-schema"
import { CssBaseline } from "@mui/material"
import { GlobalStyles } from "@/components/globalStyles/globalStyles.tsx"
import type { TechnicalBeksParametersSchema } from "@/features/beks/technical/technical-parameters-schema.ts"
import type { EconomicalBeksParametersSchema } from "@/features/beks/economical/economical-parameters-schema.ts"

const router = createRouter({ routeTree })
const queryClient = new QueryClient()

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }

    interface HistoryState {
        generalData?: GeneralDataSchema
        technicalParameters?: {
            p2h?: TechnicalP2hParametersSchema
            beks?: TechnicalBeksParametersSchema
            p2g?: TechnicalP2gParametersSchema
        }
        economicParameters?: {
            p2h?: EconomicalP2hParametersSchema
            beks?: EconomicalBeksParametersSchema
            p2g?: TechnicalP2hParametersSchema
        }
    }
}

const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)

    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <CalculatorTypeProvider>
                    <RouterProvider router={router} />
                    <CssBaseline/>
                    <GlobalStyles/>
                </CalculatorTypeProvider>
            </QueryClientProvider>
        </StrictMode>
    )
}
