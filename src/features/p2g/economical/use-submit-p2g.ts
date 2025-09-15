import { useMutation } from "@tanstack/react-query"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { getProductaiValues } from "@/components/productai-select"
import type { EconomicalP2gParametersSchema } from "./economical-parameters-p2g-schema"
import type { P2GApiResponse } from "@/features/p2g/types.ts"
import { getReactionTimeValue } from "@/components/reaction-time-slider/get-reaction-time-value.ts"

const mock: P2GApiResponse = {
    aggregated: {
        summary: {
            yearly_summary_table: [
                {
                    Metric: "POTENTIAL REVENUE PER YEAR (avg)",
                    Value: "+497.98 tūkst. EUR/year",
                },
                {
                    Metric: "POTENTIAL COST PER YEAR (avg)",
                    Value: "-16.12 tūkst. EUR/year",
                },
                {
                    Metric: "POTENTIAL PROFIT PER YEAR (avg)",
                    Value: "465.74 tūkst. EUR/year",
                },
            ],
            project_summary_table: [
                {
                    Metric: "TOTAL POTENTIAL REVENUE",
                    Value: "+995.95 tūkst. EUR",
                },
                {
                    Metric: "TOTAL POTENTIAL COST",
                    Value: "-2432.24 tūkst. EUR",
                },
                {
                    Metric: "TOTAL POTENTIAL PROFIT (NPV)",
                    Value: "-1533.72 tūkst. EUR",
                },
            ],
            npv_chart_data: {
                years: [0, 1, 2],
                npv: [-2400.0, -1950.481318887534, -1533.7204519444],
                dcfs: [-2400.0, 449.518681112466, 416.7608669431338],
                annual_cf: [-2400.0, 471.99461516808935, 459.47885580480505],
                break_even_point: null,
            },
            revenue_cost_chart_data: {
                products: ["perkama DA", "H2 pardavimai", "aFRRu CAP", "mFRRu CAP", "aFRRu energija", "mFRRu energija"],
                values: [
                    -209.72768698709777, 165.38386167417403, 242.89207122873745, 159.80476386556, 68.221889125,
                    74.055475625,
                ],
            },
            utilisation_chart_data: {
                products: ["perkama DA", "aFRRu CAP", "mFRRu CAP", "aFRRu", "mFRRu"],
                values: [
                    41.26997716894977, 9.452054794520548, 31.666666666666664, 2.4086757990867578, 3.8527397260273974,
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
                        value: 0,
                        unit: "X MW",
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        value: 0.0,
                        unit: "X %",
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        value: 0.0,
                        unit: "X tūkst. EUR",
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        value: 0.0,
                        unit: "X %",
                    },
                },
                aFRR: {
                    header: "aFRR",
                    description: "AUTOMATIC FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_reserves: {
                        header: "VOLUME OF PROCURED RESERVES",
                        upward: {
                            value: 1.0,
                            unit: "X MW",
                        },
                        downward: {
                            value: 0,
                            unit: "X MW",
                        },
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        upward: {
                            value: 9.45,
                            unit: "X %",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X %",
                        },
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: {
                            value: 242.89,
                            unit: "X tūkst. EUR",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X tūkst. EUR",
                        },
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: {
                            value: 9.45,
                            unit: "X %",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X %",
                        },
                    },
                },
                mFRR: {
                    header: "mFRR",
                    description: "MANUAL FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_reserves: {
                        header: "VOLUME OF PROCURED RESERVES",
                        upward: {
                            value: 1.0,
                            unit: "X MW",
                        },
                        downward: {
                            value: 0,
                            unit: "X MW",
                        },
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        upward: {
                            value: 31.67,
                            unit: "X %",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X %",
                        },
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: {
                            value: 159.8,
                            unit: "X tūkst. EUR",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X tūkst. EUR",
                        },
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: {
                            value: 31.67,
                            unit: "X %",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X %",
                        },
                    },
                },
            },
            BALANSAVIMO_ENERGIJOS_RINKA: {
                aFRR: {
                    header: "aFRR",
                    description: "AUTOMATIC FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_energy: {
                        header: "VOLUME OF PROCURED ENERGY",
                        upward: {
                            value: 0.15,
                            unit: "X GWh",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X GWh",
                        },
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        upward: {
                            value: 2.41,
                            unit: "X %",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X %",
                        },
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: {
                            value: 68.22,
                            unit: "X tūkst. EUR",
                        },
                        downward: {
                            value: -0.0,
                            unit: "X tūkst. EUR",
                        },
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: {
                            value: 3.73,
                            unit: "X %",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X %",
                        },
                    },
                },
                mFRR: {
                    header: "mFRR",
                    description: "MANUAL FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_energy: {
                        header: "VOLUME OF PROCURED ENERGY",
                        upward: {
                            value: 0.32,
                            unit: "X GWh",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X GWh",
                        },
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        upward: {
                            value: 3.85,
                            unit: "X %",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X %",
                        },
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: {
                            value: 74.06,
                            unit: "X tūkst. EUR",
                        },
                        downward: {
                            value: -0.0,
                            unit: "X tūkst. EUR",
                        },
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: {
                            value: 15.96,
                            unit: "X %",
                        },
                        downward: {
                            value: 0.0,
                            unit: "X %",
                        },
                    },
                },
            },
            ELEKTROS_ENERGIJOS_PREKYBA: {
                Day_Ahead: {
                    header: "Day Ahead",
                    description: "Electricity procurement for hydrogen production",
                    volume_of_energy_exchange: {
                        header: "VOLUME",
                        purchase: {
                            value: 3.98,
                            unit: "GWh",
                        },
                    },
                    percentage_of_time: {
                        header: "% OF TIME",
                        purchase: {
                            value: 41.27,
                            unit: "%",
                        },
                    },
                    potential_cost_revenue: {
                        header: "COST",
                        cost: {
                            value: 209.73,
                            unit: "tūkst. EUR",
                        },
                    },
                },
            },
            VANDENILIO_PREKYBA: {
                Hydrogen_Sales: {
                    header: "Hydrogen Sales",
                    description: "Revenue from selling produced hydrogen",
                    volume_of_h2_sold: {
                        header: "VOLUME SOLD",
                        value: 47252.53,
                        unit: "kg",
                    },
                    potential_cost_revenue: {
                        header: "REVENUE",
                        revenue: {
                            value: 165.38,
                            unit: "tūkst. EUR",
                        },
                    },
                },
            },
        },
        economic_results: {
            revenue_table: [
                {
                    Product: "H2 pardavimai",
                    "Value (tūkst. EUR)": 165.38,
                },
                {
                    Product: "aFRRu CAP",
                    "Value (tūkst. EUR)": 242.89,
                },
                {
                    Product: "mFRRu CAP",
                    "Value (tūkst. EUR)": 159.8,
                },
                {
                    Product: "aFRRu energija",
                    "Value (tūkst. EUR)": 68.22,
                },
                {
                    Product: "mFRRu energija",
                    "Value (tūkst. EUR)": 74.06,
                },
            ],
            cost_table: [
                {
                    Product: "perkama DA",
                    "Value (tūkst. EUR)": 209.73,
                },
            ],
            total_profit: 500.63,
            yearly_table: [
                {
                    YEAR: 0,
                    "SOH (%)": 100.0,
                    "CAPEX (tūkst. EUR)": 2400.0,
                    "OPEX (tūkst. EUR)": 0.0,
                    "CF (tūkst. EUR)": 0.0,
                    "NPV (tūkst. EUR)": -2400.0,
                },
                {
                    YEAR: 1,
                    "SOH (%)": 97.5,
                    "CAPEX (tūkst. EUR)": 0.0,
                    "OPEX (tūkst. EUR)": 16.12,
                    "CF (tūkst. EUR)": 488.11,
                    "NPV (tūkst. EUR)": -1950.48,
                },
                {
                    YEAR: 2,
                    "SOH (%)": 95.0,
                    "CAPEX (tūkst. EUR)": 0.0,
                    "OPEX (tūkst. EUR)": 16.12,
                    "CF (tūkst. EUR)": 475.6,
                    "NPV (tūkst. EUR)": -1533.72,
                },
            ],
        },
    },
    performance: {
        total_time: 52.054983377456665,
        preparation_time: 0.2818295955657959,
        optimization_step1_time: 50.28390169143677,
        optimization_step2_time: 1.319544792175293,
        results_preparation_time: 0.16968870162963867,
    },
}

