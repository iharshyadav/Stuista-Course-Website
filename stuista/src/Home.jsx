import img1 from "./Images/HomeImages/img1.avif"
import img2 from "./Images/HomeImages/img2.svg"
import img3 from "./Images/HomeImages/img3.svg"
import img4 from "./Images/HomeImages/img4.svg"
import vid from "./Videos/stuista1-video.mp4"
import vid1 from "./Videos/homework.mp4"
import Home1 from "./CSS Files/Home.css"
import Navbar from "./Navbar"
// import Card from "./Card"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { account } from './Appwrite/auth'
import { useNavigate } from "react-router-dom";
const Home = () => {

   const navigate = useNavigate()

   const [isloaded, setisLoaded] = useState(false);
   useEffect(()=>{
      const user = account.get()
      user.then(
         (res)=>{
            setisLoaded(true);    
         },
         (err)=>{
         //   navigate('/Login')
         // console.log(err);
         }
      )
   },[navigate])



  return (
    <>
      <Navbar/>
      <div className="main min-h-full">
         <div className="relative home-img">
            <img src={img1} className="curousal" alt="" />
            <h1 className="absolute inset-y-1/3 left-52 w-2/4 text-white leading-tight font-bold text-5xl">Experience a new era of <br /> learning</h1>
            <p className="absolute left-52 text-xl font-normal w-1/3 text-white">It is more than flashcards: it’s the #1 global learning platform. Join our community of 300 million learners using practice tests, Expert Solutions and AI-powered tools to improve their grades and reach their goals.</p>
            {!isloaded?(
               <Link to='/Signup'><button className="get-started absolute left-52 bottom-28 mt-10 pb-5 pt-5 pl-9 pr-9 rounded-lg text-white font-semibold">Sign Up now</button></Link>
            ):null}
         </div>
         <div className="w-full heading">
            <h1 className="text-center text-5xl mt-20 mb-12 font-bold">Ace your classes with our new suite of study tools</h1>
            <div className="card ml-52 rounded bg-white text-center ace">
               <div className="flex justify-center items-center">
                 <div className="w-1/3 ">
                    <img src={img2} className="ml-16" alt="" />
                    <h2 className="text-xl font-bold leading-10">lorem lorem lorem</h2>
                    <p className="text-base">Get flashcards, practice tests and <br /> more in one click</p>
                 </div>
                 <div className="w-1/3">
                    <img src={img3} className="ml-16"  alt="" />
                    <h2 className="text-xl font-bold leading-10">lorem lorem lorem lorem</h2>
                    <p className="text-base">Engage with your highly <br /> responsive study partner</p>
                 </div>
                 <div className="w-1/3">
                    <img src={img4} className="ml-16"  alt="" />
                    <h2 className="text-xl font-bold leading-10">get free courses</h2>
                    <p className="text-base">Find trustworthy solutions, expert- <br /> written and AI-enhanced</p>
                 </div>
               </div>  
            </div>
            {!isloaded?(
               <div className="mt-16 mb-12 text-center">
               <button className="get-started mt-10 pb-5 pt-5 pl-8 pr-8 rounded-lg text-white font-semibold">Get Started</button>
            </div>
            ):null}
            <div className="min-h-full w-full bg-white flex flex-col items-center justify-center">
                <div className="first-video flex items-center mt-7">
                    <div className="left-part flex flex-col justify-end">
                        <h2 className="text-5xl font-bold ml-6">lorem <br /> graet your with with to</h2>
                        <p className="ml-6 text-xl">Magic Notes saves you time by turning your notes into flashcards, practice tests, outlines and more.</p>
                    </div>
                    <div className="right-part flex items-center justify-center">
                      <video autoPlay loop muted src={vid}></video>
                    </div>
                </div>
                <div className="first-video flex items-center mt-7">
                    <div className="right-part flex items-center justify-start">
                      <video autoPlay loop muted src={vid1}></video>
                    </div>
                    <div className="left-part flex flex-col justify-start w-">
                        <h2 className="text-5xl font-bold">lorem for with day</h2>
                        <p className="text-xl">Turn your flashcards into practice tests. Enhanced by AI, Learn and Test mode help you memorize everything you need to know.Get started</p>
                    </div>

                </div>
            </div>
         </div>
      </div>
      <div>
    </div>
    </>
  )
}

export default Home