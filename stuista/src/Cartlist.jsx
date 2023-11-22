import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import Html from './Course/Html';
import { database } from './Appwrite/auth';
import { ID } from 'appwrite';

const Cartlist = ({onAddToCart}) => {


    const getItemLocal=()=>{
        let list = localStorage.getItem("cart");
    
        if(list){
          return JSON.parse(localStorage.getItem("cart"));
        }
        else{
          return [];
        }
      }
    

      // const handleAddToCart = async (item) => {
    
      //   try {
      //     const response = await database.createDocument('65475f35559cb809691b','65475f7d8e95d1320eb4',ID.unique(), {
      //       Name: item.name,
      //       Price1: item.price,
      //     });
    
      //     console.log('Product data saved to Appwrite:', response);
      //   } catch (error) {
      //     console.error('Error saving product data to Appwrite:', error);
      //   }
    
      // };

      const [cartItems, setCartItems] = useState(getItemLocal());

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cartItems))
     },[cartItems])

  

    const handleRemoveFromCart = (itemId) => {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem.id !== itemId)
      );
    };

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

   
  return (
    <>
    <div className='w-full'>
    <Cart cartItems={cartItems} totalQuantity={totalQuantity} totalPrice={totalPrice} onRemoveFromCart={handleRemoveFromCart}/></div>
    <div className='hidden'>
      <Html />
    </div>
    </>
  )
}

export default Cartlist