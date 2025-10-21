import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { getProductaiValues } from "@/components/productai-select"
import type { EconomicalP2gParametersSchema } from "./economical-parameters-p2g-schema"
import { getReactionTimeValue } from "@/components/reaction-time-slider/get-reaction-time-value.ts"
import type { P2GApiResponse } from "../types"

export const useSubmitP2g = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation<P2GApiResponse, Error, { parameters: string }>({
        mutationKey: ["p2g"],
        mutationFn: async ({ parameters }: { parameters: string }): Promise<P2GApiResponse> => {
            const formData = new FormData()
            formData.append("parameters", parameters)

            const response = await fetch("https://p2xapim.azure-api.net/P2X/p2g", {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return await response.json()
        },
        onSuccess: (data) => {
            queryClient.setQueryData(["summary-p2g"], data)
        },
    })

    const submit = (economicalParams: EconomicalP2gParametersSchema) => {
        const generalParams = location.state?.generalData
        const technicalParams = location.state?.technicalParameters?.p2g

        if (!generalParams || !technicalParams) return

        const payload = {
            Q_max: technicalParams.Q_max,
            reaction_time_d: getReactionTimeValue(technicalParams.reaction_time_d),
            reaction_time_u: getReactionTimeValue(technicalParams.reaction_time_u),
            electrolyzer_tech: "PEM",
            eta_H2: technicalParams.eta_H2,
            T0: technicalParams.T0,
            p0: technicalParams.p0,
            eta_C: technicalParams.eta_C,
            CAPEX: economicalParams.CAPEX,
            OPEX: economicalParams.OPEX,
            P_H2: economicalParams.P_H2,
            discount_rate: economicalParams.discount_rate,
            number_of_years: economicalParams.number_of_years,
            provider: generalParams.provider,
            P_FCR_CAP_BSP: economicalParams.P_FCR_CAP_BSP,
            P_aFRRu_CAP_BSP: economicalParams.P_aFRRu_CAP_BSP,
            P_aFRRd_CAP_BSP: economicalParams.P_aFRRd_CAP_BSP,
            P_mFRRu_CAP_BSP: economicalParams.P_mFRRu_CAP_BSP,
            P_mFRRd_CAP_BSP: economicalParams.P_mFRRd_CAP_BSP,
            P_aFRRu_BSP: economicalParams.P_aFRRu_BSP,
            P_aFRRd_BSP: economicalParams.P_aFRRd_BSP,
            P_mFRRu_BSP: economicalParams.P_mFRRu_BSP,
            P_mFRRd_BSP: economicalParams.P_mFRRd_BSP,
            Sector: generalParams.concentratorName,
            produktai: getProductaiValues(technicalParams.service_type, false),
        }

        mutate({
            parameters: JSON.stringify(payload),
        })

        navigate({
            to: "/p2g/summary-of-results",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: { p2g: economicalParams },
            },
        })
    }

    return { submit, ...rest }
}
