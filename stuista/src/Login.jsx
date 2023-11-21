import img from "./Images/LoginImages/img1.png"
import img1 from "./Images/LoginImages/google1.png"
import img2 from "./Images/LoginImages/underline.svg"
import Login1 from "./CSS Files/Login.css"
import { Link , useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { account } from "./Appwrite/auth"
import { useState , useEffect } from "react"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import {v4 as uuidv4} from 'uuid';
const Login = () => {

   const navigate = useNavigate();

   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   function handleChange(e) { 
     const eventType = e.target.id
     console.log(eventType)
       if(eventType === "email") { 
        setEmail (e.target.value)
     } else if (eventType === "password") { 
        setPassword(e.target.value) 
     }
  }
     
     async function handleSubmission(e) {
        e.preventDefault()
        // console.log({ name, email, password})

        try {
           await toast.promise(()=>loginUser(),{
              pending:"Logging in user. Please wait !!!",
              success:"Logged in user successfully",
            //   error:"operation Failed"
           })
        } catch (error) {
         //   console.log(error);sm:
           toast.error(String(error));
        }
     
     }

     async function loginUser(){
          
        try {
           const response = await account.createEmailSession(email,password)
           console.log(response);
           navigate('/')
           setEmail('');
           setPassword('');
           if(response.error){
              throw new Error(response.error)
           }
        } catch (error) {
           throw new Error(error)
        }
     }
  

   
  return (
    <>
    <div className="main-login sm:flex w-full">
        <div className="left-part left-part-login relative">
           <img src={img} className="sm:object-cover login-img" alt="" />
           <h1 className="smash sm:absolute sm:top-16 sm:left-12 sm:font-bold">Smash sets in <br /> your sweats.</h1>
           <h1 className="sm:absolute sm:bottom-24 sm:text-5xl sm:text-white sm:font-bold sm:left-12">Stuista</h1>
        </div>
        <div className="right-part right-part-login">
           <div className="status sm:mt-10 sm:relative sm:flex">
              {/* <button className="mr-12 text-2xl font-bold">Sign up</button> */}
               <div>
                  <button className="sm:text-2xl sm:font-bold sm:ml-3">Login</button>
                  <img className="" src={img2} alt="" />
               </div>
               <Link to="/"><button><FontAwesomeIcon className="sm:absolute sm:right-28 sm:text-2xl sm:bottom-1" icon={faXmark} /></button></Link>
           </div>
           <button className="sm:flex google sm:items-center sm:justify-center sm:border-2 sm:rounded-lg sm:border-b-4">
              <img className="sm:w-8 sm:mr-4" src={img1} alt="" />
              <p className="sm:text-lg sm:font-semibold">Log in with Google</p>
           </button>
           <div className="or">
            {/* <p className="mt-6 top-6"></p> */}
            <h2>or email</h2>
           </div>
           <form action="" onSubmit={handleSubmission} className="sm:flex sm:flex-col">
              <label className="sm:text-black sm:font-semibold sm:mt-12" htmlFor="email">Email</label>
              <input  value={email} onChange={handleChange} className="sm:rounded-lg sm:text-black sm:pl-1 sm:border-b-4 sm:outline-none sm:font-semibold" type="email" name="" id="email" required />
              <label className="sm:mt-9 sm:text-black sm:font-semibold" htmlFor="password">Password</label>
              <input value={password} onChange={handleChange} className="sm:rounded-lg sm:text-black sm:pl-1 sm:border-b-4 sm:outline-none sm:font-semibold" type="password" name=""id="password" required/>
              <button className="sm:flex log-in sm:items-center sm:justify-center sm:font-semibold sm:text-md sm:rounded-lg">Log in</button>
           </form>
           <Link to="/Signup"><button className="sm:flex google sm:items-center sm:justify-center sm:font-bold sm:text-md sm:rounded-lg sm:border-2 sm:border-b-4">New to Stuista? Create an account</button></Link>
         </div>
         <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          theme="dark"
         />
     </div>








     <div className=" login-mobile w-full overflow-hidden">
           <div className="status-mobile items-center justify-between mb-9 w-full mt-10 relative flex">
               <div>
                  <button className="text-2xl font-bold ml-7">Login</button>
                  <img className="w-20 ml-5" src={img2} alt="" />
               </div>
               <Link to="/"><button><FontAwesomeIcon className="absolute right-7 text-2xl bottom-1" icon={faXmark} /></button></Link>
           </div>
           <button className="flex border-2 rounded-lg w-10/12 h-10 items-center pl-2 ml-5">
              <img className="w-7 ml-7" src={img1} alt="" />
              <p className="">Log in with Google</p>
           </button>
           <div className="or">
            {/* <p className="mt-6 top-6"></p> */}
            <h2>or email</h2>
           </div>
           <form action="" onSubmit={handleSubmission} className="flex flex-col ml-8">
              <label className="text-black font-semibold" htmlFor="email">Email</label>
              <input  value={email} onChange={handleChange} className="rounded-lg border-2 text-black border-b-4 outline-none font-semibold" type="email" name="" id="email" required />
              <label className="mt-6 text-black font-semibold" htmlFor="password">Password</label>
              <input value={password} onChange={handleChange} className="rounded-lg text-black border-2 border-b-4 outline-none font-semibold" type="password" name=""id="password" required/>
              <button className="flex log-in items-center justify-center font-semibold text-md rounded-lg">Log in</button>
           </form>
           <Link to="/Signup"><button className="ml-8 flex google items-center justify-center font-bold text-sm rounded-lg border-2 border-b-4">New to Stuista? Create an account</button></Link>
         </div>
         <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          theme="dark"
         />


    </>  
  )
}

export default Login;