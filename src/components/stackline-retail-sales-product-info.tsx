import React from 'react';
import '../styles/stackline-retail-sales-product-info.css';

interface StacklineRetailSalesProductInfoProps {
  productTitle: string;
  productImage: string;
  productSubtitle: string;
  productTags: string[];
}

const StacklineRetailSalesProductInfo: React.FC<StacklineRetailSalesProductInfoProps> = ({productTitle, productImage, productSubtitle, productTags}) => {
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
    </div>
  );
}

export default StacklineRetailSalesProductInfo;