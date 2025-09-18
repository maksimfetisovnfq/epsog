import { Table } from "../Table";
import { Box } from "@mui/material"

type DefaultSummaryTableProps = {
  values: { [key: number]: string };
  columnTitles?: [string, string];
};

const rowHeaders = [
  'Įrenginio galia ir talpa',
  'Aukštyn',
  'Žemyn',
  'Į abi puses',
  'Projekto investicijos CAPEX',
  'Projekto sąnaudos OPEX',
  'Pasirinktos minimalios siūlymų (bids) ribos',
];

const defaultTitles: [string, string] = [
  "Vertinama technologija",
  "BEKS technologija"
];

export const DefaultSummaryTable = ({ values, columnTitles }: DefaultSummaryTableProps) => {
  const titles = columnTitles || defaultTitles;
  const columns = [
    { title: titles[0], dataIndex: "label", key: "label" },
    { title: titles[1], dataIndex: "value", key: "value" },
  ];

  const dataSource = rowHeaders.map((header, idx) => ({
    label: header,
    value: values[idx],
  }));

  return (
    <Box sx={{ marginBottom: {sm:5}}}>
      <Table columns={columns} dataSource={dataSource} />
    </Box>
  );
};
