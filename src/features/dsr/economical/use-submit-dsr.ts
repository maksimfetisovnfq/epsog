import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { getProductaiValues } from "@/components/productai-select"
import type { EconomicalDsrParametersSchema } from "./economical-parameters-dsr-schema"
import { getReactionTimeValue } from "@/components/reaction-time-slider/get-reaction-time-value"
import type { DsrApiResponse } from "../types"

export const useSubmitDsr = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation<DsrApiResponse, Error, { parameters: string }>({
        mutationKey: ["dsr"],
        mutationFn: async ({ parameters }: { parameters: string }): Promise<DsrApiResponse> => {
            const formData = new FormData()
            formData.append("parameters", parameters)

            const response = await fetch("https://p2xapim.azure-api.net/P2X/dsr", {
                method: "POST",
                body: formData,
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return await response.json()
        },
        onSuccess: (data) => {
            queryClient.setQueryData(["summary-dsr"], data)
        },
    })

    const submit = (economicalParams: EconomicalDsrParametersSchema) => {
        const generalParams = location.state?.generalData
        const technicalParams = location.state?.technicalParameters?.dsr

        if (!generalParams || !technicalParams) return

        const payload = {
            Q_max: technicalParams.Q_max,
            Q_min: technicalParams.Q_min,
            Q_avg: technicalParams.Q_avg,
            T_shift: technicalParams.T_shift,
            reaction_time: getReactionTimeValue(technicalParams.reaction_time),
            CAPEX: economicalParams.CAPEX,
            OPEX: economicalParams.OPEX,
            discount_rate: economicalParams.discount_rate,
            number_of_years: economicalParams.number_of_years,
            provider: generalParams.provider,
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
            // hourly_power: technicalParams.,
        }

        mutate({
            parameters: JSON.stringify(payload),
        })

        navigate({
            to: "/dsr/summary-of-results",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: {
                    dsr: {
                        ...technicalParams,
                        ...economicalParams,
                    },
                },
            },
        })
    }

    return { submit, ...rest }
}
