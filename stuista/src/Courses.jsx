import Navbar from './Navbar'
import Courses1 from './CSS Files/Courses.css'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <>
      <div className='h-16'>
         <Navbar/>
      </div>
      <div className="main">
        <div>
            <h1 className='mt-24 ml-64 tracking-wide text-3xl font-bold'>Explore Courses</h1>
            <div className='ml-64 mt-7 text-sm text-blue-600 font-semibold flex justify-start h-9 pb-3 items-center w-60 gap-7'>
               <button className=''>Web Development</button>
               <button className=''>Details</button>
            </div>
        </div>
        <div className='courses flex items-center justify-center flex-col'>
             <div className='flex items-center justify-center gap-32'>
                 <div className=" h-60 object-cover rounded-3xl bg-black">
                     <Link to='/html'><img className=' rounded-3xl h-60' src="../public/CoursesImages/htmlimg.webp" alt="" /></Link>
                 </div>
                 <div className=" h-60  rounded-3xl bg-black">
                     <Link to='/css'><img className=' rounded-3xl h-60' src="../public/CoursesImages/cssimg.webp" alt="" /></Link>
                 </div>
             </div>
             <div className='flex items-center justify-center gap-32 mt-16'>
                 <div className=" h-60 rounded-3xl  bg-black">
                 <Link to='/javascript'><img className=' rounded-3xl h-60' src="../public/CoursesImages/javaimg.jpg" alt="" /></Link>
                 </div>
                 <div className=" h-60 rounded-3xl bg-black">
                 <Link to='/react'><img className=' rounded-3xl h-60' src="../public/CoursesImages/reactimg.jpg" alt="" /></Link>
                 </div>
             </div>
        </div>
      </div>
    </>
  )
}

export default Courses