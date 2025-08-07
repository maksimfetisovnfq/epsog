import {createFileRoute} from '@tanstack/react-router'
import {GeneralDataPage} from "../pages/general-data-page";

export const Route = createFileRoute('/general-data')({
    component: GeneralDataPage,
})
