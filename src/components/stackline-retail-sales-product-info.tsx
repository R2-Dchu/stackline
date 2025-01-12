import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSales } from '../reducers/retail-sales-slice';
import previousData from '../stackline_frontend_assessment_data_2021.json';
import updatedData from '../stackline_frontend_assessment_data_2021_updated.json';
import '../styles/stackline-retail-sales-product-info.css';

interface StacklineRetailSalesProductInfoProps {
  productTitle: string;
  productImage: string;
  productSubtitle: string;
  productTags: string[];
}

const StacklineRetailSalesProductInfo: React.FC<StacklineRetailSalesProductInfoProps> = ({
  productTitle, 
  productImage, 
  productSubtitle, 
  productTags
}) => {
  const dispatch = useDispatch();

  const [isUpdatedData, setIsUpdatedData] = React.useState(true);
  const handleUpdateSales = () => {
    if(isUpdatedData) {
      dispatch(updateSales({ newState: previousData, actionType: 'update' }));
    } else {
      dispatch(updateSales({ newState: updatedData, actionType: 'update' }));
    }
    setIsUpdatedData(!isUpdatedData);
 }; 

  return (
    <div className="product-info-container">
      <div className="product-image-container">
        <img className="product-image" src={productImage} alt={productTitle} />
      </div>
      <div className='product-title'>{productTitle}</div>
      <div className='product-subtitle'>{productSubtitle}</div>
      <div className='product-tags-container'>
        {productTags.map((tag, index) => (
          <div key={index} className="product-tag">
            {tag}
          </div>
        ))}
      </div>
      <div className="product-info-button">
        <button className="update-button" onClick={handleUpdateSales}>
          Update Sales Data
        </button>
      </div>
    </div>
  );
}

export default StacklineRetailSalesProductInfo;