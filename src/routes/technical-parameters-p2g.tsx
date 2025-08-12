import {createFileRoute} from '@tanstack/react-router'
import {TechnicalParametersP2gPage} from "../pages/technical-parameters-p2g-page.tsx";

export const Route = createFileRoute('/technical-parameters-p2g')({
  component: TechnicalParametersP2gPage,
});

