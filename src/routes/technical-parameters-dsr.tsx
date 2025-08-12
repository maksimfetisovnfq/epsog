import {createFileRoute} from '@tanstack/react-router'
import {TechnicalParametersDsrPage} from "../pages/technical-parameters-dsr-page.tsx";

export const Route = createFileRoute('/technical-parameters-dsr')({
  component: TechnicalParametersDsrPage,
});

