import img1 from "./Images/HomeImages/img1.png"
import img2 from "./Images/HomeImages/img2.jpg"
import img3 from "./Images/HomeImages/img3.avif"
import img4 from "./Images/HomeImages/img4.avif"
import img5 from "./Images/HomeImages/img5.jpg"
import Home1 from "./CSS Files/Home.css"
import Navbar from "./Navbar"
import Card from "./Card"
const Home = () => {

  return (
    <>
      <Navbar/>
      <div className="main min-h-full">
        <img src={img1} className="curousal" alt="" />
        <div className="strip w-full h-10 flex items-center text-white justify-evenly font-sans">
          <h2>PROGRAMMING</h2>
          <h2>WEB DESIGNING</h2>
          <h2>APP DESIGNING</h2>
          <h2>MACHINE LEARNING</h2>
          <h2>UI/UX DESIGNING</h2>
        </div>
        <Card/>
        <div className="program w-full">
          <h1 className="text-center pt-6 text-2xl ">All our Programs include</h1>
          <div className="flex mt-16 ml-80">
            <img className="" src={img2} alt="" />
            <div className="w-48 ml-6 flex-col">
               <h1 className="font-semibold"><span className="font-bold">Real-world projects</span> from industry experts</h1>
               <p className=" para text-xs mt-4">With real world projects and immersive content built in partnership with top tier <br /> companies, you’ll master the tech skills companies want</p>
            </div>
            <img className="ml-28" src={img3} alt="" />
            <div className="w-52 ml-6 flex-col">
               <h1 className="font-bold">Technical mentor support</h1>
               <p className=" para text-xs mt-10">With real world projects and <br /> immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
            </div>
          </div>
          <div className="flex items-center mt-16 ml-80 ">
            <img src={img4} alt="" />
            <div className="w-48 ml-6 flex-col">
               <h1 className="font-bold">Career services</h1>
               <p className=" para text-xs mt-4">With real world projects and immersive content built in partnership with top tier <br /> companies, you’ll master the tech skills companies want</p>
            </div>
            <img src={img5} className="ml-28" alt="" />
            <div className="w-52 ml-6 flex-col">
               <h1 className="font-bold">Flexible learning program</h1>
               <p className=" para text-xs mt-4 ">With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want</p>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Home