import {useMutationState} from "@tanstack/react-query";
import type {P2GApiResponse} from "../../types";

export const useSummaryP2g = () => {
    const data = useMutationState({
        filters: {mutationKey: ['p2g'], status: 'success'},
        select: (mutation) => mutation.state.data,
    });
    
    return data[0] as P2GApiResponse | undefined
}