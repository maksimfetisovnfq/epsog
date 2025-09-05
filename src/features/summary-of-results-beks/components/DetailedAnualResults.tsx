import React from 'react';
// --- (1) IMPORTS: Add necessary hooks and components from react-hook-form ---
import { useForm, useWatch, FormProvider, Controller } from 'react-hook-form';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

// Define the shape of our form data for type safety
interface IFormValues {
    selectedColumns: string[];
}

export const DetailedAnualResults: React.FC = () => {
    // --- (2) SETUP react-hook-form ---
    // Initialize the form. All state will be managed here.
    const methods = useForm<IFormValues>({
        defaultValues: {
            selectedColumns: [],
        },
    });
    const { control } = methods;

    // --- (3) REPLACE useState with useWatch ---
    // This hook subscribes to the 'selectedColumns' field in our form state.
    // The component will re-render whenever its value changes.
    const selectedColumns = useWatch({
        control,
        name: 'selectedColumns',
    });

    const columns = [
        {value: 'metai', label: 'Metai'},
        {value: 'ciklai', label: 'Ciklai'},
        {value: 'capex', label: 'CAPEX (tūkst. EUR)'},
        {value: 'opex', label: 'OPEX (tūkst. EUR)'},
        {value: 'cf', label: 'CF (tūkst. EUR)'},
        {value: 'npv', label: 'NPV (tūkst. EUR)'},
    ];
    const {detailedAnualDataSource} = useSummaryData();
    // The manual handleChange function is no longer needed, as <Controller> handles it.

    // This logic remains the same, as it correctly depends on the 'selectedColumns' array
    const chartColumns = selectedColumns.length > 0 ? selectedColumns.filter(col => col !== 'metai') : ['cf', 'npv'];
    const labels = detailedAnualDataSource.map((row: DetailedAnualDataRow) => row.metai);
    const datasets = chartColumns.map(col => ({
        label: columns.find(c => c.value === col)?.label || col,
        data: detailedAnualDataSource.map((row: DetailedAnualDataRow) => Number(row[col]) || 0),
        fill: false,
        borderColor: col === 'cf' ? '#36A2EB' : col === 'npv' ? '#FF6384' : `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`,
        backgroundColor: col === 'cf' ? '#36A2EB' : col === 'npv' ? '#FF6384' : `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`,
        tension: 0.3,
    }));
    const chartData = { labels, datasets };
    const chartOptions = { /* ... options remain the same ... */ };

    return (
        // --- (4) WRAP with FormProvider ---
        // This makes the form instance available to all nested components.
        <FormProvider {...methods}>
            <div style={{width: '768px', marginTop: '24px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{fontSize: '18px'}}>
                        Detalūs metiniai rezultatai
                        <div style={{fontSize: '14px', color: '#6F8190'}}>
                            Galite pasirinkti analizuojamus stulpelius
                        </div>
                    </div>
                    <div>
                        {/* --- (5) INTEGRATE with Controller --- */}
                        <Controller
                            name="selectedColumns"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field} // This passes value, onChange, onBlur, and ref
                                    multiple
                                    style={{height: '40px', width: '230px'}}
                                    displayEmpty
                                    inputProps={{'aria-label': 'Without label'}}
                                    renderValue={(selected) =>
                                        selected.length === 0
                                            ? 'Pasirinkite stulpelius'
                                            : selected.map(val => columns.find(col => col.value === val)?.label).join(', ')
                                    }
                                >
                                    {columns.map(col => (
                                        <MenuItem key={col.value} value={col.value}>
                                            <Checkbox checked={field.value.indexOf(col.value) > -1}/>
                                            {col.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </div>
                </div>
                <div style={{marginTop: '24px'}}>
                    <DetailedAnualResultsTable data={detailedAnualDataSource} visibleColumns={selectedColumns}/>
                </div>

                <div style={{marginTop: '24px', border: '1px solid #CFD5DA', width: '768px', height: '382px', boxSizing: 'border-box', display: 'flex'}}>
                    <LineChart data={chartData} options={chartOptions} width={768} height={382} style={{flex: 1}}/>
                </div>
            </div>
        </FormProvider>
    );
};