import { useQuery } from "@tanstack/react-query"
import type { P2GApiResponse } from "../types"

export const useSummaryP2g = () => {
    const { data } = useQuery<P2GApiResponse>({
        queryKey: ["summary-p2g"],
        gcTime: Infinity,
    })

    return data
}