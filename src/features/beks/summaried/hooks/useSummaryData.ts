import { useMemo } from "react";
import { useLocation } from "@tanstack/react-router";

export interface YearlySummaryRow {
    Metric: string;
    Value: string;
}

export interface ProjectSummaryRow {
    Metric: string;
    Value: string;
}

export interface NPVChartData {
    years: number[];
    npv: number[];
    dcfs: number[];
    annual_cf: number[];
    break_even_point: number;
}

export interface RevenueCostChartData {
    products: string[];
    values: number[];
}

export interface UtilisationChartData {
    products: string[];
    values: number[];
}

export interface Summary {
    yearly_summary_table: YearlySummaryRow[];
    project_summary_table: ProjectSummaryRow[];
    npv_chart_data: NPVChartData;
    revenue_cost_chart_data: RevenueCostChartData;
    utilisation_chart_data: UtilisationChartData;
}

export interface AggregatedData {
    summary: Summary;
}

export interface SummaryData {
    aggregated: AggregatedData;
}

export type YearlySummaryKey = 'revenue' | 'cost' | 'profit';
export interface YearlySummaryMetric {
    key: YearlySummaryKey;
    label: string; 
    value: number;
    rawValue: string;
}

export interface IncomeDataSourceItem {
    key: string;
    name: string;
    valueA?: number;
    valueB?: number;
}

export interface MarketProductsDataSourceItem {
    key: string;
    name: string;
    value: number;
}

export interface TableRow {
    name: string;
    value: string | number;
    unit?: string;
}

export interface ModernSummaryData {
    yearlySummaryMetrics: YearlySummaryMetric[];
    npvChartData: NPVChartData;
    incomeDataSource: IncomeDataSourceItem[];
    marketProductsDataSource: MarketProductsDataSourceItem[];
    balancingCapacityFCRTable: TableRow[];
    balancingCapacityAFRRTable1: TableRow[];
    balancingCapacityAFRRTable2: TableRow[];
    balancingCapacityAFRRTable3: TableRow[];
    balancingCapacityAFRRTable4: TableRow[];
    balancingCapacityMFRRTable1: TableRow[];
    balancingCapacityMFRRTable2: TableRow[];
    balancingCapacityMFRRTable3: TableRow[];
    balancingCapacityMFRRTable4: TableRow[];
    balancingEnergyAFRRTable1: TableRow[];
    balancingEnergyAFRRTable2: TableRow[];
    balancingEnergyAFRRTable3: TableRow[];
    balancingEnergyAFRRTable4: TableRow[];
    balancingEnergyMFRRTable1: TableRow[];
    balancingEnergyMFRRTable2: TableRow[];
    balancingEnergyMFRRTable3: TableRow[];
    balancingEnergyMFRRTable4: TableRow[];
    DayAheadMarketTable1: TableRow[];
    DayAheadMarketTable2: TableRow[];
    DayAheadMarketTable3: TableRow[];
    IntradayMarketTable1: TableRow[];
    IntradayMarketTable2: TableRow[];
    IntradayMarketTable3: TableRow[];
    markets: any; // TODO: type this more strictly
    revenueTable: { Product: string; "Value (tūkst. EUR)": number }[];
    cost_table: { Product: string; "Value (tūkst. EUR)": number }[];
    detailedAnualDataSource: Array<{
        metai: number;
        ciklai: number;
        capex: number;
        opex: number;
        cf: number;
        npv: number;
    }>;
}

const yearlyMetricMap: Record<string, { key: YearlySummaryKey; label: string }> = {
    "POTENTIAL REVENUE PER YEAR (average)": { key: 'revenue', label: "Vidutinės metinės įplaukos" },
    "POTENTIAL COST PER YEAR (average)": { key: 'cost', label: "Vidutinės metinės išlados" },
    "POTENTIAL PROFIT PER YEAR (average)": { key: 'profit', label: "Vidutinės metinis pelnas/nuostolis" }
};

