import { useQuery } from "@tanstack/react-query"
import type { BeksApiResponse } from "../types"

export const useSummaryBeks = () => {
	const { data } = useQuery<BeksApiResponse>({
		queryKey: ["summary-beks"],
		gcTime: Infinity,
	})

	return data
}
