import { useMutationState } from "@tanstack/react-query"
import type { DsrApiResponse } from "@/features/dsr/types"

export const useSummaryDsr = () => {
    const data = useMutationState({
        filters: { mutationKey: ["dsr"], status: "success" },
        select: (mutation) => mutation.state.data,
    })

    return data[0] as DsrApiResponse | undefined
}