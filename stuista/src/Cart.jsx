import Navbar from "./Navbar"
import Cart1 from './CSS Files/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus , faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'


const Cart = ({cartItems, onRemoveFromCart,image1}) => {
  console.log('cartItems:', cartItems);

  return (
    <>
    <div className="h-16"><Navbar/></div>
    <div className="flex gap-20">
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
                          <h1 className="text-sm font-semibold">{item.name}</h1>
                        </div>
                    </div>
                    <div className="w-12 text-center mt-10 text-3xl font-semibold">
                        ₹{item.price} 
                    </div>
                    <div className="flex flex-col w-36 text-center">
                       <h1 className="text-sm font-semibold mt-5">Quantity</h1>
                       <div className="flex items-center justify-center">
                           <button><FontAwesomeIcon icon={faMinus} /></button>
                           <div className="border w-20 rounded-3xl h-10 text-center p-2 bg-yellow-400 text-white shadow-xl ml-2 mr-2 mt-1">
                              {item.quantity} 
                           </div>
                           <button className="plus"><FontAwesomeIcon icon={faPlus} /></button>
                       </div>
                    </div>
                    <div className="mt-11 ml-8">
                         <button onClick={onRemoveFromCart}
                            className="income-list-2-button border w-10 p-1 bg-red-600 text-white shadow-xl"><FontAwesomeIcon icon={faXmark} />
                          </button>
                    </div>
                    </div>
                    <hr className="bg-black w-11/12 ml-8 mb-4"/>
                  </li>
                ))}
           </div>
       </div>
       <div className="right-part mt-10">
           <div className="bg-white w-11/12 h-96 right-part-box p-10">
              <h1 className="text-4xl font-medium text-black mb-7">Summary</h1>
              <div className="">
              {cartItems && cartItems.map((item) => (
                  <li key={item.id}  className="flex gap-6 items-center">
                     <h1 className="w-24 text-base font-medium">{item.name}</h1>
                     <hr className="w-36"/>
                     <div className="font-semibold text-lg">
                         ₹{item.price}
                     </div>
                    </li>))}
                    <hr className="mt-3 bg-black" />
                    <h1 className="font-medium text-lg">Delivery</h1>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur natus voluptatum a blanditiis facilis nihil possimubis, aperiam!</p>
                    <div className="total flex h-12 w-full items-center mt-2 gap-2">
                        <h1 className="text-4xl font-medium text-black ">Total</h1>
                        <hr className="w-44"/>
                        <h1 className="text-4xl font-medium text-black">₹100</h1>
                    </div>
                    <p className="text-xs w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eius esse placeat velit, explicabo quasi neque exercitationem nisi ipsum adipisci! Aliquid, minus eligendi doloribus molestias ullam error ut! Adipisci, architecto!</p>
                    <button className="checkout mt-7 shadow-xl font-semibold text-xl w-full h-12 text-center bg-yellow-400 rounded-3xl">Checkout</button>
              </div>
           </div>
       </div>
       {/* </div> */}
    </div>
    <div className="h-16"></div>
    </>
  );
};

export default Cart;
