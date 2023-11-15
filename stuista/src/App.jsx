import Home from "./Home"
import Navbar from "./Navbar"
import Login from "./Login";
import SignUp from "./SignUp";
import Storage1 from "./Storage";
import { Routes, Route } from "react-router-dom";
import Courses from "./Courses";
import Html from './Course/Html'
import CSS from "./Course/CSS";
import Javascript from "./Course/Javascript";
import React1 from "./Course/React1";
import Footer from "./Components/Footer";
import FirstVideo from "./videoPlayer/HtmlVideo/FirstVideo";
const App = () => {

   
  return (
    
    <div>
      {/* <Navbar/> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Storage" element={<Storage1 />} />
        <Route path="/Courses" element={<Courses/>} />
        <Route path="/html" element={<Html/>} />
        <Route path="/css" element={<CSS/>} />
        <Route path="/javascript" element={<Javascript/>} />
        <Route path="/react" element={<React1/>} />
        {/* <Route path="/firsthtmlVideos" element={<Sec/>} /> */}
        <Route path="/firsthtmlVideos" element={<FirstVideo/>} />
       {/* <Route path="/secondhtmlVideos" element={</>} />
       <Route path="/thirdhtmlVideos" element={</>} />
       <Route path="/fourthhtmlVideos" element={</>} />
       <Route path="/fifthhtmlVideos" element={</>} />
       <Route path="/sixthhtmlVideos" element={</>} />
       <Route path="/seventhhtmlVideos" element={</>} />
       <Route path="/eighthhtmlVideos" element={</>} />
       <Route path="/ninethhtmlVideos" element={</>} /> */}
      </Routes>
    </div>
  )
}

export default App