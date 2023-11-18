import React from 'react';

const Product = ( {id, name, price, onAddToCart,image1}) => {
  const handleAddToCart = () => {
    onAddToCart({ id, name, price, quantity: 1});
  };

  return (
    <div>
      <div className='flex items-center h-20 border-black w-full bg-white justify-around rounded-b-3xl border-none gap-5'>
         {/* <img src={image1} alt="" /> */}
         {/* <h3>{name}</h3> */}
         <div className='flex gap-1'>
            <h3 className='text-lg'>Price : </h3>
            <p className='text-lg font-bold'>₹{price}</p>
         </div>
         <button className='border w-32 rounded-3xl h-10 text-center p-2 bg-yellow-400 shadow-xl text-white' onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
