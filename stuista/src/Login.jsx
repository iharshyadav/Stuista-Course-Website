import img from "./Images/LoginImages/img1.png"
import img1 from "./Images/LoginImages/google1.png"
import img2 from "./Images/LoginImages/underline.svg"
import Login1 from "./CSS Files/Login.css"
import { Link , useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { account } from "./Appwrite/auth"
import { useState } from "react"
const Login = () => {

   const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password:""
  });



  // APPWRITE CONFIGURATION
  const loginFunc = async (e) => {
   e.preventDefault();
    try{
      await account.createEmailSession(userData.email, userData.password);
      navigate("/");
    }
    catch(error){
        console.log(error);
    }
  }
   
  return (
    <>
    <div className="main flex w-full">
        <div className="left-part relative">
           <img src={img} className="object-cover" alt="" />
           <h1 className="smash absolute top-16 left-12 font-bold">Smash sets in <br /> your sweats.</h1>
           <h1 className="absolute bottom-24 text-5xl text-white font-bold left-12">Stuista</h1>
        </div>
        <div className="right-part">
           <div className="status mt-10 relative flex">
              {/* <button className="mr-12 text-2xl font-bold">Sign up</button> */}
               <div>
                  <button className="text-2xl font-bold ml-3">Login</button>
                  <img src={img2} alt="" />
               </div>
               <Link to="/"><button><FontAwesomeIcon className="absolute right-28 text-2xl bottom-1" icon={faXmark} /></button></Link>
           </div>
           <button className="flex google items-center justify-center border-2 rounded-lg border-b-4">
              <img className="w-8 mr-4" src={img1} alt="" />
              <p className="text-lg font-semibold">Log in with Google</p>
           </button>
           <div className="or">
            {/* <p className="mt-6 top-6"></p> */}
            <h2>or email</h2>
           </div>
           <form action="" className="flex flex-col">
              <label className="text-black font-semibold mt-12" htmlFor="email">Email</label>
              <input  onChange={(e) => setUserData({...userData, email: e.target.value})} className="rounded-lg text-black pl-1 border-b-4 outline-none font-semibold" type="email" name="" />
              <label className="mt-9 text-black font-semibold" htmlFor="password">Password</label>
              <input onChange={(e) => setUserData({...userData, password: e.target.value})} className="rounded-lg text-black pl-1 border-b-4 outline-none font-semibold" type="password" name=""  placeholder=""/>
              <button onClick={loginFunc} className="flex log-in items-center justify-center font-semibold text-md rounded-lg">Log in</button>
           </form>
           <Link to="/Signup"><button className="flex google items-center justify-center font-bold text-md rounded-lg border-2 border-b-4">New to Stuista? Create an account</button></Link>
         </div>
     </div>
    </>  
  )
}

export default Login;