const columns = [
  { key: 'metai', label: 'Metai' },
  { key: 'ciklai', label: 'Ciklai' },
  { key: 'capex', label: 'CAPEX (tūkst. EUR)' },
  { key: 'opex', label: 'OPEX (tūkst. EUR)' },
  { key: 'cf', label: 'CF (tūkst. EUR)' },
  { key: 'npv', label: 'NPV (tūkst. EUR)' },
];

export interface DetailedAnualResultsTableRow {
  metai: number;
  ciklai: number;
  capex: string;
  opex: string;
  cf: string;
  npv: string;
}

interface DetailedAnualResultsTableProps {
  data: DetailedAnualResultsTableRow[];
  visibleColumns?: string[];
}

export const DetailedAnualResultsTable = ({ data, visibleColumns }: DetailedAnualResultsTableProps) => {
  const shownColumns = !visibleColumns || visibleColumns.length === 0
    ? columns.map(col => col.key)
    : visibleColumns;
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columns.filter(col => shownColumns.includes(col.key)).map((col) => (
            <th key={col.key} style={{ border: '1px solid #ccc', padding: '8px', background: '#E7EAED' }}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.filter(col => shownColumns.includes(col.key)).map(col => (
              <td key={col.key} style={{ border: '1px solid #ccc', padding: '8px' }}>{row[col.key as keyof DetailedAnualResultsTableRow]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};