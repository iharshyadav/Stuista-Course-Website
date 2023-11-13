import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Navbar1 from "./CSS Files/Navbar.css"
import Login from './Login'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="main1 w-full h-16 flex items-center fixed z-10">
        <div className="logo w-2/4 ml-20 flex gap-20">
            <h1 className="">Stuista</h1>
            <Link to="/Courses"><button>Courses</button></Link>
        </div>
        <div className="right flex items-center justify-evenly gap-8">
            <input type="text" className="rounded-2xl h-10 pl-2 outline-none " placeholder="Study sets,textbooks,questions" />
            <Link to="/Login"><button className=" w-20 text-sm font-normal pb-2 pt-2 pl-4 pr-4 login">Log in</button></Link>
            <Link to="/Signup"><button className="pb-2 pt-2 pl-4 pr-4 text-sm bg-yellow-400 rounded-lg w-24">Sign up</button></Link>
            <button><FontAwesomeIcon className='mr-10' icon={faCartShopping} /></button>
        </div>
      </div>
    </>
  )
}

export default Navbar