function parseNumberFromValue(value: string): number {
    const match = value.match(/[-+]?\d*[.,]?\d+/);
    if (!match) return 0;
    return parseFloat(match[0].replace(',', '.'));
}

export function useSummaryData(): ModernSummaryData {
    const location = useLocation();
    
    // Get API response data from navigation state, fallback to mock data
    const apiData = location.state?.apiResponseData;
    
    const data = useMemo(() => {
        // If we have API data, use it; otherwise use mock data
        if (apiData) {
            return apiData;
        }
        
        // Fallback to existing mock data
        return {
            aggregated: {
                yearly_summary_table: [
                    { Metric: "POTENTIAL REVENUE PER YEAR (average)", Value: "+20327.17 tūkst. EUR/year" },
                    { Metric: "POTENTIAL COST PER YEAR (average)", Value: "-1033.77 tūkst. EUR/year" },
                    { Metric: "POTENTIAL PROFIT PER YEAR (average)", Value: "19293.40 tūkst. EUR/year" }
                ],
                project_summary_table: [
                    { Metric: "TOTAL POTENTIAL REVENUE", Value: "+203173.67 tūkst. EUR" },
                    { Metric: "TOTAL POTENTIAL COST", Value: "-21837.68 tūkst. EUR" },
                    { Metric: "TOTAL POTENTIAL PROFIT", Value: "136375.81 tūkst. EUR" }
                ],
                npv_chart_data: {
                    years: [0,1,2,3,4,5,6,7,8,9,10],
                    npv: [
                        -12533.767830868934, 5840.898092848833, 23338.60455853327, 40001.205605444426, 55868.55774406483, 70978.61528981692, 85367.52114692259, 99069.69325954826, 112117.90693701606, 124543.37324999266, 136375.81368517003
                    ],
                    dcfs: [
                        -12533.767830868934, 18374.665923717766, 17497.706465684438, 16662.601046911157, 15867.3521386204, 15110.057545752094, 14388.905857105665, 13702.172112625673, 13048.213677467798, 12425.466312976601, 11832.440435177383
                    ],
                    annual_cf: [
                        -12533.767830868934, 19293.399219903655, 19291.221378417093, 19289.04353693053, 19286.865695443965, 19284.687853957403, 19282.510012470837, 19280.33217098427, 19278.15432949771, 19275.976488011143, 19273.798646524578
                    ],
                    break_even_point: 1
                },
                revenue_cost_chart_data: {
                    products: [
                        "perkama DA", "parduodama DA", "FCR CAP", "aFRRu CAP", "aFRRd CAP", "mFRRu CAP", "mFRRd CAP", "perkama ID", "parduodama ID", "aFRRu", "aFRRd", "mFRRu", "mFRRd"
                    ],
                    values: [
                        -1388.1596993151395, 2470.048197981263, 1012.1107170363086, 2861.6236494962163, 11201.623284103593, 1769.6737042694406, 2010.4498995203319, -131.1778259604421, 137.72293421771806, 80.22816269425306, 116.86899791495514, 185.9327784499577, 2.400091850703236
                    ]
                },
                utilisation_chart_data: {
                    products: [
                        "perkama DA", "parduodama DA", "FCR CAP", "aFRRu CAP", "mFRRu CAP", "aFRRd CAP", "mFRRd CAP", "perkama ID", "parduodama ID", "aFRRu", "aFRRd", "mFRRu", "mFRRd"
                    ],
                    values: [
                        28.139269406392692, 27.45433789954338, 2.7568493150684934, 1.82648401826484, 7.511415525114155, 8.324771689497718, 0.4452054794520548, 1.6409817351598175, 4.777397260273973, 0.5079908675799087, 4.577625570776256, 1.1329908675799087, 0.1997716894977169
                    ]
                }
            },
            markets: {
                BALANSAVIMO_PAJEGUMU_RINKA: {
                    FCR: {
                        header: "FCR",
                        description: "FREQUENCY CONTAINMENT RESERVE",
                        volume_of_procured_reserves: {
                            header: "VOLUME OF PROCURED RESERVES",
                            value: 3.36,
                            unit: "X MW"
                        },
                        utilisation: {
                            header: "UTILISATION (% OF TIME)",
                            value: 2.76,
                            unit: "X %"
                        },
                        potential_revenue: {
                            header: "POTENTIAL REVENUE",
                            value: 1012.11,
                            unit: "X tūkst. EUR"
                        },
                        bids_selected: {
                            header: "% of bids selected",
                            value: 2.57,
                            unit: "X %"
                        }
                    },
                    aFRR: {
                        header: "aFRR",
                        description: "AUTOMATIC FREQUENCY RESTORATION RESERVE",
                        volume_of_procured_reserves: {
                            header: "VOLUME OF PROCURED RESERVES",
                            upward: { value: 7.17, unit: "X MW" },
                            downward: { value: 7.92, unit: "X MW" }
                        },
                        utilisation: {
                            header: "UTILISATION (% OF TIME)",
                            upward: { value: 1.83, unit: "X %" },
                            downward: { value: 8.32, unit: "X %" }
                        },
                        potential_revenue: {
                            header: "POTENTIAL REVENUE",
                            upward: { value: 2861.62, unit: "X tūkst. EUR" },
                            downward: { value: 11201.62, unit: "X tūkst. EUR" }
                        },
                        bids_selected: {
                            header: "% of bids selected",
                            upward: { value: 1.78, unit: "X %" },
                            downward: { value: 8.12, unit: "X %" }
                        }
                    },
                    mFRR: {
                        header: "mFRR",
                        description: "MANUAL FREQUENCY RESTORATION RESERVE",
                        volume_of_procured_reserves: {
                            header: "VOLUME OF PROCURED RESERVES",
                            upward: { value: 5.97, unit: "X MW" },
                            downward: { value: 8.17, unit: "X MW" }
                        },
                        utilisation: {
                            header: "UTILISATION (% OF TIME)",
                            upward: { value: 7.51, unit: "X %" },
                            downward: { value: 0.45, unit: "X %" }
                        },
                        potential_revenue: {
                            header: "POTENTIAL REVENUE",
                            upward: { value: 1769.67, unit: "X tūkst. EUR" },
                            downward: { value: 2010.45, unit: "X tūkst. EUR" }
                        },
                        bids_selected: {
                            header: "% of bids selected",
                            upward: { value: 7.27, unit: "X %" },
                            downward: { value: 0.44, unit: "X %" }
                        }
                    }
                },
                BALANSAVIMO_ENERGIJOS_RINKA: {
                    aFRR: {
                        header: "aFRR",
                        description: "AUTOMATIC FREQUENCY RESTORATION RESERVE",
                        volume_of_procured_energy: {
                            header: "VOLUME OF PROCURED ENERGY",
                            upward: { value: 166.71, unit: "X MWh" },
                            downward: { value: 2312.74, unit: "X MWh" }
                        },
                        utilisation: {
                            header: "UTILISATION",
                            upward: { value: 0.51, unit: "X %" },
                            downward: { value: 4.58, unit: "X %" }
                        },
                        potential_revenue: {
                            header: "POTENTIAL REVENUE",
                            upward: { value: 80.23, unit: "X tūkst. EUR" },
                            downward: { value: 116.87, unit: "X tūkst. EUR" }
                        },
                        bids_selected: {
                            header: "% of bids selected",
                            upward: { value: 0.79, unit: "X %" },
                            downward: { value: 5.76, unit: "X %" }
                        }
                    },
                    mFRR: {
                        header: "mFRR",
                        description: "MANUAL FREQUENCY RESTORATION RESERVE",
                        volume_of_procured_energy: {
                            header: "VOLUME OF PROCURED ENERGY",
                            upward: { value: 559.62, unit: "X MWh" },
                            downward: { value: 107.6, unit: "X MWh" }
                        },
                        utilisation: {
                            header: "UTILISATION",
                            upward: { value: 1.13, unit: "X %" },
                            downward: { value: 0.2, unit: "X %" }
                        },
                        potential_revenue: {
                            header: "POTENTIAL REVENUE",
                            upward: { value: 185.93, unit: "X tūkst. EUR" },
                            downward: { value: 2.4, unit: "X tūkst. EUR" }
                        },
                        bids_selected: {
                            header: "% of bids selected",
                            upward: { value: 4.69, unit: "X %" },
                            downward: { value: 0.42, unit: "X %" }
                        }
                    }
                },
                ELEKTROS_ENERGIJOS_PREKYBA: {
                    Day_Ahead: {
                        header: "Day Ahead",
                        description: "Electricity trades 24 hours ahead the physical delivery",
                        volume_of_energy_exchange: {
                            header: "VOLUME OF ENERGY EXCHANGE",
                            purchase: { value: 21468.08, unit: "X MWh" },
                            sale: { value: 18446.23, unit: "X MWh" }
                        },
                        percentage_of_time: {
                            header: "% OF TIME",
                            purchase: { value: 28.14, unit: "X %" },
                            sale: { value: 27.45, unit: "X %" }
                        },
                        potential_cost_revenue: {
                            header: "POTENTIAL COST & REVENUE",
                            cost: { value: 1388.16, unit: "X tūkst. EUR" },
                            revenue: { value: 2470.05, unit: "X tūkst. EUR" }
                        }
                    },
                    Intraday: {
                        header: "Intraday",
                        description: "Electricity trades 1 hour ahead the physical delivery",
                        volume_of_energy_exchange: {
                            header: "VOLUME OF ENERGY EXCHANGE",
                            purchase: { value: 726.32, unit: "X MWh" },
                            sale: { value: 2420.34, unit: "X MWh" }
                        },
                        percentage_of_time: {
                            header: "% OF TIME",
                            purchase: { value: 1.64, unit: "X %" },
                            sale: { value: 4.78, unit: "X %" }
                        },
                        potential_cost_revenue: {
                            header: "POTENTIAL COST & REVENUE",
                            cost: { value: 131.18, unit: "X tūkst. EUR" },
                            revenue: { value: 137.72, unit: "X tūkst. EUR" }
                        }
                    }
                }
            },
            economic_results: {
                revenue_table: [
                    { Product: "parduodama DA", "Value (tūkst. EUR)": 2470.048197981263 },
                    { Product: "FCR CAP", "Value (tūkst. EUR)": 1012.1107170363086 },
                    { Product: "aFRRu CAP", "Value (tūkst. EUR)": 2861.6236494962163 },
                    { Product: "aFRRd CAP", "Value (tūkst. EUR)": 11201.623284103593 },
                    { Product: "mFRRu CAP", "Value (tūkst. EUR)": 1769.6737042694406 },
                    { Product: "mFRRd CAP", "Value (tūkst. EUR)": 2010.4498995203319 },
                    { Product: "parduodama ID", "Value (tūkst. EUR)": 137.72293421771806 },
                    { Product: "aFRRu", "Value (tūkst. EUR)": 80.22816269425306 },
                    { Product: "aFRRd", "Value (tūkst. EUR)": 116.86899791495514 },
                    { Product: "mFRRu", "Value (tūkst. EUR)": 185.9327784499577 },
                    { Product: "mFRRd", "Value (tūkst. EUR)": 2.400091850703236 }
                ],
                cost_table: [
                    { Product: "perkama DA", "Value (tūkst. EUR)": 1388.1596993151395 },
                    { Product: "perkama ID", "Value (tūkst. EUR)": 131.1778259604421 }
                ],
                total_profit: 20329.344892259156,
                yearly_table: [
                    { YEAR: 0, CYCLES: 0, "SOH (%)": 100, "CAPEX (tūkst. EUR)": 11500, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 0, "NPV (tūkst. EUR)": -12533.77 },
                    { YEAR: 1, CYCLES: 5.36, "SOH (%)": 99.99, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20327.17, "NPV (tūkst. EUR)": 5840.9 },
                    { YEAR: 2, CYCLES: 10.71, "SOH (%)": 99.98, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20324.99, "NPV (tūkst. EUR)": 23338.6 },
                    { YEAR: 3, CYCLES: 16.07, "SOH (%)": 99.97, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20322.81, "NPV (tūkst. EUR)": 40001.21 },
                    { YEAR: 4, CYCLES: 21.43, "SOH (%)": 99.96, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20320.63, "NPV (tūkst. EUR)": 55868.56 },
                    { YEAR: 5, CYCLES: 26.78, "SOH (%)": 99.95, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20318.46, "NPV (tūkst. EUR)": 70978.62 },
                    { YEAR: 6, CYCLES: 32.14, "SOH (%)": 99.94, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20316.28, "NPV (tūkst. EUR)": 85367.52 },
                    { YEAR: 7, CYCLES: 37.49, "SOH (%)": 99.93, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20314.1, "NPV (tūkst. EUR)": 99069.69 },
                    { YEAR: 8, CYCLES: 42.85, "SOH (%)": 99.91, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20311.92, "NPV (tūkst. EUR)": 112117.91 },
                    { YEAR: 9, CYCLES: 48.21, "SOH (%)": 99.9, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20309.74, "NPV (tūkst. EUR)": 124543.37 },
                    { YEAR: 10, CYCLES: 53.56, "SOH (%)": 99.89, "CAPEX (tūkst. EUR)": 0, "OPEX (tūkst. EUR)": 1033.77, "CF (tūkst. EUR)": 20307.57, "NPV (tūkst. EUR)": 136375.81 }
                ]
            },
            total_energy: {
                "perkama DA": 21468.08216189303,
                "parduodama DA": 18446.234032989894,
                "perkama ID": 726.3245827974291,
                "parduodama ID": 2420.3441700857165,
                "aFRRu": 166.7058777691175,
                "aFRRd": 2312.7447776636855,
                "mFRRu": 559.6187050283116,
                "mFRRd": 107.59939242203112
            },
            average_power: {
                "FCR CAP": 3.3611281205899664,
                "aFRRu CAP": 7.174183664101763,
                "aFRRd CAP": 7.924047089801816,
                "mFRRu CAP": 5.968415637413811,
                "mFRRd CAP": 8.168803270942323
            },
            total_time: {
                "perkama DA": 28.139269406392692,
                "parduodama DA": 27.45433789954338,
                "FCR CAP": 2.7568493150684934,
                "aFRRu CAP": 1.82648401826484,
                "mFRRu CAP": 7.511415525114155,
                "aFRRd CAP": 8.324771689497718,
                "mFRRd CAP": 0.4452054794520548,
                "perkama ID": 1.6409817351598175,
                "parduodama ID": 4.777397260273973,
                "aFRRu": 0.5079908675799087,
                "aFRRd": 4.577625570776256,
                "mFRRu": 1.1329908675799087,
                "mFRRd": 0.1997716894977169
            },
            total_finance: {
                "perkama DA": -1388.1596993151395,
                "parduodama DA": 2470.048197981263,
                "FCR CAP": 1012.1107170363086,
                "aFRRu CAP": 2861.6236494962163,
                "aFRRd CAP": 11201.623284103593,
                "mFRRu CAP": 1769.6737042694406,
                "mFRRd CAP": 2010.4498995203319,
                "perkama ID": -131.1778259604421,
                "parduodama ID": 137.72293421771806,
                "aFRRu": 80.22816269425306,
                "aFRRd": 116.86899791495514,
                "mFRRu": 185.9327784499577,
                "mFRRd": 2.400091850703236
            },
            comparison: {
                BEKS: 20329.344892259156
            }
        };
    }, [apiData]);

    const yearlySummaryMetrics: YearlySummaryMetric[] = data.aggregated.summary.yearly_summary_table.map(row => {
        const map = yearlyMetricMap[row.Metric];
        return {
            key: map?.key || (row.Metric as YearlySummaryKey),
            label: map?.label || row.Metric,
            value: parseNumberFromValue(row.Value),
            rawValue: row.Value
        };
    });

    const incomeDataSource: IncomeDataSourceItem[] = data.aggregated.summary.revenue_cost_chart_data.products.map((product, idx) => ({
        key: String(idx),
        name: product,
        valueA: data.aggregated.summary.revenue_cost_chart_data.values[idx],
    }));

    const marketProductsDataSource: MarketProductsDataSourceItem[] = data.aggregated.summary.utilisation_chart_data.products.map((product, idx) => ({
        key: String(idx),
        name: product,
        value: data.aggregated.summary.utilisation_chart_data.values[idx],
    }));

    //FCR
    const fcr = data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.FCR;
    const balancingCapacityFCRTable: TableRow[] = [
        { name: 'Įsigytų pajėgumų apimtys', value: fcr.volume_of_procured_reserves.value, unit: fcr.volume_of_procured_reserves.unit },
        { name: 'Dalyvavimas paslaugoje', value: fcr.utilisation.value, unit: fcr.utilisation.unit },
        { name: 'Potencialios pajamos/sąnaudos', value: fcr.potential_revenue.value, unit: fcr.potential_revenue.unit },
        { name: 'Priimtų kainos pasiūlymų dalis, proc.', value: fcr.bids_selected.value, unit: fcr.bids_selected.unit },
    ];
    //balancingCapacity aFRR
    const capacityAfrr = data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.aFRR;
    const balancingCapacityAFRRTable1: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: capacityAfrr.volume_of_procured_reserves.upward.value, unit: capacityAfrr.volume_of_procured_reserves.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: capacityAfrr.volume_of_procured_reserves.downward.value, unit: capacityAfrr.volume_of_procured_reserves.downward.unit },
    ];
    const balancingCapacityAFRRTable2: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: capacityAfrr.utilisation.upward.value, unit: capacityAfrr.utilisation.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: capacityAfrr.utilisation.downward.value, unit: capacityAfrr.utilisation.downward.unit },
    ];
    const balancingCapacityAFRRTable3: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: capacityAfrr.potential_revenue.upward.value, unit: capacityAfrr.potential_revenue.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: capacityAfrr.potential_revenue.downward.value, unit: capacityAfrr.potential_revenue.downward.unit },
    ];
    const balancingCapacityAFRRTable4: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: capacityAfrr.bids_selected.upward.value, unit: capacityAfrr.bids_selected.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: capacityAfrr.bids_selected.downward.value, unit: capacityAfrr.bids_selected.downward.unit },
    ];
    //balancingCapacity mFRR
    const capacityMfrr = data.aggregated.markets.BALANSAVIMO_PAJEGUMU_RINKA.mFRR;
    const balancingCapacityMFRRTable1: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: capacityMfrr.volume_of_procured_reserves.upward.value, unit: capacityMfrr.volume_of_procured_reserves.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: capacityMfrr.volume_of_procured_reserves.downward.value, unit: capacityMfrr.volume_of_procured_reserves.downward.unit },
    ];
    const balancingCapacityMFRRTable2: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: capacityMfrr.utilisation.upward.value, unit: capacityMfrr.utilisation.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: capacityMfrr.utilisation.downward.value, unit: capacityMfrr.utilisation.downward.unit },
    ];
    const balancingCapacityMFRRTable3: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: capacityMfrr.potential_revenue.upward.value, unit: capacityMfrr.potential_revenue.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: capacityMfrr.potential_revenue.downward.value, unit: capacityMfrr.potential_revenue.downward.unit },
    ];
    // const balancingCapacityMFRRTabl  //balancingEnergy mFRR
    // const energyMfrr = data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR;
    // const balancingEnergyMFRRTable1: TableRow[] = [
    //     { name: 'Aukštyn (angl. Upward)', value: energyMfrr.volume_of_procured_energy.upward.value, unit: energyMfrr.volume_of_procured_energy.upward.unit },
    //     { name: 'Žemyn (angl. Downward)', value: energyMfrr.volume_of_procured_energy.downward.value, unit: energyMfrr.volume_of_procured_energy.downward.unit },
    // ];e4: TableRow[] = [
    //     { name: 'Aukštyn (angl. Upward)', value: capacityMfrr.bids_selected.upward.value, unit: capacityMfrr.bids_selected.upward.unit },
    //     { name: 'Žemyn (angl. Downward)', value: capacityMfrr.bids_selected.downward.value, unit: capacityMfrr.bids_selected.downward.unit },
    // ];
    
    //balancingEnergy aFRR
    const energyAfrr = data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.aFRR;
    const balancingEnergyAFRRTable1: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: energyAfrr.volume_of_procured_energy.upward.value, unit: energyAfrr.volume_of_procured_energy.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: energyAfrr.volume_of_procured_energy.downward.value, unit: energyAfrr.volume_of_procured_energy.downward.unit },
    ];
    const balancingEnergyAFRRTable2: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: energyAfrr.utilisation.upward.value, unit: energyAfrr.utilisation.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: energyAfrr.utilisation.downward.value, unit: energyAfrr.utilisation.downward.unit },
    ];
    const balancingEnergyAFRRTable3: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: energyAfrr.potential_revenue.upward.value, unit: energyAfrr.potential_revenue.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: energyAfrr.potential_revenue.downward.value, unit: energyAfrr.potential_revenue.downward.unit },
    ];
    const balancingEnergyAFRRTable4: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: energyAfrr.bids_selected.upward.value, unit: energyAfrr.bids_selected.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: energyAfrr.bids_selected.downward.value, unit: energyAfrr.bids_selected.downward.unit },
    ];
    //balancingEnergy mFRR
    const energyMfrr = data.aggregated.markets.BALANSAVIMO_ENERGIJOS_RINKA.mFRR;
    const balancingEnergyMFRRTable1: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: energyMfrr.volume_of_procured_energy.upward.value, unit: energyMfrr.volume_of_procured_energy.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: energyMfrr.volume_of_procured_energy.downward.value, unit: energyMfrr.volume_of_procured_energy.downward.unit },
    ];
    const balancingEnergyMFRRTable2: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: energyMfrr.utilisation.upward.value, unit: energyMfrr.utilisation.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: energyMfrr.utilisation.downward.value, unit: energyMfrr.utilisation.downward.unit },
    ];
    const balancingEnergyMFRRTable3: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: energyMfrr.potential_revenue.upward.value, unit: energyMfrr.potential_revenue.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: energyMfrr.potential_revenue.downward.value, unit: energyMfrr.potential_revenue.downward.unit },
    ];
    const balancingEnergyMFRRTable4: TableRow[] = [
        { name: 'Aukštyn (angl. Upward)', value: energyMfrr.bids_selected.upward.value, unit: energyMfrr.bids_selected.upward.unit },
        { name: 'Žemyn (angl. Downward)', value: energyMfrr.bids_selected.downward.value, unit: energyMfrr.bids_selected.downward.unit },
    ];

    //electricityTrading Diena prieš (angl. Day-Ahead) rinka
    const DayAheadMarket = data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Day_Ahead;
    const DayAheadMarketTable1: TableRow[] = [
        { name: 'Nupirkta', value: DayAheadMarket.volume_of_energy_exchange.purchase.value, unit: DayAheadMarket.volume_of_energy_exchange.purchase.unit },
        { name: 'Parduota', value: DayAheadMarket.volume_of_energy_exchange.sale.value, unit: DayAheadMarket.volume_of_energy_exchange.sale.unit },
    ];
    const DayAheadMarketTable2: TableRow[] = [
        { name: 'Nupirkta', value: DayAheadMarket.percentage_of_time.purchase.value, unit: DayAheadMarket.percentage_of_time.purchase.unit },
        { name: 'Parduota', value: DayAheadMarket.percentage_of_time.sale.value, unit: DayAheadMarket.percentage_of_time.sale.unit },
    ];
    const DayAheadMarketTable3: TableRow[] = [
        { name: 'Sąnaudos', value: DayAheadMarket.potential_cost_revenue.cost.value, unit: DayAheadMarket.potential_cost_revenue.cost.unit },
        { name: 'Pajamos', value: DayAheadMarket.potential_cost_revenue.revenue.value, unit: DayAheadMarket.potential_cost_revenue.revenue.unit },
    ];
    //electricityTrading Dienos eigos (angl. Intraday) rinka
    const IntradayMarket = data.aggregated.markets.ELEKTROS_ENERGIJOS_PREKYBA.Intraday;
    const IntradayMarketTable1: TableRow[] = [
        { name: 'Nupirkta', value: IntradayMarket.volume_of_energy_exchange.purchase.value, unit: IntradayMarket.volume_of_energy_exchange.purchase.unit },
        { name: 'Parduota', value: IntradayMarket.volume_of_energy_exchange.sale.value, unit: IntradayMarket.volume_of_energy_exchange.sale.unit },
    ];
    const IntradayMarketTable2: TableRow[] = [
        { name: 'Nupirkta', value: IntradayMarket.percentage_of_time.purchase.value, unit: IntradayMarket.percentage_of_time.purchase.unit },
        { name: 'Parduota', value: IntradayMarket.percentage_of_time.sale.value, unit: IntradayMarket.percentage_of_time.sale.unit },
    ];
    const IntradayMarketTable3: TableRow[] = [
        { name: 'Sąnaudos', value: IntradayMarket.potential_cost_revenue.cost.value, unit: IntradayMarket.potential_cost_revenue.cost.unit },
        { name: 'Pajamos', value: IntradayMarket.potential_cost_revenue.revenue.value, unit: IntradayMarket.potential_cost_revenue.revenue.unit },
    ];
    
    return {
        yearlySummaryMetrics,
        npvChartData: data.aggregated.summary.npv_chart_data,
        incomeDataSource,
        marketProductsDataSource,
        balancingCapacityFCRTable,
        balancingCapacityAFRRTable1,
        balancingCapacityAFRRTable2,
        balancingCapacityAFRRTable3,
        balancingCapacityAFRRTable4,
        balancingCapacityMFRRTable1,
        balancingCapacityMFRRTable2,
        balancingCapacityMFRRTable3,
        balancingCapacityMFRRTable4,
        balancingEnergyAFRRTable1,
        balancingEnergyAFRRTable2,
        balancingEnergyAFRRTable3,
        balancingEnergyAFRRTable4,
        balancingEnergyMFRRTable1,
        balancingEnergyMFRRTable2,
        balancingEnergyMFRRTable3,
        balancingEnergyMFRRTable4,
        DayAheadMarketTable1,
        DayAheadMarketTable2,
        DayAheadMarketTable3,
        IntradayMarketTable1,
        IntradayMarketTable2,
        IntradayMarketTable3,
        revenueTable: data.aggregated.economic_results.revenue_table,
        cost_table: data.aggregated.economic_results.cost_table,
        detailedAnualDataSource: data.aggregated.economic_results.yearly_table.map((row: any) => ({
            metai: row["YEAR"],
            ciklai: row["CYCLES"],
            capex: row["CAPEX (tūkst. EUR)"],
            opex: row["OPEX (tūkst. EUR)"],
            cf: row["CF (tūkst. EUR)"],
            npv: row["NPV (tūkst. EUR)"],
        })),
    };
}
