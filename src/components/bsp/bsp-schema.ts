import { z } from "zod"
import { numberField, errorMessages } from "@/utils/zod"

export const getBspSchema = (useFcr = true) => z.object({
    P_FCR_CAP_BSP: useFcr ? numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))) : numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))).optional(),
    P_aFRRu_CAP_BSP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    P_aFRRd_CAP_BSP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    P_mFRRu_CAP_BSP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    P_mFRRd_CAP_BSP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    P_aFRRu_BSP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    P_aFRRd_BSP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    P_mFRRu_BSP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
    P_mFRRd_BSP: numberField().pipe(z.number().min(0, errorMessages.greaterThanOrEqual(0))),
})

export type CapexSchema = z.infer<ReturnType<typeof getBspSchema>>;

export const bspDefaultValues: CapexSchema = {
    P_FCR_CAP_BSP: 0,
    P_aFRRu_CAP_BSP: 0,
    P_aFRRd_CAP_BSP: 0,
    P_mFRRu_CAP_BSP: 0,
    P_mFRRd_CAP_BSP: 0,
    P_aFRRu_BSP: 0,
    P_aFRRd_BSP: 0,
    P_mFRRu_BSP: 0,
    P_mFRRd_BSP: 0,
}
