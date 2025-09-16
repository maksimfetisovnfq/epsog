import { useMutation } from "@tanstack/react-query"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { getProductaiValues } from "@/components/productai-select"
import type { EconomicalDsrParametersSchema } from "./economical-parameters-dsr-schema.ts"
import type { DsrApiResponse } from "@/features/dsr/types.ts"
import { getReactionTimeValue } from "@/components/reaction-time-slider/get-reaction-time-value.ts"

const mock: DsrApiResponse = {
    aggregated: {
        summary: {
            yearly_summary_table: [
                {
                    Metric: "Perkama DA (neoptimizuoto profilio)",
                    Value: "4.38 tūkst. EUR/year"
                },
                {
                    Metric: "Perkama DA (optimizuoto profilio)",
                    Value: "3.81 tūkst. EUR/year"
                },
                {
                    Metric: "Sutaupymas DA",
                    Value: "0.57 tūkst. EUR/year"
                }
            ],
            project_summary_table: [
                {
                    Metric: "INITIAL INVESTMENT",
                    Value: "1200.00 tūkst. EUR"
                },
                {
                    Metric: "TOTAL SAVINGS",
                    Value: "-102.08 tūkst. EUR"
                },
                {
                    Metric: "TOTAL POTENTIAL PROFIT (NPV)",
                    Value: "-2111.68 tūkst. EUR"
                }
            ],
            npv_chart_data: {
                years: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                npv: [-1200, -1291.1680905429373, -1382.3361810858746, -1473.504271628812, -1564.6723621717492, -1655.8404527146865, -1747.0085432576238, -1838.1766338005611, -1929.3447243434985, -2020.5128148864358, -2111.680905429373],
                dcfs: [-1200, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721],
                annual_cf: [-1200, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721, -91.16809054293721],
                break_even_point: null
            },
            revenue_cost_chart_data: {
                products: ["perkama DA", "aFRRu CAP", "aFRRd CAP", "mFRRu CAP", "mFRRd CAP", "perkama ID", "parduodama ID", "aFRRu", "aFRRd", "mFRRu", "mFRRd"],
                values: [-3.8051523599999992, 1.849831507612125, 4.222884472196999, 0.99637591851159, 0.58098123, -0.351660653257, 0.8254431980735, 0.44121740414999994, 0.10380144562500002, 0.819470268155, 0.14864862687]
            },
            utilisation_chart_data: {
                products: ["perkama DA", "aFRRu CAP", "aFRRd CAP", "mFRRu CAP", "mFRRd CAP", "perkama ID", "parduodama ID", "aFRRu", "aFRRd", "mFRRu", "mFRRd"],
                values: [100, 14.20947488584475, 21.90639269406393, 41.85216894977169, 21.71232876712329, 8.858447488584476, 20.74200913242009, 3.067922374429224, 11.435502283105023, 5.790525114155251, 9.306506849315069]
            }
        },
        markets: {
            BALANSAVIMO_PAJEGUMU_RINKA: {
                aFRR: {
                    header: "aFRR",
                    description: "AUTOMATIC FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_reserves: {
                        header: "VOLUME OF PROCURED RESERVES",
                        upward: {
                            value: 6,
                            unit: "MW"
                        },
                        downward: {
                            value: 6,
                            unit: "MW"
                        }
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        upward: {
                            value: 14.21,
                            unit: "%"
                        },
                        downward: {
                            value: 21.91,
                            unit: "%"
                        }
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: {
                            value: 1.85,
                            unit: "tūkst. EUR"
                        },
                        downward: {
                            value: 4.22,
                            unit: "tūkst. EUR"
                        }
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: {
                            value: 14.21,
                            unit: "%"
                        },
                        downward: {
                            value: 21.91,
                            unit: "%"
                        }
                    }
                },
                mFRR: {
                    header: "mFRR",
                    description: "MANUAL FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_reserves: {
                        header: "VOLUME OF PROCURED RESERVES",
                        upward: {
                            value: 6,
                            unit: "MW"
                        },
                        downward: {
                            value: 6,
                            unit: "MW"
                        }
                    },
                    utilisation: {
                        header: "UTILISATION (% OF TIME)",
                        upward: {
                            value: 41.85,
                            unit: "%"
                        },
                        downward: {
                            value: 21.71,
                            unit: "%"
                        }
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: {
                            value: 1,
                            unit: "tūkst. EUR"
                        },
                        downward: {
                            value: 0.58,
                            unit: "tūkst. EUR"
                        }
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: {
                            value: 41.85,
                            unit: "X %"
                        },
                        downward: {
                            value: 21.71,
                            unit: "X %"
                        }
                    }
                }
            },
            BALANSAVIMO_ENERGIJOS_RINKA: {
                aFRR: {
                    header: "aFRR",
                    description: "AUTOMATIC FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_energy: {
                        header: "VOLUME OF PROCURED ENERGY",
                        upward: {
                            value: 0.87,
                            unit: "X GWh"
                        },
                        downward: {
                            value: 4.34,
                            unit: "X GWh"
                        }
                    },
                    utilisation: {
                        header: "UTILISATION",
                        upward: {
                            value: 3.07,
                            unit: "X %"
                        },
                        downward: {
                            value: 11.44,
                            unit: "X %"
                        }
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: {
                            value: 0.44,
                            unit: "X tūkst. EUR"
                        },
                        downward: {
                            value: 0.1,
                            unit: "X tūkst. EUR"
                        }
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: {
                            value: 4.77,
                            unit: "X %"
                        },
                        downward: {
                            value: 14.05,
                            unit: "X %"
                        }
                    }
                },
                mFRR: {
                    header: "mFRR",
                    description: "MANUAL FREQUENCY RESTORATION RESERVE",
                    volume_of_procured_energy: {
                        header: "VOLUME OF PROCURED ENERGY",
                        upward: {
                            value: 2.87,
                            unit: "X GWh"
                        },
                        downward: {
                            value: 4.67,
                            unit: "X GWh"
                        }
                    },
                    utilisation: {
                        header: "UTILISATION",
                        upward: {
                            value: 5.79,
                            unit: "X %"
                        },
                        downward: {
                            value: 9.31,
                            unit: "X %"
                        }
                    },
                    potential_revenue: {
                        header: "POTENTIAL REVENUE",
                        upward: {
                            value: 0.82,
                            unit: "X tūkst. EUR"
                        },
                        downward: {
                            value: 0.15,
                            unit: "X tūkst. EUR"
                        }
                    },
                    bids_selected: {
                        header: "% of bids selected",
                        upward: {
                            value: 24.62,
                            unit: "X %"
                        },
                        downward: {
                            value: 18.41,
                            unit: "X %"
                        }
                    }
                }
            },
            ELEKTROS_ENERGIJOS_PREKYBA: {
                Day_Ahead: {
                    header: "Day Ahead",
                    description: "Electricity trades 24 hours ahead the physical delivery",
                    volume_of_energy_exchange: {
                        header: "VOLUME OF ENERGY EXCHANGE",
                        purchase: {
                            value: 47.08,
                            unit: "X GWh"
                        }
                    },
                    percentage_of_time: {
                        header: "% OF TIME",
                        purchase: {
                            value: 100,
                            unit: "X %"
                        }
                    },
                    potential_cost_revenue: {
                        header: "POTENTIAL COST",
                        cost: {
                            value: 3.81,
                            unit: "X tūkst. EUR"
                        }
                    }
                },
                Intraday: {
                    header: "Intraday",
                    description: "Electricity trades for energy balance restoration",
                    volume_of_energy_exchange: {
                        header: "VOLUME OF ENERGY EXCHANGE",
                        purchase: {
                            value: 3.74,
                            unit: "X GWh"
                        },
                        sale: {
                            value: 9.01,
                            unit: "X GWh"
                        }
                    },
                    percentage_of_time: {
                        header: "% OF TIME",
                        purchase: {
                            value: 8.86,
                            unit: "X %"
                        },
                        sale: {
                            value: 20.74,
                            unit: "X %"
                        }
                    },
                    potential_cost_revenue: {
                        header: "POTENTIAL COST & REVENUE",
                        cost: {
                            value: 0.35,
                            unit: "X tūkst. EUR"
                        },
                        revenue: {
                            value: 0.83,
                            unit: "X tūkst. EUR"
                        }
                    }
                }
            }
        },
        economic_results: {
            revenue_table: [
                {
                    Product: "aFRRu CAP",
                    "Value (tūkst. EUR)": 1.85
                },
                {
                    Product: "aFRRd CAP",
                    "Value (tūkst. EUR)": 4.22
                },
                {
                    Product: "mFRRu CAP",
                    "Value (tūkst. EUR)": 1
                },
                {
                    Product: "mFRRd CAP",
                    "Value (tūkst. EUR)": 0.58
                },
                {
                    Product: "parduodama ID",
                    "Value (tūkst. EUR)": 0.83
                },
                {
                    Product: "aFRRu",
                    "Value (tūkst. EUR)": 0.44
                },
                {
                    Product: "aFRRd",
                    "Value (tūkst. EUR)": 0.1
                },
                {
                    Product: "mFRRu",
                    "Value (tūkst. EUR)": 0.82
                },
                {
                    Product: "mFRRd",
                    "Value (tūkst. EUR)": 0.15
                }
            ],
            cost_table: [
                {
                    Product: "perkama DA",
                    "Value (tūkst. EUR)": 3.81
                },
                {
                    Product: "perkama ID",
                    "Value (tūkst. EUR)": 0.35
                }
            ],
            total_profit: -10.21,
            yearly_table: [
                {
                    YEAR: 0,
                    "CAPEX (tūkst. EUR)": 1200,
                    "OPEX (tūkst. EUR)": 0,
                    "CF (tūkst. EUR)": -1200,
                    "NPV (tūkst. EUR)": -1200
                },
                {
                    YEAR: 1,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -1291.17
                },
                {
                    YEAR: 2,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -1382.34
                },
                {
                    YEAR: 3,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -1473.5
                },
                {
                    YEAR: 4,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -1564.67
                },
                {
                    YEAR: 5,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -1655.84
                },
                {
                    YEAR: 6,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -1747.01
                },
                {
                    YEAR: 7,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -1838.18
                },
                {
                    YEAR: 8,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -1929.34
                },
                {
                    YEAR: 9,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -2020.51
                },
                {
                    YEAR: 10,
                    "CAPEX (tūkst. EUR)": 0,
                    "OPEX (tūkst. EUR)": 80.96,
                    "CF (tūkst. EUR)": -91.17,
                    "NPV (tūkst. EUR)": -2111.68
                }
            ]
        },
        comparison: {
            "be DSR": -4.376249485,
            "su DSR": 5.831841057937215,
            skirtumas: 10.208090542937214
        }
    },
    performance: {
        total_time: 45.497140884399414,
        preparation_time: 0.3697011470794678,
        optimization_step1_time: 40.71798229217529,
        optimization_step2_time: 4.2537994384765625,
        results_preparation_time: 0.1556401252746582
    }
}

