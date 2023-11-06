import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Navbar1 from "./CSS Files/Navbar.css"
import Login from './Login'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="main1 w-full h-14 flex items-center">
        <div className="logo w-2/4 ml-32">
            <h1 className="text-white">Stuista</h1>
        </div>
        <div className="right flex items-center justify-evenly gap-20">
            <input type="text" className="rounded w-72 h-8 text-black pl-1 outline-none " placeholder="Search" />
            <Link to="/Login"><button className="text-black bg-white text-xs p-2 rounded-lg font-bold font-sans">LOGIN</button></Link>
            <button className="text-black bg-white text-xs p-2 rounded-lg font-bold font-sans">SIGNUP</button>
            <button><FontAwesomeIcon className='mr-10 text-white text-xl' icon={faCartShopping} /></button>
        </div>
      </div>
    </>
  )
}

export default Navbar