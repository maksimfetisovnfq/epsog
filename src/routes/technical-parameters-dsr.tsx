import {createFileRoute} from '@tanstack/react-router'
import { TechnicalParametersDsrPage } from "@/features/dsr/technical"

export const Route = createFileRoute('/technical-parameters-dsr')({
  component: TechnicalParametersDsrPage,
});

