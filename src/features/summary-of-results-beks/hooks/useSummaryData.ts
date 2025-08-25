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

    const calcDataTableDataSource1 = useMemo(() => [
        {
            key: '1',
            parameter: 'Aukštyn (angl. Upward)',
            value: '0.59',
        },
        {
            key: '2',
            parameter: 'Žemyn (angl. Downward)',
            value: '0.79',
        }
    ], []);

    const calcDataTableDataSource2 = useMemo(() => [
        {
            key: '1',
            parameter: 'Aukštyn (angl. Upward)',
            value: '1.20',
        },
        {
            key: '2',
            parameter: 'Žemyn (angl. Downward)',
            value: '4.37',
        }
    ], []);

    const calcDataTableDataSource3 = useMemo(() => [
        {
            key: '1',
            parameter: 'Aukštyn (angl. Upward)',
            value: '188.64',
        },
        {
            key: '2',
            parameter: 'Žemyn (angl. Downward)',
            value: '576.26',
        }
    ], []);

    const calcDataTableDataSource4 = useMemo(() => [
        {
            key: '1',
            parameter: 'Aukštyn (angl. Upward)',
            value: '1.16',
        },
        {
            key: '2',
            parameter: 'Žemyn (angl. Downward)',
            value: '10.49',
        }
    ], []);
    const calcDataTableDataSource5 = useMemo(() => [
        {
            key: '1',
            parameter: 'Aukštyn (angl. Upward)',
            value: '0.61',
        },
        {
            key: '2',
            parameter: 'Žemyn (angl. Downward)',
            value: '0.81',
        }
    ], []);

    const calcDataTableDataSource6 = useMemo(() => [
        {
            key: '1',
            parameter: 'Aukštyn (angl. Upward)',
            value: '4.66',
        },
        {
            key: '2',
            parameter: 'Žemyn (angl. Downward)',
            value: '0.25',
        }
    ], []);

    const calcDataTableDataSource7 = useMemo(() => [
        {
            key: '1',
            parameter: 'Aukštyn (angl. Upward)',
            value: '105.28',
        },
        {
            key: '2',
            parameter: 'Žemyn (angl. Downward)',
            value: '137.96',
        }
    ], []);

    const calcDataTableDataSource8 = useMemo(() => [
        {
            key: '1',
            parameter: 'Aukštyn (angl. Upward)',
            value: '4.50',
        },
        {
            key: '2',
            parameter: 'Žemyn (angl. Downward)',
            value: '0.24',
        }
    ], []);

    const FCR = useMemo(() => [
        {
            key: '1',
            name: 'Įsigytų pajėgumų apimtys',
            value: 0,
        },
        {
            key: '2',
            name: 'Dalyvavimas paslaugoje',
            value: 0,
        },
        {
            key: '3',
            name: 'Potencialios pajamos/sąnaudos',
            value: 0,
        },
        {
            key: '4',
            name: 'Priimtų kainos pasiūlymų dalis, proc.',
            value: 0,
        },
    ], []);

    const
        electricityTradeDataSource1 = useMemo(() => [
        {
            key: '1',
            parameter: 'Nupirkta',
            value: 657.35,
        },
        {
            key: '2',
            parameter: 'Parduota',
            value: 583.65,
        }
    ], []);

    const
        electricityTradeDataSource2 = useMemo(() => [
            {
                key: '1',
                parameter: 'Nupirkta',
                value: 3.54,
            },
            {
                key: '2',
                parameter: 'Parduota',
                value: 4.39,
            }
        ], []);

    const
        electricityTradeDataSource3 = useMemo(() => [
            {
                key: '1',
                parameter: 'Nupirkta',
                value: 38.23,
            },
            {
                key: '2',
                parameter: 'Parduota',
                value: 97.35,
            }
        ], []);

    const
        electricityTradeDataSource4 = useMemo(() => [
            {
                key: '1',
                parameter: 'Nupirkta',
                value: 226.31,
            },
            {
                key: '2',
                parameter: 'Parduota',
                value: -11308.35,
            }
        ], []);

    const
        electricityTradeDataSource5 = useMemo(() => [
            {
                key: '1',
                parameter: 'Nupirkta',
                value: 1.19,
            },
            {
                key: '2',
                parameter: 'Parduota',
                value: 3.82,
            }
        ], []);

    const
        electricityTradeDataSource6 = useMemo(() => [
            {
                key: '1',
                parameter: 'Nupirkta',
                value: '45.38',
            },
            {
                key: '2',
                parameter: 'Parduota',
                value: '-804.45',
            }
        ], []);

    const economicEvaluationDataSource = useMemo(() => [
        {
            key: '1',
            name: 'Parduota elektros energija "Diena prieš" rinkoje',
            value: 97.3491,
        },
        {
            key: '2',
            name: 'aFRR Aukštyn pajėgumas',
            value: 188.6449,
        },
        {
            key: '3',
            name: 'aFRR Žemyn pajėgumas',
            value: 576.2646,
        },
        {
            key: '4',
            name: 'aFRR Aukštyn pajėgumas',
            value: 105.2834,
        },
        {
            key: '5',
            name: 'mFRR Žemyn pajėgumas',
            value: 137.9616,
        },
        {
            key: '6',
            name: 'aFRR Aukštyn energija',
            value: 11.69,
        },
        {
            key: '7',
            name: 'aFRR Žemyn energija',
            value: 27.96,
        },
        {
            key: '8',
            name: 'mFRR Aukštyn energija',
            value: 61.5444,
        },
    ], []);

    const incomeDataSource2 = useMemo(() => [
        {
            key: '1',
            name: 'parduodama DA',
            value: 38.2326,
        },
        {
            key: '2',
            name: 'perkama ID',
            value: 45.3830,
        },
        {
            key: '3',
            name: 'parduodama ID',
            value: 804.4530,
        },
        {
            key: '4',
            name: 'mFRRd',
            value: 286.0645,
        },
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
        calcDataTableDataSource1,
        calcDataTableDataSource2,
        calcDataTableDataSource3,
        calcDataTableDataSource4,
        calcDataTableDataSource5,
        calcDataTableDataSource6,
        calcDataTableDataSource7,
        calcDataTableDataSource8,
        electricityTradeDataSource1,
        electricityTradeDataSource2,
        electricityTradeDataSource3,
        electricityTradeDataSource4,
        electricityTradeDataSource5,
        electricityTradeDataSource6,
        FCR,
        economicEvaluationDataSource,
        incomeDataSource2,
    };
};
