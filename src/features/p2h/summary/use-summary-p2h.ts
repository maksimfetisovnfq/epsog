import { useMutationState } from "@tanstack/react-query"
import type { P2hApiResponse } from "@/features/p2h/types.ts"//double check

export const useSummaryP2h = () => {
    const data = useMutationState({
        filters: { mutationKey: ["p2h"], status: "success" },
        select: (mutation) => mutation.state.data,
    })

    return data[0] as P2hApiResponse | undefined
}