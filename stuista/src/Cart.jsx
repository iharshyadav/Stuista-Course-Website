import Navbar from "./Navbar"
import Cart1 from './CSS Files/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faMinus , faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from './Appwrite/auth'

const Cart = ({cartItems, onRemoveFromCart,totalQuantity,totalPrice}) => {
  console.log('cartItems:', cartItems);

  const navigate = useNavigate()

  const [isloaded, setisLoaded] = useState(false);
  useEffect(()=>{
     const user = account.get()
     user.then(
        (res)=>{
           setisLoaded(true); 
        },
        (err)=>{
          // navigate('/Login')

        }
     )
  },[navigate])

  return (
    <>
    <div className="h-16"><Navbar/></div>
    {isloaded?(
      <div>
        <div className="cart-pc1">
      <div className=" flex gap-20">
   {/* <div className="mt-10 ml-28 w-3/5"> */}
   <div className="left-part mt-10 ml-24 shadow-lg w-3/5 bg-white p-12">
       <h2 className="cart font-semibold text-black text-5xl">Shopping Cart</h2>
       <hr className="mt-6" />
       <div className="mt-16 w-full">
            {cartItems && cartItems.map((item) => (
              <li key={item.id} >
                <div className="flex gap-10 w-full h-28 mb-2">
                <div className="bg-black w-24 h-24 ml-8 rounded-3xl shadow-lg p-2">img</div>
                {/* <img className=" object-cover " src={image1.URL} alt="" /> */}
                <div className="flex w-60">
                    <div className="flex flex-col w-40">
                        <div className="text-2xl font-bold">
                           {item.name}
                        </div>
                        <h4 className="type text-xs mt-5">Type</h4> 
                        <h1 className="ml-4 text-sm font-semibold">Development</h1>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-xs mt-5">Collection</h4>
                      <h1 className="text-sm font-semibold">{item.Name}</h1>
                    </div>
                </div>
                <div className="w-12 text-center mt-10 text-3xl font-semibold">
                    ₹{item.price} 
                </div>
                <div className="flex flex-col w-36 text-center ml-5">
                   <h1 className="text-sm font-semibold mt-5">Quantity</h1>
                   <div className="flex items-center justify-center">
                       {/* <button><FontAwesomeIcon icon={faMinus} /></button> */}
                       <div className="border w-20 rounded-3xl h-10 text-center p-2 bg-yellow-400 text-white shadow-xl ml-2 mr-2 mt-1">
                          {item.quantity} 
                       </div>
                       {/* <button className="plus"><FontAwesomeIcon icon={faPlus} /></button> */}
                   </div>
                   {/* <div className="bg-black w-6 h-6 text-white">{item.count}</div> */}
                </div>
                <div className="mt-11 ml-8">
                     <button onClick={() => onRemoveFromCart(item.id)}
                        className="income-list-2-button border w-10 p-1 bg-red-600 text-white shadow-xl"><FontAwesomeIcon icon={faXmark} />
                      </button>
                </div>
                </div>
                <hr className="bg-black w-11/12 ml-8 mb-4"/>
              </li>
            ))}
       </div>
   </div>
   <div className="right-part mt-10 overflow-hidden">
       <div className="bg-white w-11/12 h-96 right-part-box p-10">
          <h1 className="text-4xl font-medium text-black mb-7">Summary({totalQuantity})</h1>
          <div className="">
          {cartItems && cartItems.map((item) => (
              <li key={item.id}  className="flex gap-6 items-center">
                 <h1 className="w-24 text-base font-medium">{item.name}</h1>
                 <hr className="w-36"/>
                 <div className="font-semibold text-lg">
                     ₹{item.Price1}
                 </div>
                </li>))}
                <hr className="mt-3 bg-black" />
                <h1 className="font-medium text-lg">Delivery</h1>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur natus voluptatum a blanditiis facilis nihil possimubis, aperiam!</p>
                <div className="total flex h-12 w-full items-center mt-2 gap-2">
                    <h1 className="text-4xl font-medium text-black ">Total</h1>
                    <hr className="w-44"/>
                    {/* <h1 className="w-6 text-black"></h1> */}
                    <h1 className="text-4xl font-medium text-black">{totalPrice}</h1>
                </div>
                <p className="text-xs w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eius esse placeat velit, explicabo quasi neque exercitationem nisi ipsum adipisci! Aliquid, minus eligendi doloribus molestias ullam error ut! Adipisci, architecto!</p>
                <button className="checkout mt-7 shadow-xl font-semibold text-xl w-full h-12 text-center bg-yellow-400 rounded-3xl">Checkout</button>
          </div>
       </div>
   </div>
   {/* </div> */}
</div>
<div className="h-16"></div>
</div>


            {/******************************************* Mobile Responsive **************************************************/}


  <div className="Cart-mobile sm:hidden">
       <div className="left-part w-full"> 
           <div className="flex justify-between items-center cart-mobile-inner">
              <h2 className=" w-4 justify-center h-6 flex items-center text-center"><FontAwesomeIcon icon={faAngleLeft} /></h2>
              <h2 className="text-xl font-semibold">Cart</h2>
           </div>
           <div className="">
                {cartItems && cartItems.map((item) => (
                  <li key={item.id} >
                    <div className="flex gap-4 items-center h-20 mb-3 shadow-md boxes w-11/12 ml-3 rounded-xl pr-1">
                    <div className="bg-black text-black ml-2 rounded-full p-4 image-mobile">img</div>
                    {/* <img className=" object-cover " src={image1.URL} alt="" /> */}
                    <div className="w-24 flex flex-col items-center justify-center">
                       <h1 className="font-bold text-sm mb-1">{item.name}</h1>
                       <div className="">
                           <div className="border w-10 rounded-3xl h-6 text-center quantity-btn text-black shadow-xl ml-2 mr-2 mt-1">
                              {item.quantity} 
                           </div>
                       </div> 
                    </div>
                    <div className="w-16 text-sm font-semibold">
                        <h1>₹{item.price} </h1>
                    </div>
                    <div className="">
                         <button onClick={() => onRemoveFromCart(item.id)}
                            className="income-list-2-button border bg-red-600 text-white shadow-xl"><FontAwesomeIcon icon={faXmark} />
                          </button>
                    </div>
                    </div>
                  </li>
                ))}
           </div>
           <div className="h-28"></div>
       </div>
       <div className="right-part fixed h-28 bottom-0 z-10 w-full rounded-3xl shadow-2xl bg-white">
           <div className=" w-full h-10">
             <div className="flex items-center justify-between ml-5 mr-5 pt-5">
                <h1 className="text-sm font-medium text-black">Selected Items ({totalQuantity})</h1>
                <h1 className="text-sm font-medium text-black">{totalPrice}</h1>
             </div>
              <button className="checkout mt-5 ml-10 shadow-xl font-semibold text-xl w-3/4 h-9 flex items-center justify-center bg-yellow-400 rounded-3xl">Checkout</button>
           </div>
       </div>
       {/* </div> */}
   </div>

  </div>

    ):null}
    </>
  );
};

export default Cart;
