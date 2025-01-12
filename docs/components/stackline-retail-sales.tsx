import React, { useEffect, useState } from 'react';
import StacklineRetailSalesProductInfo from './stackline-retail-sales-product-info';
import StacklineRetailSalesTable from './stackline-retail-sales-table';
import StacklineRetailSalesGraph from './stackline-retail-graph';
import { Reviews, Sales } from '../types';
import '../styles/dashboard.css';

interface StacklineData {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Reviews[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sales[];
}

const StacklineRetailSales: React.FC = () => {
  const [data, setData] = useState<StacklineData | null>(null);

  useEffect(() => {
    fetch('stackline_frontend_assessment_data_2021.json')
      .then((response) => response.json())
      .then((jsonData: StacklineData) => setData(jsonData))
      .catch((error) => console.error('There was an error fetching JSON:', error));
  }, []);
  
  if(!data) {
    return <div>Still loading...</div>;
  }

  return (
    <>
      <div className="header">
        <img src="stackline_logo.svg" />
      </div>
      <div className="dashboard">
        <div className="productInfo">
          <StacklineRetailSalesProductInfo
            productTitle={data.title} 
            productImage={data.image}
            productSubtitle={data.subtitle}
            productTags={data.tags}
            />
        </div>
        <div className="salesGraph">
          <StacklineRetailSalesGraph sales={data.sales} />
        </div>
        <div className="salesTable">
          <StacklineRetailSalesTable sales={data.sales} />
        </div>
      </div>
    </>
  );
};

export default StacklineRetailSales;