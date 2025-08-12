import {createFileRoute} from '@tanstack/react-router'
import {TechnicalParametersBeksPage} from "../pages/technical-parameters-beks-page.tsx";

export const Route = createFileRoute('/technical-parameters-beks')({
  component: TechnicalParametersBeksPage,
});

