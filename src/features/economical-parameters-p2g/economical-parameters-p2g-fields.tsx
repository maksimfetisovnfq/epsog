import {FormInput} from "../../components/form";

export const EconomicalParametersP2gFields= () => {
    return (
        <>
            <FormInput name="CAPEX" title="CAPEX" type="number"/>
            <FormInput name="OPEX" title="OPEX" type="number"/>
            <FormInput name="P_H2" title="P_H2" type="number"/>
            <FormInput name="number_of_years" title="number_of_years" type="number"/>
            <FormInput name="discount_rate" title="discount_rate" type="number"/>

            <FormInput name="P_FCR_CAP_BSP" title="P_FCR_CAP_BSP" type="number"/>
            <FormInput name="P_aFRRu_CAP_BSP" title="P_aFRRu_CAP_BSP" type="number"/>
            <FormInput name="P_aFRRd_CAP_BSP" title="P_aFRRd_CAP_BSP" type="number"/>
            <FormInput name="P_mFRRu_CAP_BSP" title="P_mFRRu_CAP_BSP" type="number"/>
            <FormInput name="P_mFRRd_CAP_BSP" title="P_mFRRd_CAP_BSP" type="number"/>

            <FormInput name="P_aFRRu_BSP" title="P_aFRRu_BSP" type="number"/>
            <FormInput name="P_aFRRd_BSP" title="P_aFRRd_BSP" type="number"/>
            <FormInput name="P_mFRRu_BSP" title="P_mFRRu_BSP" type="number"/>
            <FormInput name="P_mFRRd_BSP" title="P_mFRRd_BSP" type="number"/>
        </>
    )
}