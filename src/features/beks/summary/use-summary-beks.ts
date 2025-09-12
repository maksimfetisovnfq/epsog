import { useMutationState } from "@tanstack/react-query"
import type { BeksApiResponse } from "@/beks-response.ts"

export const useSummaryBeks = () => {
    const data = useMutationState({
        filters: { mutationKey: ["beks"], status: "success" },
        select: (mutation) => mutation.state.data,
    })

    return data[0] as BeksApiResponse | undefined
}

