import React from 'react';
import DataTable from 'react-data-table-component';
import { Sales } from '../types';
import { formatCurrency } from './format-currency';

interface StacklineRetailSalesTableProps {
  sales: Sales[];
}

const StacklineRetailSalesTable: React.FC<StacklineRetailSalesTableProps> = ({ sales }) => {
  const columns = [
    {
      name: 'Week Ending',
      selector: (row: Sales) => row.weekEnding,
      sortable: true,
    },
    {
      name: 'Retail Sales',
      selector: (row: Sales) => formatCurrency(row.retailSales),
      sortable: true,
    },
    {
      name: 'Wholesale Sales',
      selector: (row: Sales) => formatCurrency(row.wholesaleSales),
      sortable: true,
    },
    {
      name: 'Units Sold',
      selector: (row: Sales) => row.unitsSold,
      sortable: true,
    },
    {
      name: 'Retailer Margin',
      selector: (row: Sales) => formatCurrency(row.retailerMargin),
      sortable: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={sales}
      pagination
      defaultSortFieldId={1}
      highlightOnHover
      striped
    />
  );
};

export default StacklineRetailSalesTable;