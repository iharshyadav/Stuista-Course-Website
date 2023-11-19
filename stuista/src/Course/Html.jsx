import Navbar from "../Navbar"
import html1 from '../CSS Files/Html.css'
import { useEffect, useState } from "react"
import { account } from "../Appwrite/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Html = ({save}) => {
   const navigate = useNavigate()

   const [isloaded, setisLoaded] = useState(false);
   useEffect(()=>{
      const user = account.get()
      user.then(
         (res)=>{
            setisLoaded(true);
            // navigate("/html")
         },
         (err)=>{
            navigate('/Login')
         }
      )
   },[navigate]);    
  return (
    <>
       <div className="h-16">
          <Navbar/>
       </div>
       {isloaded && save? 
         (
            <div className="main">
          <div className="mt-20 ml-60">
             <h1 className="text-3xl font-medium">HTML Crash Course</h1>
          </div>
          <div className="html1 mt-12 flex items-start justify-center">
             <div className="vid flex flex-col items-start justify-start w-3/4 h-full ">
                <h1 className="nine-vid font-medium mt-8 ml-12 relative">9 Videos</h1>
                <hr className="text-black w-20 ml-9 bg-blue-700 h-1 absolute" />
                <div className="vid-box">
                    <div className='flex items-center justify-center gap-8 ml-7 mt-12'>
                       <Link to='/firsthtmlVideos'>
                       <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">1. Introduction to Html</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full border1">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                       </div></Link>
                       <Link to='/secondhtmlVideos'>
                       <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">2. The Anatomy of an HTML Tag</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                       </div>
                       </Link>
                       <Link to='/thirdhtmlVideos'>
                       <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">3. What we're building - HTML Personal Site</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                       </div>
                       </Link>
                    </div>
                    <div className='flex items-center justify-center gap-8 ml-7 mt-12'>
                       <Link to='/fourthhtmlVideos'>
                       <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">4. What is The HTML Boilerplate</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                      </div>
                      </Link>
                      <Link to='/fifthhtmlVideos'>
                       <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">5. How to Structure Text in HTML</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                       </div>
                       </Link>
                       <Link to='/sixthhtmlVideos'>
                       <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">6. HTML Lists</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                       </div>
                       </Link>
                    </div>
                    <div className='flex items-center justify-center gap-8 ml-7 mt-12'>
                      <Link to='/seventhhtmlVideos'>
                      <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">7. HTML Image Elements</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                      </div>
                      </Link>
                      <Link to='/eighthhtmlVideos'>
                       <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">8. HTML Links and Anchor Tags</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                       </div>
                       </Link>
                       <Link to='/ninethhtmlVideos'>
                       <div className="first rounded-3xl bg-white relative">
                         <h1 className="pl-4 mt-4 font-semibold h-1 ml-2">9. How to Ace this Course</h1>
                         <div className="absolute bottom-3 flex items-center justify-between w-full">
                            <h1 className="pl-4 mt-4 font-semibold ml-2 ">Angela Yu</h1>
                            <button className="mr-7 mt-4 font-semibold">Teacher</button>
                         </div>
                       </div>
                       </Link>
                    </div>
                </div>
             </div>
          </div>
       </div>
         )
      :<h1> Please Login....!!!!!</h1>}
    </>
  )
}

export default Html