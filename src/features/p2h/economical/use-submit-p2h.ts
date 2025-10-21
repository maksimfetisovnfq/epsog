import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocation, useNavigate } from "@tanstack/react-router"
import type { EconomicalP2hParametersSchema } from "./economical-parameters-p2h-schema"
import { getProductaiValues } from "@/components/productai-select"
import { getReactionTimeValue } from "@/components/reaction-time-slider/get-reaction-time-value.ts"
import type { P2hApiResponse } from "../types"
import { ApiValidationError } from "@/types.ts"

export const useSubmitP2h = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation<P2hApiResponse, Error, { parameters: string }>({
        mutationKey: ["p2h"],
        mutationFn: async ({ parameters }: { parameters: string }) => {
            const formData = new FormData()
            formData.append("parameters", parameters)

            const response = await fetch("https://p2xapim.azure-api.net/P2X/p2h", {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                const responseData = await response.json()

                if (responseData.detail) {
                    throw new ApiValidationError(responseData.detail)
                }

                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return await response.json()
        },
        onSuccess: (data) => {
            queryClient.setQueryData(["summary-p2h"], data)
        },
    })

    const submit = (data: EconomicalP2hParametersSchema) => {
        const generalParams = location.state?.generalData
        const technicalParams = location.state?.technicalParameters?.p2h

        if (!generalParams || !technicalParams) return

        const payload = {
            Q_yearly: technicalParams.Q_yearly,
            Q_max_HP: technicalParams.Q_max_HP,
            reaction_time_d: getReactionTimeValue(technicalParams.reaction_time_d),
            reaction_time_u: getReactionTimeValue(technicalParams.reaction_time_u),
            T_HP: technicalParams.T_HP,
            Q_max_BOILER: technicalParams.Q_max_BOILER,
            P_FUEL: technicalParams.P_FUEL,
            q_FUEL: technicalParams.q_FUEL,
            eta_BOILER: technicalParams.eta_BOILER,
            d_HS: technicalParams.d_HS,
            H_HS: technicalParams.H_HS,
            T_max_HS: technicalParams.T_max_HS,
            lambda_HS: technicalParams.lambda_HS,
            dx_HS: technicalParams.dx_HS,
            CAPEX_HP: data.CAPEX_HP,
            CAPEX_HS: data.CAPEX_HS,
            OPEX_HP: data.OPEX_HP,
            OPEX_HS: data.OPEX_HS,
            discount_rate: data.discount_rate,
            number_of_years: data.number_of_years,
            provider: generalParams.provider,
            P_FCR_CAP_BSP: data.P_FCR_CAP_BSP,
            P_aFRRu_CAP_BSP: data.P_aFRRu_CAP_BSP,
            P_aFRRd_CAP_BSP: data.P_aFRRd_CAP_BSP,
            P_mFRRu_CAP_BSP: data.P_mFRRu_CAP_BSP,
            P_mFRRd_CAP_BSP: data.P_mFRRd_CAP_BSP,
            P_aFRRu_BSP: data.P_aFRRu_BSP,
            P_aFRRd_BSP: data.P_aFRRd_BSP,
            P_mFRRu_BSP: data.P_mFRRu_BSP,
            P_mFRRd_BSP: data.P_mFRRd_BSP,
            Sector: generalParams.concentratorName,
            County: generalParams.country,
            produktai: getProductaiValues(technicalParams.service_type),
        }

        mutate({
            parameters: JSON.stringify(payload),
        })

        navigate({
            to: "/p2h/summary-of-results",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: { p2h: data },
            },
        })
    }

    return { submit, ...rest }
}
