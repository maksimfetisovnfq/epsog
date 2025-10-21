import { useQuery } from "@tanstack/react-query"
import type { DsrApiResponse } from "../types"

export const useSummaryDsr = () => {
    const { data } = useQuery<DsrApiResponse>({
        queryKey: ["summary-dsr"],
        gcTime: Infinity,
    })

    return data
}