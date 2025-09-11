import {createFileRoute} from '@tanstack/react-router'
import {GeneralDataPage} from "../features/general-data/general-data-page"

export const Route = createFileRoute('/general-data')({
    component: GeneralDataPage,
})
