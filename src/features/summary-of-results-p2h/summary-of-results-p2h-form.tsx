import { GlobalStyles } from "@mui/material";
import { type SyntheticEvent, useState } from "react";
import { InfoBanner } from "./components/InfoBanner";
import { MainTabs } from "./components/MainTabs";
import { useSummaryData } from "./hooks/useSummaryData";

export const SummaryOfResultsP2hForm = () => {
    const [value, setValue] = useState(0);
    const [innerTabValue, setInnerTabValue] = useState(0);

    const {
        dataSource,
        columns,
        secondDataSource,
        secondBarChartLabels,
        secondBarChartDataset,
        stackedBarDataSource,
        incomeDataSource,
        marketProductsDataSource,
    } = useSummaryData();

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleInnerTabChange = (_: SyntheticEvent, newValue: number) => {
        setInnerTabValue(newValue);
    };

    return (
        <div style={{fontFamily: 'Arial', width: '760px'}}>
            <GlobalStyles
                styles={{
                    '.MuiContainer-root': {
                        padding: '0px !important',
                    },
                    'body, *': {
                        fontWeight: 400,
                    },
                    '.MuiTableCell-root': {
                        border: '1px solid #CFD5DA',
                    },
                    '.MuiTabs-list': {
                        marginBottom: '56px',
                    },
                    '.MuiTable-root': {
                        marginBottom: 0,
                    },
                }}
            />

            <div style={{
                fontSize: '32px',
                marginBottom: '24px',
            }}>
                Rezultatai
            </div>

            <InfoBanner />

            <MainTabs
                value={value}
                handleChange={handleChange}
                innerTabValue={innerTabValue}
                handleInnerTabChange={handleInnerTabChange}
                dataSource={dataSource}
                columns={columns}
                secondDataSource={secondDataSource}
                secondBarChartLabels={secondBarChartLabels}
                secondBarChartDataset={secondBarChartDataset}
                stackedBarDataSource={stackedBarDataSource}
                incomeDataSource={incomeDataSource}
                marketProductsDataSource={marketProductsDataSource}
            />
        </div>
    );
};
