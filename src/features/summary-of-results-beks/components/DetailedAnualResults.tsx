import React, {useState} from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import {useSummaryData} from '../hooks/useSummaryData';
import DetailedAnualResultsTable from '../../../ui/tables/DetailedAnualResultsTable/DetailedAnualResultsTable';
import LineChart from '../../../ui/charts/lineChart/line-chart';


interface DetailedAnualDataRow {
    metai: number;
    ciklai: number;
    capex: string;
    opex: string;
    cf: string;
    npv: string;

    [key: string]: string | number;
}

export const DetailedAnualResults: React.FC = () => {
    const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
    const columns = [
        {value: 'metai', label: 'Metai'},
        {value: 'ciklai', label: 'Ciklai'},
        {value: 'capex', label: 'CAPEX (tūkst. EUR)'},
        {value: 'opex', label: 'OPEX (tūkst. EUR)'},
        {value: 'cf', label: 'CF (tūkst. EUR)'},
        {value: 'npv', label: 'NPV (tūkst. EUR)'},
    ];
    const {detailedAnualDataSource} = useSummaryData();
    const handleChange = (event: any) => {
        const value = event.target.value;
        setSelectedColumns(typeof value === 'string' ? value.split(',') : value as string[]);
    };

    const chartColumns = selectedColumns.length > 0 ? selectedColumns.filter(col => col !== 'metai') : ['cf', 'npv'];
    const labels = detailedAnualDataSource.map((row: DetailedAnualDataRow) => row.metai);
    const datasets = chartColumns.map(col => ({
        label: columns.find(c => c.value === col)?.label || col,
        data: detailedAnualDataSource.map((row: DetailedAnualDataRow) => Number(row[col]) || 0),
        fill: false,
        borderColor: col === 'cf' ? '#36A2EB' : col === 'npv' ? '#FF6384' : undefined,
        backgroundColor: col === 'cf' ? '#36A2EB' : col === 'npv' ? '#FF6384' : undefined,
        tension: 0.3,
    }));
    const chartData = {
        labels,
        datasets,
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {display: true},
            title: {display: false},
        },
        scales: {
            x: {title: {display: true, text: 'Year'}},
            y: {title: {display: true, text: 'NPV (tūkst. EUR)'}},
        },
    };

    return (
        <div style={{width: '768px', marginTop: '24px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{fontSize: '18px'}}>
                    Detalūs metiniai rezultatai
                    <div style={{fontSize: '14px', color: '#6F8190'}}>
                        Galite pasirinkti analizuojamus stulpelius
                    </div>
                </div>
                <div>
                    <Select
                        multiple
                        style={{height: '40px', width: '230px'}}
                        value={selectedColumns}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{'aria-label': 'Without label'}}
                        renderValue={(selected) =>
                            (selected as string[]).length === 0
                                ? 'Pasirinkite stulpelius'
                                : (selected as string[]).map(val => columns.find(col => col.value === val)?.label).join(', ')
                        }
                    >
                        {columns.map(col => (
                            <MenuItem key={col.value} value={col.value}>
                                <Checkbox checked={selectedColumns.indexOf(col.value) > -1}/>
                                {col.label}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            <div style={{marginTop: '24px'}}>
                <DetailedAnualResultsTable data={detailedAnualDataSource} visibleColumns={selectedColumns}/>
            </div>

            <div style={{marginTop: '24px', border: '1px solid #CFD5DA', width: '768px', height: '382px', boxSizing: 'border-box', display: 'flex'}}>
                <LineChart data={chartData} options={chartOptions} width={768} height={382} style={{flex: 1}}/>
            </div>
        </div>
    );
};