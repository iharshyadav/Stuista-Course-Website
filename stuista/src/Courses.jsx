import Navbar from './Navbar'
import Courses1 from './CSS Files/Courses.css'
import { Link , useNavigate} from 'react-router-dom'
import { useEffect ,useState} from 'react';
import { account } from './Appwrite/auth';
import Product from './Product';
import Cart from './Cart';
const Courses = () => {

  const navigate = useNavigate();

  const [isloading, setisLoading] = useState(false);

  useEffect(()=>{
    const user  = account.get()
    user.then(
    (res)=>{
      setisLoading(true);
      navigate('/Courses')
    },
    (err)=>{
      setisLoading(true);
      console.log(err);
    }
    )
  },[navigate])

  const getItemLocal=()=>{
    let list = localStorage.getItem("cart");

    if(list){
      return JSON.parse(localStorage.getItem("cart"));
    }
    else{
      return [];
    }
  }

  const image={
    src1:"/CoursesImages/htmlimg.webp"
  }

  

  const [cartItems, setCartItems] = useState(getItemLocal());

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If item already exists in the cart, update the quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If item is not in the cart, add it
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== productId
      ?{ ...cartItem, quantity: cartItem.quantity + 1 }:cartItem)
    );
  };

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartItems))
    localStorage.setItem("cartImage", JSON.stringify(image.src1));
 },[cartItems,image.src1])


  return (
    <>
      <div>
        {isloading?(
         <div>
            <div className='h-16'>
         <Navbar/>
      </div>
      <div className="main">
        <div>
            <h1 className='mt-24 ml-64 tracking-wide text-3xl font-bold'>Explore Courses</h1>
            <div className='ml-64 mt-7 text-sm text-blue-600 font-semibold flex justify-start h-9 pb-3 items-center w-60 gap-7'>
               <button className=''>Web Development</button>
               <button className=''>Details</button>
            </div>
        </div>
        <div className='courses flex items-center justify-center flex-col'>
             <div className='flex items-center justify-center gap-32'>
                 <div className=" h-60 object-cover rounded-3xl bg-black">
                     <Link to='/html'><img className=' rounded-3xl h-60' src="/CoursesImages/htmlimg.webp" alt="" />
                    
                     </Link>
                 </div>
                 <div className=" h-60  rounded-3xl bg-black">
                     <Link to='/css'><img className=' rounded-3xl h-60' src="/CoursesImages/cssimg.webp" alt="" /></Link>
                 </div>
             </div>
             <div className='flex items-center justify-center gap-32 mt-16'>
                 <div className=" h-60 rounded-3xl  bg-black">
                 <Link to='/javascript'><img className=' rounded-3xl h-60' src="/CoursesImages/javaimg.jpg" alt="" /></Link>
                 </div>
                 <div className=" h-60 rounded-3xl bg-black">
                 <Link to='/react'><img className=' rounded-3xl h-60' src="/CoursesImages/reactimg.jpg" alt="" /></Link>
                 </div>
             </div>
        </div>
      </div>
         </div>
        ):null}
            <Link to='/cart'> <h1>Online Store</h1></Link> 
            <Product id={1} image1={image.src1} name="React Js" price={20} onAddToCart={handleAddToCart} />
            <Product id={2} name="HTML" price={20} onAddToCart={handleAddToCart} />
            <Product id={3} name="CSS" price={20} onAddToCart={handleAddToCart} />
            <Product id={4} name="JAVASCRIPT" price={20} onAddToCart={handleAddToCart} />
            <Product id={5} name="Next Js" price={20} onAddToCart={handleAddToCart} />
            <Product id={6} name="Mongo DB" price={20} onAddToCart={handleAddToCart} />
            <div className='hidden'>
               <Cart cartItems={cartItems} image1={image.src1} onRemoveFromCart={handleRemoveFromCart}/></div>
            </div>
    </>
  )
}

export default Courses