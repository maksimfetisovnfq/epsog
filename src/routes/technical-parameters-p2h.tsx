import {createFileRoute} from '@tanstack/react-router'
import {TechnicalParametersP2hPage} from "../pages/technical-parameters-p2h-page.tsx";

export const Route = createFileRoute('/technical-parameters-p2h')({
    component: TechnicalParametersP2hPage,
});