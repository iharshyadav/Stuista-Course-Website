import Navbar from './Navbar'
import Courses1 from './CSS Files/Courses.css'
import { Link , useNavigate} from 'react-router-dom'
import { useEffect ,useState} from 'react';
import { account,database} from './Appwrite/auth';
import Product from './Product';
import Cart from './Cart';
import Cartlist from './Cartlist';
import Conf from './Conf/Conf'
import Html from './Course/Html';
import { ID } from 'appwrite';

const Courses = () => {

  const navigate = useNavigate();


  const [isloading, setisLoading] = useState(false);

  useEffect(()=>{
    const user  = account.get()
    user.then(
    ()=>{
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



  

  const [cartItems, setCartItems] = useState(getItemLocal());

  const handleAddToCart = async (item) => {
    const existingItem = cartItems.some((cartItem) => cartItem.id === item.id);

    if(!existingItem){
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }

    try {
      const response = await database.createDocument('65475f35559cb809691b','65475f7d8e95d1320eb4',ID.unique(), {
        Name: item.name,
        Price1: item.price,
      });

      console.log('Product data saved to Appwrite:', response);
    } catch (error) {
      console.error('Error saving product data to Appwrite:', error);
    }


    try {
      const getDocuments = await database.listDocuments(
        '65475f35559cb809691b',
        '65475f7d8e95d1320eb4',
          // ID.unique(),
      )
      console.log("successfull",getDocuments);
  } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
  }

  };

  

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  useEffect(()=>{
    // setSave(true);
    localStorage.setItem("cart",JSON.stringify(cartItems))
    
 },[cartItems])


  return (
    <>
      <div className='pc-courses'>
        {isloading?(
         <div>
            <div className='h-16'>
         <Navbar/>
      </div>
      <div className="main">
        <div>
            <h1 className='mt-24 ml-64 tracking-wide text-5xl font-semibold explore-courses'>Explore Courses</h1>
            <div className='ml-64 mt-7 text-sm text-blue-600 font-semibold flex justify-start h-9 pb-3 items-center w-60 gap-7'>
               <button className=''>Web Development</button>
               <button className=''>Details</button>
            </div>
        </div>
        <hr className='w-11/12 ml-20 mt-3 hr-line' />
        <div className='courses flex items-center justify-center flex-col bg-white w-10/12 ml-32 mt-10 pb-20 rounded-full'>
             <div className='flex items-center justify-center gap-32 mt-16'>
                 <div className=" rounded-3xl mb-10">
                     <Link to='/html'><img className=' rounded-t-3xl h-60' src="/CoursesImages/htmlimg.webp" alt="" />
                     </Link>
                     <Product id={2} name="HTML" price={20000} onAddToCart={handleAddToCart} />
                 </div>
                 <div className="mb-10 rounded-3xl bg-black">
                     <Link to='/html'><img className='  rounded-t-3xl h-60' src="/CoursesImages/cssimg.webp" alt="" />
                     </Link>
                     <Product id={3} name="CSS" price={40000} onAddToCart={handleAddToCart} />
                 </div>
             </div>
             <div className=' flex items-center justify-center gap-32 mb-10'>
                 <div className=" h-60 rounded-3xl border">
                 <Link to='/html'><img className='  rounded-t-3xl h-60' src="/CoursesImages/javaimg.jpg" alt="" />
                 </Link>
                 <Product id={4} name="JAVASCRIPT" price={36000} onAddToCart={handleAddToCart} />
                 </div>
                 <div className=" h-60 rounded-3xl bg-black">
                 <Link to='/html'><img className='  rounded-t-3xl h-60' src="/CoursesImages/reactimg.jpg" alt="" /></Link>
                 <Product id={1} name="React Js" price={78000} onAddToCart={handleAddToCart} />
                 </div>
             </div>
             <div className='flex items-center justify-center gap-32 mt-16 mb-10'>
                 <div className=" h-60 rounded-3xl bg-black">
                 <Link to='/html'><img className='  rounded-t-3xl h-60' src="/CoursesImages/reactimg.jpg" alt="" /></Link>
                 <Product id={5} name="Next Js" price={67500} onAddToCart={handleAddToCart} />
                 </div>
                 <div className=" h-60 rounded-3xl bg-black">
                 <Link to='/html'><img className='  rounded-t-3xl h-60' src="/CoursesImages/reactimg.jpg" alt="" /></Link>
                 <Product id={6} name="Mongo DB" price={88000} onAddToCart={handleAddToCart} />
                 </div>
             </div>
        </div>
        <div className='h-20'></div>
      </div>
         </div>
        ):null}
            <div className='hidden'>
               <Cart cartItems={cartItems} setCartItems={setCartItems} totalQuantity={totalQuantity} onRemoveFromCart={handleRemoveFromCart}/>
               </div>
            </div>
            <div className='mobile-courses'>
            {isloading?(
         <div>
           <div className='h-16'>
            <Navbar/>
            </div>
      <div className="main">
        <div>
            <h1 className='explore-courses'>Explore Courses</h1>
            <div className='flex items-center justify-start gap-5 ml-2 mb-1'>
               <button className='web-development'>Web Development</button>
               <button className='web-development'>Details</button>
            </div>
            <hr className='w-full mb-4' />
        </div>
        <div className='courses flex flex-col justify-center items-center mt-10'>
             <div className='img-div'>
                 <div className="">
                     <Link to='/html'><img className=' ' src="/CoursesImages/htmlimg.webp" alt="" />
                     </Link>
                     <Product id={2} name="HTML" price={20000} onAddToCart={handleAddToCart} />
                 </div>
                 <div className="">
                     <Link to='/html'><img className=' ' src="/CoursesImages/cssimg.webp" alt="" />
                     </Link>
                     <Product id={3} name="CSS" price={40000} onAddToCart={handleAddToCart} />
                 </div>
             </div>
             <div className='img-div'>
                 <div className="">
                 <Link to='/html'><img className=' ' src="/CoursesImages/javaimg.jpg" alt="" />
                 </Link>
                 <Product id={4} name="JAVASCRIPT" price={36000} onAddToCart={handleAddToCart} />
                 </div>
                 <div className="">
                 <Link to='/html'><img className=' ' src="/CoursesImages/reactimg.jpg" alt="" /></Link>
                 <Product id={1} name="React Js" price={78000} onAddToCart={handleAddToCart} />
                 </div>
             </div>
             <div className='img-div'>
                 <div className=" ">
                 <Link to='/html'><img className=' ' src="/CoursesImages/reactimg.jpg" alt="" /></Link>
                 <Product id={5} name="Next Js" price={67500} onAddToCart={handleAddToCart} />
                 </div>
                 <div className=" ">
                 <Link to='/html'><img className=' ' src="/CoursesImages/reactimg.jpg" alt="" /></Link>
                 <Product id={6} name="Mongo DB" price={88000} onAddToCart={handleAddToCart} />
                 </div>
             </div>
        </div>
        <div className='h-20'></div>
      </div>
         </div>
        ):null}

            </div>
    </>
  )
}

export default Courses;