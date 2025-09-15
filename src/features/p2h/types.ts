export interface P2hApiResponse {
  aggregated: {
    summary: {
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
    };
    markets: {
      BALANSAVIMO_PAJEGUMU_RINKA: {
        FCR: P2hMarketReserveData;
        aFRR: P2hBidirectionalMarketReserveData;
        mFRR: P2hBidirectionalMarketReserveData;
      };
      BALANSAVIMO_ENERGIJOS_RINKA: {
        aFRR: P2hBidirectionalMarketEnergyData;
        mFRR: P2hBidirectionalMarketEnergyData;
      };
      ELEKTROS_ENERGIJOS_PREKYBA: {
        Electricity_Consumption: P2hElectricityConsumptionData;
        Intraday: P2hIntradayTradingData;
        Heat_Generation: P2hHeatGenerationData;
      };
    };
    economic_results: {
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
        CAPEX: number;
        OPEX: number;
        CF: number;
        NPV: number;
      }>;
    };
    total_energy: Record<string, number>;
    average_power: Record<string, number>;
    total_time: Record<string, number>;
    total_finance: Record<string, number>;
    comparison: {
      "tik katilas": number;
      "katilas + šilumos siurblys": number;
      skirtumas: number;
    };
    yearly: Array<{
      YEAR: number;
      CAPEX: number;
      OPEX: number;
      CF: number;
      NPV: number;
    }>;
    bid_percentages: Record<string, number>;
  };
  performance: {
    total_time: number;
    preparation_time: number;
    optimization_step1_time: number;
    optimization_step2_time: number;
    results_preparation_time: number;
  };
}

interface P2hMarketReserveData {
  header: string;
  description: string;
  volume_of_procured_reserves: {
    header: string;
    value: number;
    unit: string;
  };
  utilisation: {
    header: string;
    value: number;
    unit: string;
  };
  potential_revenue: {
    header: string;
    value: number;
    unit: string;
  };
  bids_selected: {
    header: string;
    value: number;
    unit: string;
  };
}

interface P2hBidirectionalMarketReserveData {
  header: string;
  description: string;
  volume_of_procured_reserves: {
    header: string;
    upward: {
      value: number;
      unit: string;
    };
    downward: {
      value: number;
      unit: string;
    };
  };
  utilisation: {
    header: string;
    upward: {
      value: number;
      unit: string;
    };
    downward: {
      value: number;
      unit: string;
    };
  };
  potential_revenue: {
    header: string;
    upward: {
      value: number;
      unit: string;
    };
    downward: {
      value: number;
      unit: string;
    };
  };
  bids_selected: {
    header: string;
    upward: {
      value: number;
      unit: string;
    };
    downward: {
      value: number;
      unit: string;
    };
  };
}

interface P2hBidirectionalMarketEnergyData {
  header: string;
  description: string;
  volume_of_procured_energy: {
    header: string;
    upward: {
      value: number;
      unit: string;
    };
    downward: {
      value: number;
      unit: string;
    };
  };
  utilisation: {
    header: string;
    upward: {
      value: number;
      unit: string;
    };
    downward: {
      value: number;
      unit: string;
    };
  };
  potential_revenue: {
    header: string;
    upward: {
      value: number;
      unit: string;
    };
    downward: {
      value: number;
      unit: string;
    };
  };
  bids_selected: {
    header: string;
    upward: {
      value: number;
      unit: string;
    };
    downward: {
      value: number;
      unit: string;
    };
  };
}

interface P2hElectricityConsumptionData {
  header: string;
  description: string;
  volume_of_energy_exchange: {
    header: string;
    purchase: {
      value: number;
      unit: string;
    };
  };
  percentage_of_time: {
    header: string;
    purchase: {
      value: number;
      unit: string;
    };
  };
  potential_cost_revenue: {
    header: string;
    cost: {
      value: number;
      unit: string;
    };
  };
}

interface P2hIntradayTradingData {
  header: string;
  description: string;
  volume_of_energy_exchange: {
    header: string;
    purchase: {
      value: number;
      unit: string;
    };
    sale: {
      value: number;
      unit: string;
    };
  };
  percentage_of_time: {
    header: string;
    purchase: {
      value: number;
      unit: string;
    };
    sale: {
      value: number;
      unit: string;
    };
  };
  potential_cost_revenue: {
    header: string;
    cost: {
      value: number;
      unit: string;
    };
    revenue: {
      value: number;
      unit: string;
    };
  };
}

interface P2hHeatGenerationData {
  header: string;
  description: string;
  volume_of_energy_exchange: {
    header: string;
    purchase: {
      value: number;
      unit: string;
    };
  };
  percentage_of_time: {
    header: string;
    purchase: {
      value: number;
      unit: string;
    };
  };
  potential_cost_revenue: {
    header: string;
    cost: {
      value: number;
      unit: string;
    };
  };
}
