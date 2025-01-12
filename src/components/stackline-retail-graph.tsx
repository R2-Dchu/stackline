import React from "react";
import { Line } from "react-chartjs-2";
import { Sales } from '../types';
import { formatCurrency } from "./format-currency";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesChartProps {
  sales: Sales[];
}

const SalesLineChart: React.FC<SalesChartProps> = ({ sales }) => {
  const monthlySales = sales.reduce((monthToSaleMap, sale) => {
    const month = new Date(sale.weekEnding).toLocaleString("default", {
      month: "short",
    });

    if (!monthToSaleMap[month]) {
      monthToSaleMap[month] = { retailSales: 0, wholesaleSales: 0 };
    }
    monthToSaleMap[month].retailSales += sale.retailSales;
    monthToSaleMap[month].wholesaleSales += sale.wholesaleSales;
    return monthToSaleMap;
  }, {} as Record<string, { retailSales: number; wholesaleSales: number }>);

  const monthOrder = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const sortedMonths = monthOrder.filter((month) => monthlySales[month] !== undefined);
  const labels = sortedMonths;
  const retailSalesData = sortedMonths.map((month) => monthlySales[month].retailSales);
  const wholesaleSalesData = sortedMonths.map((month) => monthlySales[month].wholesaleSales);

  const data = {
    labels,
    datasets: [
      {
        label: "Retail Sales",
        data: retailSalesData,
        borderColor: "rgba(81, 142, 217, 1)",
        tension: 0.4,
      },
      {
        label: "Wholesale Sales",
        data: wholesaleSalesData,
        borderColor: "rgba(62, 62, 62, 0.48)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Retail Sales (Monthly)",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            return `${context.dataset.label}: ${formatCurrency(value)}`;
          },
        },
      },
      scales: {
        y: {
          ticks: {
            callback: (value: number | string) => formatCurrency(Number(value)),
          },
        }
      }
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesLineChart;