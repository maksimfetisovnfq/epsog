import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocation, useNavigate } from "@tanstack/react-router"
import type { EconomicalP2hParametersSchema } from "./economical-parameters-p2h-schema"
import { getProductaiValues } from "@/components/productai-select"
import type { P2hApiResponse } from "@/features/p2h/types.ts"
import { getReactionTimeValue } from "@/components/reaction-time-slider/get-reaction-time-value.ts"

const mock: P2hApiResponse = {
    aggregated: {
        summary: {
            yearly_summary_table: [
                {
                    Metric: "POTENTIAL SAVINGS PER YEAR",
                    Value: "10.35 tūkst. EUR/year",
                },
                {
                    Metric: "COST WITH BOILER ONLY",
                    Value: "2.94 tūkst. EUR/year",
                },
                { Metric: "COST WITH BOILER + HEAT PUMP", Value: "7.41 tūkst. EUR/year" },
            ],
            project_summary_table: [
                {
                    Metric: "INITIAL INVESTMENT",
                    Value: "120309.72 tūkst. EUR",
                },
                { Metric: "ANNUAL OPERATIONAL COST", Value: "2406.79 tūkst. EUR/year" },
                {
                    Metric: "PROJECT NPV",
                    Value: "-150174.75 tūkst. EUR",
                },
            ],
            npv_chart_data: {
                years: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                npv: [
                    -120309.72450961724, -122592.05485560457, -124765.70280416393, -126835.8437075538,
                    -128807.406472687, -130685.0852966234, -132473.35084322948, -134176.46088761624,
                    -135798.47045369886, -137343.24146901563, -138814.4519597935, -140215.6048081534,
                    -141550.03609230567, -142820.92302959354, -144031.2915412963, -145184.02345720367,
                    -146281.86337711546, -147327.42520560286, -148323.19837559087, -149271.55377557946,
                    -150174.7493946162,
                ],
                dcfs: [
                    -120309.72450961724, -2282.330345987333, -2173.647948559365, -2070.1409033898713,
                    -1971.5627651332106, -1877.678823936391, -1788.2655466060867, -1703.110044386749,
                    -1622.0095660826182, -1544.771015316779, -1471.2104907778848, -1401.1528483598904,
                    -1334.4312841522765, -1270.8869372878821, -1210.3685117027449, -1152.7319159073759,
                    -1097.8399199117869, -1045.5618284874158, -995.7731699880151, -948.3553999885856,
                    -903.1956190367483,
                ],
                annual_cf: [
                    -120309.72450961724, -2396.4468632867, -2396.4468632867, -2396.4468632867, -2396.4468632867,
                    -2396.4468632867, -2396.4468632867, -2396.4468632867, -2396.4468632867, -2396.4468632867,
                    -2396.4468632867, -2396.4468632867, -2396.4468632867, -2396.4468632867, -2396.4468632867,
                    -2396.4468632867, -2396.4468632867, -2396.4468632867, -2396.4468632867, -2396.4468632867,
                    -2396.4468632867,
                ],
                break_even_point: null,
            },
            revenue_cost_chart_data: {
                products: ["Boiler Only", "Boiler + Heat Pump", "Savings"],
                values: [-2.941176418441176, -7.406450487203593, 10.347626905644768],
            },
            utilisation_chart_data: {
                products: [
                    "katilas",
                    "perkama DA",
                    "FCR CAP",
                    "aFRRu CAP",
                    "mFRRu CAP",
                    "aFRRd CAP",
                    "mFRRd CAP",
                    "perkama ID",
                    "parduodama ID",
                    "aFRRu",
                    "aFRRd",
                    "mFRRu",
                    "mFRRd",
                ],
                values: [
                    52.82819634703196, 28.80422374429224, 3.5473744292237446, 7.374429223744292, 2.220319634703196,
                    41.17294520547945, 43.91837899543379, 1.749429223744292, 41.612442922374434, 1.601027397260274,
                    22.28025114155251, 0.14840182648401826, 19.41780821917808,
                ],
            },
        },
        markets: {
            BALANSAVIMO_PAJEGUMU_RINKA: {
                FCR: {
                    header: "FCR",
                    description: "FREQUENCY CONTAINMENT RESERVE",
                    volume_of_procured_reserves: {
                        header: "VOLUME OF PROCURED RESERVES",
                        value: 1.53,
                        unit: "X MW",
                    },
                    utilisation: { header: "UTILISATION (% OF TIME)", value: 3.55, unit: "X %" },
                    potential_revenue: { header: "POTENTIAL REVENUE", value: 0.2, unit: "X tūkst. EUR" },
                    bids_selected: { header: "% of bids selected", value: 3.34, unit: "X %" },
                },
                aFRR: {
                    header: "aFRR",
                    description: "AUTOMATIC FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_reserves: {
                        header: "VOLUME OF PROCURED RESERVES",
                        upward: { value: 4.74, unit: "X MW" },
                        downward: { value: 4.86, unit: "X MW" },
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        upward: { value: 7.37, unit: "X %" },
                        downward: { value: 41.17, unit: "X %" },
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: { value: 1.35, unit: "X tūkst. EUR" },
                        downward: { value: 5.33, unit: "X tūkst. EUR" },
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: { value: 7.37, unit: "X %" },
                        downward: { value: 40.93, unit: "X %" },
                    },
                },
                mFRR: {
                    header: "mFRR",
                    description: "MANUAL FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_reserves: {
                        header: "VOLUME OF PROCURED RESERVES",
                        upward: { value: 3.76, unit: "X MW" },
                        downward: { value: 4.32, unit: "X MW" },
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        upward: { value: 2.22, unit: "X %" },
                        downward: { value: 43.92, unit: "X %" },
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: { value: 0.27, unit: "X tūkst. EUR" },
                        downward: { value: 0.73, unit: "X tūkst. EUR" },
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: { value: 2.19, unit: "X %" },
                        downward: { value: 43.4, unit: "X %" },
                    },
                },
            },
            BALANSAVIMO_ENERGIJOS_RINKA: {
                aFRR: {
                    header: "aFRR",
                    description: "AUTOMATIC FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_energy: {
                        header: "VOLUME OF PROCURED ENERGY",
                        upward: { value: 0.35, unit: "X MWh" },
                        downward: { value: 7.05, unit: "X MWh" },
                    },
                    utilisation: {
                        header: "UTILISATION",
                        upward: { value: 1.6, unit: "X %" },
                        downward: { value: 22.28, unit: "X %" },
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: { value: 0.17, unit: "X tūkst. EUR" },
                        downward: { value: 0.16, unit: "X tūkst. EUR" },
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: { value: 2.49, unit: "X %" },
                        downward: { value: 27.38, unit: "X %" },
                    },
                },
                mFRR: {
                    header: "mFRR",
                    description: "MANUAL FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_energy: {
                        header: "VOLUME OF PROCURED ENERGY",
                        upward: { value: 0.04, unit: "X MWh" },
                        downward: { value: 6.88, unit: "X MWh" },
                    },
                    utilisation: {
                        header: "UTILISATION",
                        upward: { value: 0.15, unit: "X %" },
                        downward: { value: 19.42, unit: "X %" },
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: { value: 0.01, unit: "X tūkst. EUR" },
                        downward: { value: 0.27, unit: "X tūkst. EUR" },
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: { value: 0.63, unit: "X %" },
                        downward: { value: 38.41, unit: "X %" },
                    },
                },
            },
            ELEKTROS_ENERGIJOS_PREKYBA: {
                Electricity_Consumption: {
                    header: "Electricity Consumption",
                    description: "Electricity procurement for heat generation",
                    volume_of_energy_exchange: {
                        header: "VOLUME OF ENERGY EXCHANGE",
                        purchase: { value: 9.41, unit: "X MWh" },
                    },
                    percentage_of_time: { header: "% OF TIME", purchase: { value: 28.8, unit: "X %" } },
                    potential_cost_revenue: { header: "COST", cost: { value: 0.45, unit: "X tūkst. EUR" } },
                },
                Intraday: {
                    header: "Intraday",
                    description: "Intraday electricity trading",
                    volume_of_energy_exchange: {
                        header: "VOLUME OF ENERGY EXCHANGE",
                        purchase: { value: 0.39, unit: "X MWh" },
                        sale: { value: 13.93, unit: "X MWh" },
                    },
                    percentage_of_time: {
                        header: "% OF TIME",
                        purchase: { value: 1.75, unit: "X %" },
                        sale: { value: 41.61, unit: "X %" },
                    },
                    potential_cost_revenue: {
                        header: "COST & REVENUE",
                        cost: { value: 0.02, unit: "X tūkst. EUR" },
                        revenue: { value: 1.18, unit: "X tūkst. EUR" },
                    },
                },
                Heat_Generation: {
                    header: "Heat Generation",
                    description: "Boiler operation for heat generation",
                    volume_of_energy_exchange: {
                        header: "VOLUME OF HEAT GENERATED",
                        purchase: { value: 30.28, unit: "X MWh" },
                    },
                    percentage_of_time: { header: "% OF TIME", purchase: { value: 52.83, unit: "X %" } },
                    potential_cost_revenue: { header: "COST", cost: { value: 1.78, unit: "X tūkst. EUR" } },
                },
            },
        },
        economic_results: {
            revenue_table: [
                {
                    Product: "FCR CAP",
                    "Value (tūkst. EUR)": 0.20353654214994404,
                },
                { Product: "aFRRu CAP", "Value (tūkst. EUR)": 1.3490738878560908 },
                {
                    Product: "aFRRd CAP",
                    "Value (tūkst. EUR)": 5.326075950792423,
                },
                { Product: "mFRRu CAP", "Value (tūkst. EUR)": 0.2667438607204926 },
                {
                    Product: "mFRRd CAP",
                    "Value (tūkst. EUR)": 0.726244394323663,
                },
                { Product: "parduodama ID", "Value (tūkst. EUR)": 1.177035259699099 },
                {
                    Product: "aFRRu",
                    "Value (tūkst. EUR)": 0.16968642119639812,
                },
                { Product: "aFRRd", "Value (tūkst. EUR)": 0.157292996604258 },
                {
                    Product: "mFRRu",
                    "Value (tūkst. EUR)": 0.011007623246622324,
                },
                { Product: "mFRRd", "Value (tūkst. EUR)": 0.2676729549184458 },
            ],
            cost_table: [
                { Product: "katilas", "Value (tūkst. EUR)": 1.780983291132354 },
                {
                    Product: "perkama DA",
                    "Value (tūkst. EUR)": 0.4467177565368628,
                },
                { Product: "perkama ID", "Value (tūkst. EUR)": 0.02021835663462732 },
            ],
            total_profit: 10.347626905644768,
            yearly_table: [
                {
                    YEAR: 0,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -120309.725,
                    NPV: -120309.725,
                },
                { YEAR: 1, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -122592.055 },
                {
                    YEAR: 2,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -124765.703,
                },
                { YEAR: 3, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -126835.844 },
                {
                    YEAR: 4,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -128807.406,
                },
                { YEAR: 5, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -130685.085 },
                {
                    YEAR: 6,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -132473.351,
                },
                { YEAR: 7, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -134176.461 },
                {
                    YEAR: 8,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -135798.47,
                },
                { YEAR: 9, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -137343.241 },
                {
                    YEAR: 10,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -138814.452,
                },
                { YEAR: 11, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -140215.605 },
                {
                    YEAR: 12,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -141550.036,
                },
                { YEAR: 13, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -142820.923 },
                {
                    YEAR: 14,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -144031.292,
                },
                { YEAR: 15, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -145184.023 },
                {
                    YEAR: 16,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -146281.863,
                },
                { YEAR: 17, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -147327.425 },
                {
                    YEAR: 18,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -148323.198,
                },
                { YEAR: 19, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -149271.554 },
                {
                    YEAR: 20,
                    CAPEX: 120309.725,
                    OPEX: 2406.794,
                    CF: -2396.447,
                    NPV: -150174.749,
                },
            ],
        },
        total_energy: {
            katilas: 30.276715949250015,
            "perkama DA": 9.406710941296593,
            "perkama ID": 0.3907843848010878,
            "parduodama ID": 13.925393883592056,
            aFRRu: 0.3475468860014133,
            aFRRd: 7.046018213742355,
            mFRRu: 0.04323749879967444,
            mFRRd: 6.8793756698497,
        },
        average_power: {
            "FCR CAP": 1.531488150513101,
            "aFRRu CAP": 4.74242411561706,
            "aFRRd CAP": 4.856199222947633,
            "mFRRu CAP": 3.762647330349839,
            "mFRRd CAP": 4.320961462565922,
        },
        total_time: {
            katilas: 52.82819634703196,
            "perkama DA": 28.80422374429224,
            "FCR CAP": 3.5473744292237446,
            "aFRRu CAP": 7.374429223744292,
            "mFRRu CAP": 2.220319634703196,
            "aFRRd CAP": 41.17294520547945,
            "mFRRd CAP": 43.91837899543379,
            "perkama ID": 1.749429223744292,
            "parduodama ID": 41.612442922374434,
            aFRRu: 1.601027397260274,
            aFRRd: 22.28025114155251,
            mFRRu: 0.14840182648401826,
            mFRRd: 19.41780821917808,
        },
        total_finance: {
            katilas: -1.780983291132354,
            "perkama DA": -0.4467177565368628,
            "FCR CAP": 0.20353654214994404,
            "aFRRu CAP": 1.3490738878560908,
            "aFRRd CAP": 5.326075950792423,
            "mFRRu CAP": 0.2667438607204926,
            "mFRRd CAP": 0.726244394323663,
            "perkama ID": -0.02021835663462732,
            "parduodama ID": 1.177035259699099,
            aFRRu: 0.16968642119639812,
            aFRRd: 0.157292996604258,
            mFRRu: 0.011007623246622324,
            mFRRd: 0.2676729549184458,
        },
        comparison: {
            "tik katilas": -2.941176418441176,
            "katilas + šilumos siurblys": 7.406450487203593,
            skirtumas: -10.347626905644768,
        },
        yearly: [
            {
                YEAR: 0,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -120309.725,
                NPV: -120309.725,
            },
            { YEAR: 1, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -122592.055 },
            {
                YEAR: 2,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -124765.703,
            },
            { YEAR: 3, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -126835.844 },
            {
                YEAR: 4,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -128807.406,
            },
            { YEAR: 5, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -130685.085 },
            {
                YEAR: 6,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -132473.351,
            },
            { YEAR: 7, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -134176.461 },
            {
                YEAR: 8,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -135798.47,
            },
            { YEAR: 9, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -137343.241 },
            {
                YEAR: 10,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -138814.452,
            },
            { YEAR: 11, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -140215.605 },
            {
                YEAR: 12,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -141550.036,
            },
            { YEAR: 13, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -142820.923 },
            {
                YEAR: 14,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -144031.292,
            },
            { YEAR: 15, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -145184.023 },
            {
                YEAR: 16,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -146281.863,
            },
            { YEAR: 17, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -147327.425 },
            {
                YEAR: 18,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -148323.198,
            },
            { YEAR: 19, CAPEX: 120309.725, OPEX: 2406.794, CF: -2396.447, NPV: -149271.554 },
            {
                YEAR: 20,
                CAPEX: 120309.725,
                OPEX: 2406.794,
                CF: -2396.447,
                NPV: -150174.749,
            },
        ],
        bid_percentages: {
            "FCR CAP": 3.339041095890411,
            "aFRRu CAP": 7.374429223744292,
            "aFRRd CAP": 40.93321917808219,
            "mFRRu CAP": 2.186073059360731,
            "mFRRd CAP": 43.398972602739725,
            "aFRRu energy": 2.4891294702280593,
            "aFRRd energy": 27.38241380519799,
            "mFRRu energy": 0.6309913845407111,
            "mFRRd energy": 38.41463414634146,
        },
    },
    performance: {
        total_time: 65.1259138584137,
        preparation_time: 0.6983737945556641,
        optimization_step1_time: 62.187138080596924,
        optimization_step2_time: 2.0759084224700928,
        results_preparation_time: 0.16447186470031738,
    },
}

