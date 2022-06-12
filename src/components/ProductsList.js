import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductsList = ({ productsArray }) => {
  return (
    <div className='tt mt-2'>
      {productsArray.map((product, key) => (
        <ProductCard product={product} key={key} />
      ))}
    </div>
  );
};

ProductsList.propTypes = {
  productsArray: PropTypes.array.isRequired,
};

export default ProductsList;