export const useSubmitP2g = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { mutate, ...rest } = useMutation<P2GApiResponse, Error, { parameters: string }>({
        mutationKey: ["p2g"],
        mutationFn: async ({ parameters }: { parameters: string }): Promise<P2GApiResponse> => {
            const formData = new FormData()
            formData.append("parameters", parameters)

            return new Promise((resolve) => resolve(mock))
        },
    })

    const submit = (economicalParams: EconomicalP2gParametersSchema) => {
        const generalParams = location.state?.generalData
        const technicalParams = location.state?.technicalParameters?.p2g

        if (!generalParams || !technicalParams) return

        const payload = {
            Q_max: technicalParams.Q_max,
            reaction_time_d: getReactionTimeValue(technicalParams.reaction_time_d),
            reaction_time_u: getReactionTimeValue(technicalParams.reaction_time_u),
            electrolyzer_tech: "PEM",
            eta_H2: technicalParams.eta_H2,
            T0: technicalParams.T0,
            p0: technicalParams.p0,
            eta_C: technicalParams.eta_C,
            CAPEX: economicalParams.CAPEX,
            OPEX: economicalParams.OPEX,
            P_H2: economicalParams.P_H2,
            discount_rate: economicalParams.discount_rate,
            number_of_years: economicalParams.number_of_years,
            provider: generalParams.provider,
            P_FCR_CAP_BSP: economicalParams.P_FCR_CAP_BSP,
            P_aFRRu_CAP_BSP: economicalParams.P_aFRRu_CAP_BSP,
            P_aFRRd_CAP_BSP: economicalParams.P_aFRRd_CAP_BSP,
            P_mFRRu_CAP_BSP: economicalParams.P_mFRRu_CAP_BSP,
            P_mFRRd_CAP_BSP: economicalParams.P_mFRRd_CAP_BSP,
            P_aFRRu_BSP: economicalParams.P_aFRRu_BSP,
            P_aFRRd_BSP: economicalParams.P_aFRRd_BSP,
            P_mFRRu_BSP: economicalParams.P_mFRRu_BSP,
            P_mFRRd_BSP: economicalParams.P_mFRRd_BSP,
            Sector: generalParams.concentratorName,
            produktai: getProductaiValues(technicalParams.service_type),
        }

        mutate({
            parameters: JSON.stringify(payload),
        })

        navigate({
            to: "/summary-of-results-p2g",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: { p2g: economicalParams },
            },
        })
    }

    return { submit, ...rest }
}
