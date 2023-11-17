import Home from "./Home"
import Navbar from "./Navbar"
import Login from "./Login";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";
import Courses from "./Courses";
import Html from './Course/Html'
import CSS from "./Course/CSS";
import Javascript from "./Course/Javascript";
import React1 from "./Course/React1";
import Footer from "./Components/Footer";
import FirstVideo from "./videoPlayer/HtmlVideo/FirstVideo";
import SecVideo from "./videoPlayer/HtmlVideo/SecVideo";
import ThirdVideo from "./videoPlayer/HtmlVideo/ThirdVideo";
import FourthVideo from "./videoPlayer/HtmlVideo/FourthVideo";
import FifthVideo from "./videoPlayer/HtmlVideo/FifthVideo";
import SixVideo from "./videoPlayer/HtmlVideo/SixVideo";
import SevenVideo from "./videoPlayer/HtmlVideo/SevenVideo";
import EightVideo from "./videoPlayer/HtmlVideo/EightVideo";
import NineVideo from "./videoPlayer/HtmlVideo/NineVideo";
import Cart from "./Cart";
import Cartlist from "./Cartlist";
const App = () => {

   
  return (
    
    <div>
      {/* <Navbar/> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Courses" element={<Courses/>} />
        <Route path="/html" element={<Html/>} />
        <Route path="/css" element={<CSS/>} />
        <Route path="/javascript" element={<Javascript/>} />
        <Route path="/react" element={<React1/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/cartlist" element={<Cartlist/>} />


        {/* Video Routing */}
        <Route path="/firsthtmlVideos" element={<FirstVideo/>} />
       <Route path="/secondhtmlVideos" element={<SecVideo/>} />
       <Route path="/thirdhtmlVideos" element={<ThirdVideo/>} />
        <Route path="/fourthhtmlVideos" element={<FourthVideo/>} />
        <Route path="/fifthhtmlVideos" element={<FifthVideo/>} />
        <Route path="/sixthhtmlVideos" element={<SixVideo/>} />
        <Route path="/seventhhtmlVideos" element={<SevenVideo/>} />
        <Route path="/eighthhtmlVideos" element={<EightVideo/>} />
        <Route path="/ninethhtmlVideos" element={<NineVideo/>} /> 
      </Routes>
    </div>
  )
}

export default App