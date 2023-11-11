import SignUp1 from "./CSS Files/Signup.css"
import img4 from "./Images/LoginImages/img4.jpg"
import img1 from "./Images/LoginImages/google1.png"
import img2 from "./Images/LoginImages/underline.svg"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {

    

  return (
    <>
      <div className="main flex w-full">
        <div className="left-part relative">
           <img src={img4} className="object-cover h-full w-full" alt="" />
           {/* <h1 className="smash absolute top-16 left-12 font-bold">Smash sets in <br /> your sweats.</h1> */}
           <h1 className="absolute bottom-8 text-5xl text-black font-bold left-24">Stuista</h1>
        </div>
        <div className="right-part">
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
           <form action="" className="flex flex-col">
              <label className="text-black font-semibold mt-5" htmlFor="name">Full Name</label>
              <input className="rounded-lg text-black pl-1 border-b-4 outline-none font-semibold" type="text" name="" id="" />
              <label className="text-black font-semibold mt-8" htmlFor="email">Email</label>
              <input className="rounded-lg text-black pl-1 border-b-4 outline-none font-semibold" type="email" name="" id="" />
              <label className="mt-8 text-black font-semibold" htmlFor="password">Password</label>
              <input className="rounded-lg text-black pl-1 border-b-4 outline-none font-semibold" type="password" name="" id="" placeholder=""/>
              <button className="flex log-in items-center justify-center font-semibold text-md rounded-lg">Sign up</button>
           </form>
           <Link to="/Login"><button className="flex google items-center justify-center font-bold text-md rounded-lg border-2 border-b-4">Already have an account? Login</button></Link>
         </div>
     </div>
    </>
  )
}

export default SignUp