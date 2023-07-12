import React from 'react';

import productImg from '../../../assets/images/product_02.1.jpg';

const ProductCard = () => {
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={productImg} alt="product-img" />
      </div>

      <div className="product__content">1.37.36</div>
    </div>
  );
};

export default ProductCard;
