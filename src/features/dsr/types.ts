export interface DsrApiResponse {
    aggregated: AggregatedData;
    performance: PerformanceData;
}

export interface AggregatedData {
    summary: SummaryData;
    markets: MarketsData;
    economic_results: EconomicResultsData;
    comparison: ComparisonData;
}

export interface PerformanceData {
    total_time: number;
    preparation_time: number;
    optimization_step1_time: number;
    optimization_step2_time: number;
    results_preparation_time: number;
}

export interface SummaryData {
    yearly_summary_table: Array<{
        Metric: string;
        Value: string;
    }>;
    project_summary_table: Array<{
        Metric: string;
        Value: string;
    }>;
    npv_chart_data: {
        years: number[];
        npv: number[];
        dcfs: number[];
        annual_cf: number[];
        break_even_point: number | null;
    };
    revenue_cost_chart_data: {
        products: string[];
        values: number[];
    };
    utilisation_chart_data: {
        products: string[];
        values: number[];
    };
}

export interface MarketsData {
    BALANSAVIMO_PAJEGUMU_RINKA: {
        aFRR: BidirectionalMarketReserveData;
        mFRR: BidirectionalMarketReserveData;
    };
    BALANSAVIMO_ENERGIJOS_RINKA: {
        aFRR: BidirectionalMarketEnergyData;
        mFRR: BidirectionalMarketEnergyData;
    };
    ELEKTROS_ENERGIJOS_PREKYBA: {
        Day_Ahead: DayAheadTradingData;
        Intraday: IntradayTradingData;
    };
}

export interface EconomicResultsData {
    revenue_table: Array<{
        Product: string;
        "Value (tūkst. EUR)": number;
    }>;
    cost_table: Array<{
        Product: string;
        "Value (tūkst. EUR)": number;
    }>;
    total_profit: number;
    yearly_table: Array<{
        YEAR: number;
        "CAPEX (tūkst. EUR)": number;
        "OPEX (tūkst. EUR)": number;
        "CF (tūkst. EUR)": number;
        "NPV (tūkst. EUR)": number;
    }>;
}

export interface ComparisonData {
    "be DSR": number;
    "su DSR": number;
    skirtumas: number;
}

interface ValueUnitPair {
    value: number;
    unit: string;
}

interface BidirectionalData {
    header: string;
    upward: ValueUnitPair;
    downward: ValueUnitPair;
}

export interface BidirectionalMarketReserveData {
    header: string;
    description: string;
    volume_of_procured_reserves: BidirectionalData;
    utilisation: BidirectionalData;
    potential_revenue: BidirectionalData;
    bids_selected: BidirectionalData;
}

export interface BidirectionalMarketEnergyData {
    header: string;
    description: string;
    volume_of_procured_energy: BidirectionalData;
    utilisation: BidirectionalData;
    potential_revenue: BidirectionalData;
    bids_selected: BidirectionalData;
}

export interface DayAheadTradingData {
    header: string;
    description: string;
    volume_of_energy_exchange: {
        header: string;
        purchase: ValueUnitPair;
    };
    percentage_of_time: {
        header: string;
        purchase: ValueUnitPair;
    };
    potential_cost_revenue: {
        header: string;
        cost: ValueUnitPair;
    };
}

export interface IntradayTradingData {
    header: string;
    description: string;
    volume_of_energy_exchange: {
        header: string;
        purchase: ValueUnitPair;
        sale: ValueUnitPair;
    };
    percentage_of_time: {
        header: string;
        purchase: ValueUnitPair;
        sale: ValueUnitPair;
    };
    potential_cost_revenue: {
        header: string;
        cost: ValueUnitPair;
        revenue: ValueUnitPair;
    };
}
