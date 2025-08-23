import { useMemo } from 'react';

interface TableColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: { technology: string }) => string;
}

export const useSummaryData = () => {
    const dataSource = useMemo(() => [
        {
            key: '1',
            name: 'Įrenginio galia ir talpa',
            technology: "Lorem",
        },
        {
            key: '2',
            name: 'Aukštyn',
            technology: "Lorem",
        },
        {
            key: '3',
            name: 'Žemyn',
            technology: "Lorem",
        },
        {
            key: '4',
            name: 'Į abi puses',
            technology: "Lorem",
        },
        {
            key: '5',
            name: 'Projekto investicijos CAPEX',
            technology: "Lorem",
        },
        {
            key: '6',
            name: 'Projekto sąnaudos OPEX',
            technology: "Lorem",
        },
        {
            key: '7',
            name: 'Pasirinktos minimalios siūlymų (bids) ribos  ',
            technology: "Lorem",
        },
    ], []);

    const columns: TableColumn[] = useMemo(() => [
        {
            title: 'Vertinama technologija',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'BEKS technologija',
            dataIndex: 'technology',
            key: 'technology',
            render: (item: { technology: string }) => `${item.technology}`,
        },
    ], []);

    const secondDataSource = useMemo(() => [
        {
            key: '2',
            name: 'Potencialios sąnaudos per metus (vidurkis)',
            value: 50,
        },
        {
            key: '1',
            name: 'Potencialios pajamos per metus (vidurkis)',
            value: 20,
        },
        {
            key: '3',
            name: 'Potencialus pelnas/nuostolis per metus (vidurkis)',
            value: 70,
        },
    ], []);

    const secondBarChartLabels = useMemo(() => 
        secondDataSource.map(item => item.name), [secondDataSource]
    );

    const secondBarChartDataset = useMemo(() => [
        {
            label: 'Metiniai rezultatai',
            data: secondDataSource.map((item, idx, arr) => {
                if (idx === 1 && arr.length > 0) {
                    const firstNum = arr[0].value;
                    return [firstNum, firstNum + item.value] as [number, number];
                }
                return item.value;
            }) as number[],
            backgroundColor: [
                '#FF7070',
                '#87E6B9',
                '#B9D7E1'
            ],
        },
    ], [secondDataSource]);

    const stackedBarDataSource = useMemo(() => [
        {key: '0', name: '0', valueB: -1.9},
        {key: '1', name: '1', valueB: -1.8},
        {key: '2', name: '2', valueB: -1.7},
        {key: '3', name: '3', valueB: -2},
        {key: '4', name: '4', valueB: -0.4},
        {key: '5', name: '5', valueA: -0.2},
        {key: '6', name: '6', valueA: 1.2},
        {key: '7', name: '7', valueA: 1.7},
        {key: '8', name: '8', valueA: 2},
        {key: '9', name: '9', valueA: 1.4},
        {key: '10', name: '10', valueA: 1.7},
    ], []);

    const incomeDataSource = useMemo(() => [
        {key: '0', name: 'perkama DA', valueB: -100},
        {key: '1', name: 'parduodama DA', valueA: 200},
        {key: '2', name: 'aFRRuCAP', valueA: 100},
        {key: '3', name: 'aFRRd CAP', valueA: 440},
        {key: '4', name: 'mFRRu CAP', valueA: 230},
        {key: '5', name: 'mFRRd CAP', valueB: -200},
        {key: '6', name: 'perkama ID', valueB: -50},
        {key: '7', name: 'parduodama ID', valueB: -500},
        {key: '8', name: 'aFRRu', valueA: 140},
        {key: '9', name: 'aFRRd', valueA: 240},
        {key: '10', name: 'mFRRu', valueB: -240},
        {key: '11', name: 'mFRRd', valueB: -50},
    ], []);

    const marketProductsDataSource = useMemo(() => [
        {key: '0', name: 'perkama DA', value: 0.6},
        {key: '1', name: 'parduodama DA', value: 0.7},
        {key: '2', name: 'aFRRuCAP', value: 0.4},
        {key: '3', name: 'aFRRd CAP', value: 3},
        {key: '4', name: 'mFRRu CAP', value: 1.5},
        {key: '5', name: 'mFRRd CAP', value: 0.4},
        {key: '6', name: 'perkama ID', value: 0.2},
        {key: '7', name: 'parduodama ID', value: 3.5},
        {key: '8', name: 'aFRRu', value: 0.9},
        {key: '9', name: 'aFRRd', value: 1.5},
        {key: '10', name: 'mFRRu', value: 1.3},
        {key: '11', name: 'mFRRd', value: 0.2},
    ], []);

    const calcDataTableDataSource = useMemo(() => [
        {
            key: '1',
            parameter: 'Total Investment Cost',
            value: '€ 2,450,000',
        },
        {
            key: '2',
            parameter: 'Annual Revenue',
            value: '€ 485,750',
        },
        {
            key: '3',
            parameter: 'Payback Period',
            value: '5.8 years',
        },
        {
            key: '4',
            parameter: 'Net Present Value (NPV)',
            value: '€ 1,125,340',
        },
        {
            key: '5',
            parameter: 'Internal Rate of Return (IRR)',
            value: '18.4%',
        },
        {
            key: '6',
            parameter: 'Levelized Cost of Storage',
            value: '€ 0.089/kWh',
        }
    ], []);

    return {
        dataSource,
        columns,
        secondDataSource,
        secondBarChartLabels,
        secondBarChartDataset,
        stackedBarDataSource,
        incomeDataSource,
        marketProductsDataSource,
        calcDataTableDataSource,
    };
};
