import img1 from "./Images/HomeImages/img1.avif"
import img2 from "./Images/HomeImages/img2.svg"
import img3 from "./Images/HomeImages/img3.svg"
import img4 from "./Images/HomeImages/img4.svg"
import Home1 from "./CSS Files/Home.css"
import Navbar from "./Navbar"
// import Card from "./Card"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { account } from './Appwrite/auth'
import { useNavigate } from "react-router-dom"; 
import { faAngleLeft, faAngleRight, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import img from "../public/CoursesImages/teenagers-at-desk.jpg" 
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
      <Navbar />
      <div className="main main-pc-home min-h-full w-full">
        <div className="relative home-img">
          <img src={img1} className="curousal" alt="" />
          <h1 className="absolute inset-y-1/3 left-52 w-2/4 text-white leading-tight font-bold text-5xl">
            Experience a new era of <br /> learning
          </h1>
          <p className="absolute left-52 text-xl font-normal w-1/3 text-white">
            It is more than flashcards: it’s the #1 global learning platform.
            Join our community of 300 million learners using practice tests,
            Expert Solutions and AI-powered tools to improve their grades and
            reach their goals.
          </p>
          {!isloaded ? (
            <Link to="/Signup">
              <button className="get-started absolute left-52 bottom-28 mt-10 pb-5 pt-5 pl-9 pr-9 rounded-lg text-white font-semibold">
                Sign Up now
              </button>
            </Link>
          ) : null}
        </div>
        <div className="w-full h-screen heading">
          <h1 className="text-center text-5xl mt-20 mb-12 font-bold">
            Ace your classes with our new suite of study tools
          </h1>

          {!isloaded ? (
            <div className="text-center loginhandler">
              <Link to="/Login">
                {" "}
                <button className="get-started1 rounded-lg text-white text-3xl font-medium flex items-center justify-between">
                  <h2>Log in as a Student</h2>
                  <FontAwesomeIcon
                    className="rounded-full bg-white text-blue-600 w-10 h-10 text-sm"
                    icon={faAngleRight}
                  />
                </button>
              </Link>
            </div>
          ) : null}

          <div className="stuista-desc h-4/5 w-full">
            <div className="home-left-part ">
              <h1>What is Stuista?</h1>
              <p>
                Stuista ia a secure platform makes it possible for every student
                to instantly access a world of digital learning
              </p>
            </div>
            <div className="home-right-part ">
              <video
                className="w-full h-4/5 border-none"
                autoPlay
                loop
                muted
                src="../CoursesImages/video.mp4"
              ></video>
            </div>
          </div>

          <div>
            <h1 className="text-center text-5xl mt-20 mb-12 font-bold">
              Coming Soon on Stuista
            </h1>
            <div className="card ml-52 rounded bg-white text-center ace mb-16">
              <div className="flex justify-center items-center">
                <div className="w-1/3 ">
                  <img src={img2} className="ml-16" alt="" />
                  <h2 className="text-xl font-bold leading-10">
                    Teacher Dashboard
                  </h2>
                  <p className="text-base">
                    Get Mentorship from our expert<br /> teachers in one click
                  </p>
                </div>
                <div className="w-1/3">
                  <img src={img3} className="ml-16" alt="" />
                  <h2 className="text-xl font-bold leading-10">
                   Meet S-Chat: your AI tutor
                  </h2>
                  <p className="text-base">
                    Engage with your highly <br /> responsive study partner
                  </p>
                </div>
                <div className="w-1/3">
                  <img src={img4} className="ml-16" alt="" />
                  <h2 className="text-xl font-bold leading-10">
                    Get free courses
                  </h2>
                  <p className="text-base">
                    Find trustworthy solutions, expert- <br /> written and
                    AI-enhanced
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-full w-full bg-white flex flex-col items-center justify-center">
            <div className="first-video flex items-center mt-7">
              <div className="left-part flex flex-col justify-end items-center">
                <h2 className="text-5xl font-bold ">
                Connecting every student to a world of learning
                </h2>
                <p className=" text-xl">
                Every day, we work to ensure that students everywhere have instant access to secure digital learning experiences.
                </p>
                <button className="mt-12 h-16 get-started w-40 p-3 rounded-xl flex gap-6 items-center justify-center text-white font-semibold"><h3 className="text-white">About Us</h3><FontAwesomeIcon
                    className=""
                    icon={faArrowCircleRight}
                  /></button>
              </div>
              <div className="right-part flex items-center justify-end">
                  <img src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-digital-and-mobile-learning-picture-image_8371028.png" alt="" />
              </div>
            </div>
            <div className="first-video flex items-center mt-7">
              <div className="right-part flex items-center justify-start">
                <img className="h-96" src="https://img.freepik.com/premium-vector/man-with-laptop-education-working-concept_113065-223.jpg" alt="" />
              </div>
              <div className="left-part flex flex-col items-center justify-start">
                <h2 className="text-5xl font-bold ml-10">Explore our premium Courses</h2>
                <p className="text-xl ml-10">
                Explore and purchase a variety of online courses tailored to your interests and career goals with ease.
                </p>
                <Link to='/Courses'><button className="mt-12 h-16 get-started w-48 p-3 rounded-xl flex gap-6 items-center justify-center text-white font-semibold"><h3 className="text-white">Explore Courses</h3><FontAwesomeIcon
                    className=""
                    icon={faArrowCircleRight}
                  /></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>


                 {/************************************** Mobile Part ********************************************/}

      <div className="main-mobile-home w-full overflow-x-hidden min-h-screen">
        <div className="h-16"></div>
        <div className="relative">
          <img src='../CoursesImages/home-mobile.avif' className="mobile-home-img" alt="" />
          <h1 className="absolute top-20 left-16 font-bold text-3xl w-full text-white">
            Experience a new <br /> era of learning
          </h1>
          <p className="absolute top-40 left-16 w-3/4 text-white">
            It is more than flashcards: it’s the #1 global learning platform.
            Join our community of 300 million learners using practice tests,
            Expert Solutions and AI-powered tools to improve their grades and
            reach their goals.
          </p>
          {!isloaded ? (
            <Link to="/Signup">
              <button className="get-started absolute bottom-60 font-semibold text-white p-3 pl-4 pr-4 rounded-lg left-16">
                Sign Up now
              </button>
            </Link>
          ) : null}
        </div>
        <div className="w-full h-screen heading">
          <h1 className="text-center text-2xl mt-20 mb-12 font-bold">
            Ace your classes with <br /> our new suite of study <br /> tools
          </h1>

          {!isloaded ? (
            <div className="flex items-center justify-center mb-6">
              <Link to="/Login">
                <button className="get-started p-3 rounded-lg text-white font-medium w-56 flex items-center justify-around">
                  <h2>Log in as a Student</h2>
                  <FontAwesomeIcon
                    className=""
                    icon={faAngleRight}
                  />
                </button>
              </Link>
            </div>
          ) : null}

          <div className="">
           <div className="home-right-part-mobile flex flex-col items-center">
              <video
                className="w-80"
                autoPlay
                loop
                muted
                src="../CoursesImages/video.mp4"
              ></video>
            </div>
            {/* <div className="home-left-part-mobile mt-5 mb-5">
              <h1 className="text-3xl font-semibold mb-3 ">What is Stuista?</h1>
              <p className="">
                Stuista ia a secure platform makes it possible for every student
                to instantly access a world of digital learning
              </p>
            </div> */}
          </div>

          <div className="min-h-96 text-3xl font-semibold mt-6 ml-6">
            <h1 className="text-center mb-6">
              Coming Soon on <br />Stuista
            </h1>
            <div className="card-mobile">
              <div className="">
                <div className="">
                  <img src={img2} className="" alt="" />
                  <h2 className="">
                    Teacher Dashboard
                  </h2>
                  <p className="">
                    Get Mentorship from our expert<br /> teachers in one click
                  </p>
                </div>
                <div className="">
                  <img src={img3} className="" alt="" />
                  <h2 className="">
                   Meet S-Chat: your AI tutor
                  </h2>
                  <p className="">
                    Engage with your highly <br /> responsive study partner
                  </p>
                </div>
                <div className="">
                  <img src={img4} className="" alt="" />
                  <h2 className="">
                    Get free courses
                  </h2>
                  <p className="">
                    Find trustworthy solutions, expert- <br /> written and
                    AI-enhanced
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-screen">
            <div className="first-video-mobile">
              <div className="left-part-mobile">
                <h2 className="">
                Connecting every student to a world of learning
                </h2>
                <p className="">
                Every day, we work to ensure that students everywhere have instant access to secure digital learning experiences.
                </p>
                <button className=""><h3 className="text-white">About Us</h3><FontAwesomeIcon
                    className=""
                    icon={faArrowCircleRight}
                  /></button>
              </div>
              <div className="">
                  <img src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-digital-and-mobile-learning-picture-image_8371028.png" alt="" />
              </div>
            </div>
            <div className="first-video-mobile">
              <div className="">
                <img className="" src="https://img.freepik.com/premium-vector/man-with-laptop-education-working-concept_113065-223.jpg" alt="" />
              </div>
              <div className="left-part-mobile">
                <h2 className="">Explore our premium Courses</h2>
                <p className="">
                Explore and purchase a variety of online courses tailored to your interests and career goals with ease.
                </p>
                <Link to='/Courses'><button className=""><h3 className="text-white">Explore Courses</h3><FontAwesomeIcon
                    className=""
                    icon={faArrowCircleRight}
                  /></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home