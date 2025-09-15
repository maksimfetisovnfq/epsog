import { useMutationState } from "@tanstack/react-query"
import type { P2hApiResponse } from "@/p2h-response.ts"

export const useSummaryP2h = () => {
    const data = useMutationState({
        filters: { mutationKey: ["beks"], status: "success" },
        select: (mutation) => mutation.state.data,
    })

    return data[0] as P2hApiResponse | undefined
}

