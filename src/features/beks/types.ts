export interface BeksApiResponse {
    aggregated: {
        summary: {
            yearly_summary_table: Array<{
                Metric: string
                Value: string
            }>
            project_summary_table: Array<{
                Metric: string
                Value: string
            }>
            npv_chart_data: {
                years: number[]
                npv: number[]
                dcfs: number[]
                annual_cf: number[]
                break_even_point: number | null
            }
            revenue_cost_chart_data: {
                products: string[]
                values: number[]
            }
            utilisation_chart_data: {
                products: string[]
                values: number[]
            }
        }
        markets: {
            BALANSAVIMO_PAJEGUMU_RINKA: {
                FCR: MarketReserveData
                aFRR: BidirectionalMarketReserveData
                mFRR: BidirectionalMarketReserveData
            }
            BALANSAVIMO_ENERGIJOS_RINKA: {
                aFRR: BidirectionalMarketEnergyData
                mFRR: BidirectionalMarketEnergyData
            }
            ELEKTROS_ENERGIJOS_PREKYBA: {
                Day_Ahead: ElectricityTradingData
                Intraday: ElectricityTradingData
            }
        }
        economic_results: {
            revenue_table: Array<{
                Product: string
                "Value (tūkst. EUR)": number
            }>
            cost_table: Array<{
                Product: string
                "Value (tūkst. EUR)": number
            }>
            total_profit: number
            yearly_table: Array<{
                YEAR: number
                CYCLES: number
                "SOH (%)": number
                "CAPEX (tūkst. EUR)": number
                "OPEX (tūkst. EUR)": number
                "CF (tūkst. EUR)": number
                "NPV (tūkst. EUR)": number
            }>
        }
        total_energy: {
            "perkama DA": number
            "parduodama DA": number
            "perkama ID": number
            "parduodama ID": number
            aFRRu: number
            aFRRd: number
            mFRRu: number
            mFRRd: number
        }
        average_power: {
            "FCR CAP": number
            "aFRRu CAP": number
            "aFRRd CAP": number
            "mFRRu CAP": number
            "mFRRd CAP": number
        }
        total_time: {
            "perkama DA": number
            "parduodama DA": number
            "FCR CAP": number
            "aFRRu CAP": number
            "mFRRu CAP": number
            "aFRRd CAP": number
            "mFRRd CAP": number
            "perkama ID": number
            "parduodama ID": number
            aFRRu: number
            aFRRd: number
            mFRRu: number
            mFRRd: number
        }
        total_finance: {
            "perkama DA": number
            "parduodama DA": number
            "FCR CAP": number
            "aFRRu CAP": number
            "aFRRd CAP": number
            "mFRRu CAP": number
            "mFRRd CAP": number
            "perkama ID": number
            "parduodama ID": number
            aFRRu: number
            aFRRd: number
            mFRRu: number
            mFRRd: number
        }
        comparison: {
            BEKS: number
        }
    }
}

interface MarketReserveData {
    header: string
    description: string
    volume_of_procured_reserves: {
        header: string
        value: number
        unit: string
    }
    utilisation: {
        header: string
        value: number
        unit: string
    }
    potential_revenue: {
        header: string
        value: number
        unit: string
    }
    bids_selected: {
        header: string
        value: number
        unit: string
    }
}

interface BidirectionalMarketReserveData {
    header: string
    description: string
    volume_of_procured_reserves: {
        header: string
        upward: {
            value: number
            unit: string
        }
        downward: {
            value: number
            unit: string
        }
    }
    utilisation: {
        header: string
        upward: {
            value: number
            unit: string
        }
        downward: {
            value: number
            unit: string
        }
    }
    potential_revenue: {
        header: string
        upward: {
            value: number
            unit: string
        }
        downward: {
            value: number
            unit: string
        }
    }
    bids_selected: {
        header: string
        upward: {
            value: number
            unit: string
        }
        downward: {
            value: number
            unit: string
        }
    }
}

interface BidirectionalMarketEnergyData {
    header: string
    description: string
    volume_of_procured_energy: {
        header: string
        upward: {
            value: number
            unit: string
        }
        downward: {
            value: number
            unit: string
        }
    }
    utilisation: {
        header: string
        upward: {
            value: number
            unit: string
        }
        downward: {
            value: number
            unit: string
        }
    }
    potential_revenue: {
        header: string
        upward: {
            value: number
            unit: string
        }
        downward: {
            value: number
            unit: string
        }
    }
    bids_selected: {
        header: string
        upward: {
            value: number
            unit: string
        }
        downward: {
            value: number
            unit: string
        }
    }
}

interface ElectricityTradingData {
    header: string
    description: string
    volume_of_energy_exchange: {
        header: string
        purchase: {
            value: number
            unit: string
        }
        sale: {
            value: number
            unit: string
        }
    }
    percentage_of_time: {
        header: string
        purchase: {
            value: number
            unit: string
        }
        sale: {
            value: number
            unit: string
        }
    }
    potential_cost_revenue: {
        header: string
        cost: {
            value: number
            unit: string
        }
        revenue: {
            value: number
            unit: string
        }
    }
}