export const useSubmitP2h = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryClient = useQueryClient()

    const { mutate, ...rest } = useMutation({
        mutationKey: ["p2h"],
        mutationFn: async ({ parameters }: { parameters: string }) => {
            const formData = new FormData()
            formData.append("parameters", parameters)

            // const response = await fetch(
            //     "https://p2x-container-app.wonderfulpebble-6684d847.westeurope.azurecontainerapps.io/p2h",
            //     {
            //         method: "POST",
            //         body: formData,
            //     }
            // )
            //
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`)
            // }
            //
            // return await response.json()
             return new Promise((resolve) => resolve(mock))
        },
        onSuccess: (data) => {
            queryClient.setQueryData(["summary-p2h"], data)
        },
    })

    const submit = (data: EconomicalP2hParametersSchema) => {
        const generalParams = location.state?.generalData
        const technicalParams = location.state?.technicalParameters?.p2h

        if (!generalParams || !technicalParams) return

        const payload = {
            Q_yearly: technicalParams.Q_yearly,
            Q_max_HP: technicalParams.Q_max_HP,
            reaction_time_d: getReactionTimeValue(technicalParams.reaction_time_d),
            reaction_time_u: getReactionTimeValue(technicalParams.reaction_time_u),
            T_HP: technicalParams.T_HP,
            Q_max_BOILER: technicalParams.Q_max_BOILER,
            P_FUEL: technicalParams.P_FUEL,
            q_FUEL: technicalParams.q_FUEL,
            eta_BOILER: technicalParams.eta_BOILER,
            d_HS: technicalParams.d_HS,
            H_HS: technicalParams.H_HS,
            T_max_HS: technicalParams.T_max_HS,
            lambda_HS: technicalParams.lambda_HS,
            dx_HS: technicalParams.dx_HS,
            CAPEX_HP: data.CAPEX_HP,
            CAPEX_HS: data.CAPEX_HS,
            OPEX_HP: data.OPEX_HP,
            OPEX_HS: data.OPEX_HS,
            discount_rate: data.discount_rate,
            number_of_years: data.number_of_years,
            provider: generalParams.provider,
            P_FCR_CAP_BSP: data.P_FCR_CAP_BSP,
            P_aFRRu_CAP_BSP: data.P_aFRRu_CAP_BSP,
            P_aFRRd_CAP_BSP: data.P_aFRRd_CAP_BSP,
            P_mFRRu_CAP_BSP: data.P_mFRRu_CAP_BSP,
            P_mFRRd_CAP_BSP: data.P_mFRRd_CAP_BSP,
            P_aFRRu_BSP: data.P_aFRRu_BSP,
            P_aFRRd_BSP: data.P_aFRRd_BSP,
            P_mFRRu_BSP: data.P_mFRRu_BSP,
            P_mFRRd_BSP: data.P_mFRRd_BSP,
            Sector: generalParams.concentratorName,
            County: generalParams.country,
            produktai: getProductaiValues(technicalParams.service_type),
        }

        mutate({
            parameters: JSON.stringify(payload),
        })

        navigate({
            to: "/p2h/summary-of-results",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: { p2h: data },
            },
        })
    }

    return { submit, ...rest }
}