export const useSubmitDsr = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { mutate, ...rest } = useMutation<DsrApiResponse, Error, { parameters: string }>({
        mutationKey: ["dsr"],
        mutationFn: async ({ parameters }: { parameters: string }): Promise<DsrApiResponse> => {
            const formData = new FormData()
            formData.append("parameters", parameters)

            return new Promise((resolve) => resolve(mock))
        },
    })

    const submit = (economicalParams: EconomicalDsrParametersSchema) => {
        const generalParams = location.state?.generalData
        const technicalParams = location.state?.technicalParameters?.dsr

        if (!generalParams || !technicalParams) return

        const payload = {
            Q_max: technicalParams.Q_max,
            Q_min: technicalParams.Q_min,
            Q_avg: technicalParams.Q_avg,
            T_shift: technicalParams.T_shift,
            reaction_time: getReactionTimeValue(technicalParams.reaction_time),
            CAPEX: economicalParams.CAPEX,
            OPEX: economicalParams.OPEX,
            discount_rate: economicalParams.discount_rate,
            number_of_years: economicalParams.number_of_years,
            provider: generalParams.provider,
            P_aFRRu_CAP_BSP: economicalParams.P_aFRRu_CAP_BSP,
            P_aFRRd_CAP_BSP: economicalParams.P_aFRRd_CAP_BSP,
            P_mFRRu_CAP_BSP: economicalParams.P_mFRRu_CAP_BSP,
            P_mFRRd_CAP_BSP: economicalParams.P_mFRRd_CAP_BSP,
            P_aFRRu_BSP: economicalParams.P_aFRRu_BSP,
            P_aFRRd_BSP: economicalParams.P_aFRRd_BSP,
            P_mFRRu_BSP: economicalParams.P_mFRRu_BSP,
            P_mFRRd_BSP: economicalParams.P_mFRRd_BSP,
            Sector: generalParams.concentratorName,
            produktai: getProductaiValues(technicalParams.service_type, false),
            hourly_power: technicalParams.hourly_power,
        }
    
        mutate({
            parameters: JSON.stringify(payload),
        })

        navigate({
            to: "/summary-of-results-dsr",
            state: {
                generalData: location.state.generalData,
                technicalParameters: location.state.technicalParameters,
                economicParameters: { 
                    dsr: {
                        ...technicalParams,
                        ...economicalParams
                    }
                },
            },
        })
    }

    return { submit, ...rest }
}
