import { useQuery } from "@tanstack/react-query"
import type { P2hApiResponse } from "../types"

export const useSummaryP2h = () => {
    const { data } = useQuery<P2hApiResponse>({
        queryKey: ["summary-p2h"],
        gcTime: Infinity,
    })

    return data
}