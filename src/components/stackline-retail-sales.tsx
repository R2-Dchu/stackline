import React from 'react';
import StacklineRetailSalesProductInfo from './stackline-retail-sales-product-info';
import StacklineRetailSalesTable from './stackline-retail-sales-table';
import StacklineRetailSalesGraph from './stackline-retail-graph';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import '../styles/dashboard.css';

const StacklineRetailSales: React.FC = () => {
  const data = useSelector((state: RootState) => state.sales);
  
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