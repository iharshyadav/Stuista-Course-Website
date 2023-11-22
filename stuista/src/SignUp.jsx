import SignUp1 from "./CSS Files/Signup.css"
import img4 from "./Images/LoginImages/img4.jpg"
import img1 from "./Images/LoginImages/google1.png"
import img2 from "./Images/LoginImages/underline.svg"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { account } from "./Appwrite/auth"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {v4 as uuidv4} from 'uuid';
const SignUp = () => {
   const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleChange(e) { 
      const eventType = e.target.id
      console.log(eventType)
      if (eventType == "name") {
      setName(e.target.value)
      } else if(eventType === "email") { 
         setEmail (e.target.value)
      } else if (eventType === "password") { 
         setPassword(e.target.value) 
      }
   }
      
      async function handleSubmission(e) {
         e.preventDefault()
         // console.log({ name, email, password})

         try {
            await toast.promise(()=>registerUser(),{
               pending:"Registering user. Please wait !!!",
               success:"Registered user successfully",
               error:"operation Failed"
            })
         } catch (error) {
            console.log(error);
            toast.error(String(error));
         }
      
      }

      async function registerUser(){
           
         try {
            const response = await account.create(uuidv4(),email,password,name)
            console.log(response);
            // navigate('/Login')
            setEmail('');
            setName('');
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
      <div className="main flex w-full sm:w-full">
        <div className="left-part left-part-signup relative">
           <img src={img4} className="object-cover h-full w-full" alt="" />
           {/* <h1 className="smash absolute top-16 left-12 font-bold">Smash sets in <br /> your sweats.</h1> */}
           <h1 className="absolute bottom-8 text-5xl text-black font-bold left-24">Stuista</h1>
        </div>
        <div className="right-part right-part-signup">
           <div className="status mt-7 flex items-center relative">
              {/* <button className="mr-12 text-2xl font-bold">Sign up</button> */}
              <div>
                 <button className="text-2xl font-bold ml-1">Signup</button>
                 <img src={img2} alt="" />
              </div>
              <Link to="/"><button><FontAwesomeIcon className="absolute right-28 text-2xl bottom-1" icon={faXmark} /></button></Link>
           </div>
           <button className="flex google items-center justify-center border-2 rounded-lg border-b-4">
              <img className="w-8 mr-4" src={img1} alt="" />
              <p className="text-lg font-semibold">Continue with Google</p>
           </button>
           <div className="or mt-9">
            {/* <p className="mt-6 top-6"></p> */}
            <h2>or email</h2>
           </div>
           <form action="" onSubmit={handleSubmission} className="sm:flex flex flex-col sm:flex-col">
              <label className="sm:text-black sm:font-semibold sm:mt-7" htmlFor="name">Full Name</label>
              <input value={name} onChange={handleChange} className="sm:rounded-lg sm:text-black sm:pl-1 sm:border-b-4 sm:outline-none sm:font-semibold" type="text" id="name" required/>
              <label className="sm:text-black sm:font-semibold sm:mt-7" htmlFor="email">Email</label>
              <input value={email} onChange={handleChange} className="sm:rounded-lg sm:text-black sm:pl-1 sm:border-b-4 sm:outline-none sm:font-semibold" type="email" id="email" required/>
              <label className="sm:mt-7 sm:text-black sm:font-semibold" htmlFor="password">Password</label>
              <input value={password} onChange={handleChange} className="sm:rounded-lg sm:text-black sm:pl-1 sm:border-b-4 sm:outline-none sm:font-semibold" type="password" id="password" required/>
              <button className="sm:flex log-in sm:items-center sm:justify-center sm:font-semibold sm:text-md sm:rounded-lg">Sign up</button>
           </form>
           <Link to="/Login"><button className="flex google items-center justify-center font-bold text-md rounded-lg border-2 border-b-4 mt-6">Already have an account? Login</button></Link>
         </div>
         <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          theme="dark"
         />
     </div>
    </>
  )
}

export default SignUp