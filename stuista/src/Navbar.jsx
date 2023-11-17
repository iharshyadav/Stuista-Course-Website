import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Navbar1 from "./CSS Files/Navbar.css"
import Login from './Login'
import { Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { account } from './Appwrite/auth'
import { useNavigate } from "react-router-dom";
const Navbar = () => {

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

  async function logOut(){
      await account.deleteSession('current')
      // navigate('/Login')
      setisLoaded(false);
  }


  return (
    <>
      <div className="main1 w-full h-16 flex items-center fixed z-10">
        <div className="logo w-2/4 ml-20 flex gap-20">
            <Link to='/'><h1 className="cursor-pointer logo1">Stuista</h1></Link>
            <Link to="/Courses"><button className=" pb-2 pt-2 pl-3 pr-3 text-sm login1 rounded-lg mr-5 w-24">Courses</button></Link>
        </div>
        <div className="right flex items-center justify-evenly gap-8">
            <input type="text" className="rounded-2xl h-10 pl-2 outline-none " placeholder="Study sets,textbooks,questions" />
            {!isloaded?(
              <div className='w-80 flex items-center justify-evenly'>
                  <Link to="/Login"><button className=" w-20 text-sm font-normal pb-2 pt-2 pl-4 pr-4 login">Log in</button></Link>
                  <Link to="/Signup"><button className="pb-2 pt-2 pl-4 pr-4 text-sm bg-yellow-400 rounded-lg w-24">Sign up</button></Link>
                  
              </div>
            ):<div className='flex gap-6'><button onClick={logOut} className=" pb-2 pt-2 pl-3 pr-3 text-sm login1 rounded-lg mr-5 w-24">Logout</button>
            <Link to='/cartlist'><button><FontAwesomeIcon className='mr-10' icon={faCartShopping} /></button></Link></div>}
        </div>
      </div>
    </>
  )
}

export default Navbar