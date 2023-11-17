import React from 'react';

const Product = ( {id, name, price, onAddToCart,image1}) => {
  const handleAddToCart = () => {
    onAddToCart({ id, name, price, quantity: 1});
  };

  return (
    <div>
      <img src={image1} alt="" />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
