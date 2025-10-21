import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocation, useNavigate } from "@tanstack/react-router"
import type { EconomicalBeksParametersSchema } from "@/features/beks/economical/economical-parameters-schema.ts"
import { getReactionTimeValue } from "@/components/reaction-time-slider/get-reaction-time-value.ts"
import type { BeksApiResponse } from "../types"
import { ApiValidationError } from "@/types"

export const useSubmitBeks = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const queryClient = useQueryClient()

	const { mutate, ...rest } = useMutation<
		BeksApiResponse,
		Error,
		{ parameters: string }
	>({
		mutationKey: ["beks"],
		mutationFn: async ({
			parameters,
		}: {
			parameters: string
		}): Promise<BeksApiResponse> => {
			const formData = new FormData()
			formData.append("parameters", parameters)

			const response = await fetch("https://p2xapim.azure-api.net/P2X/beks", {
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
			queryClient.setQueryData(["summary-beks"], data)
		},
	})

	const submit = (economicalParams: EconomicalBeksParametersSchema) => {
		const generalParams = location.state?.generalData
		const technicalParams = location.state?.technicalParameters?.beks

		if (!generalParams || !technicalParams) return

		const payload = {
			RTE: technicalParams?.RTE ?? 0,
			Q_max: technicalParams?.q_max ?? 0,
			Q_total: technicalParams?.q_total ?? 0,
			SOC_min: technicalParams?.SOC_min ?? 0,
			SOC_max: technicalParams?.SOC_max ?? 0,
			N_cycles_DA: technicalParams?.N_cycles_DA ?? 0,
			N_cycles_ID: technicalParams?.N_cycles_ID ?? 0,
			CAPEX_P: economicalParams.CAPEX_P,
			CAPEX_C: economicalParams.CAPEX_C,
			OPEX_P: economicalParams.OPEX_P,
			OPEX_C: economicalParams.OPEX_C,
			discount_rate: economicalParams.discount_rate,
			number_of_years: economicalParams.number_of_years,
			provider: generalParams?.provider,
			Sector: generalParams?.concentratorName,
			P_FCR_CAP_BSP: economicalParams.P_FCR_CAP_BSP,
			P_aFRRu_CAP_BSP: economicalParams.P_aFRRu_CAP_BSP,
			P_aFRRd_CAP_BSP: economicalParams.P_aFRRd_CAP_BSP,
			P_mFRRu_CAP_BSP: economicalParams.P_mFRRu_CAP_BSP,
			P_mFRRd_CAP_BSP: economicalParams.P_mFRRd_CAP_BSP,
			P_aFRRu_BSP: economicalParams.P_aFRRu_BSP,
			P_aFRRd_BSP: economicalParams.P_aFRRd_BSP,
			P_mFRRu_BSP: economicalParams.P_mFRRu_BSP,
			P_mFRRd_BSP: economicalParams.P_mFRRd_BSP,
			reaction_time: getReactionTimeValue(technicalParams?.reaction_time),
		}

		mutate({
			parameters: JSON.stringify(payload),
		})

		navigate({
			to: "/beks/summary-of-results",
			state: {
				generalData: location.state.generalData,
				technicalParameters: location.state.technicalParameters,
				economicParameters: { beks: economicalParams },
			},
		})
	}

	return { submit, ...rest }
}
