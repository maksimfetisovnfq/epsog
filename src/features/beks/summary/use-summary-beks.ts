import { useQuery } from "@tanstack/react-query"
import type { BeksApiResponse } from "@/features/beks/types.ts"

export const useSummaryBeks = () => {
	const { data } = useQuery<BeksApiResponse>({
		queryKey: ["summary-beks"],
		gcTime: Infinity,
	})

	return data
}
