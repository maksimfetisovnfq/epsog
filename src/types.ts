export enum CalculatorType {
    P2H = 'p2h',
    BEKS = 'beks',
    P2G = 'p2g',
    DSR = 'dsr',
}

export const CalculatorTypeTooltipsDescription: Record<CalculatorType, string> = {
    [CalculatorType.P2H]: 'Šilumos siurblio panaudojimas centrinio šildymo sistemose',
    [CalculatorType.BEKS]: 'Baterijų energijos kaupimo sistemos',
    [CalculatorType.P2G]: 'Vandenilio gamyba elektrolizės būdu',
    [CalculatorType.DSR]: 'Dinaminis apkrovos valdymas',
};

export const CalculatorTypeTooltipsTitle: Record<CalculatorType, string> = {
    [CalculatorType.P2H]: 'P2H - Power-to-Heat',
    [CalculatorType.BEKS]: 'BEKS',
    [CalculatorType.P2G]: 'P2G - Power-to-Gas',
    [CalculatorType.DSR]: 'DSR - Demand Side Response',
};

export interface P2GApiResponse {
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
        FCR: MarketReserveData;
        aFRR: BidirectionalMarketReserveData;
        mFRR: BidirectionalMarketReserveData;
      };
      BALANSAVIMO_ENERGIJOS_RINKA: {
        aFRR: BidirectionalMarketEnergyData;
        mFRR: BidirectionalMarketEnergyData;
      };
      ELEKTROS_ENERGIJOS_PREKYBA: {
        Day_Ahead: ElectricityTradingData;
      };
      VANDENILIO_PREKYBA: {
        Hydrogen_Sales: HydrogenSalesData;
      };
    };
    economic_results: {
      revenue_table: Array<{//done
        Product: string;
        "Value (tūkst. EUR)": number;
      }>;
      cost_table: Array<{//done
        Product: string;
        "Value (tūkst. EUR)": number;
      }>;
      total_profit: number;
      yearly_table: Array<{//done
        YEAR: number;
        "SOH (%)": number;
        "CAPEX (tūkst. EUR)": number;
        "OPEX (tūkst. EUR)": number;
        "CF (tūkst. EUR)": number;
        "NPV (tūkst. EUR)": number;
      }>;
    };
  };
  performance: {
    total_time: number;
    preparation_time: number;
    optimization_step1_time: number;
    optimization_step2_time: number;
    results_preparation_time: number;
  };
}

interface MarketReserveData {
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

interface BidirectionalMarketReserveData {
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

interface BidirectionalMarketEnergyData {
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

interface ElectricityTradingData {
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

interface HydrogenSalesData {
  header: string;
  description: string;
  volume_of_h2_sold: {
    header: string;
    value: number;
    unit: string;
  };
  potential_cost_revenue: {
    header: string;
    revenue: {
      value: number;
      unit: string;
    };
  };
}
