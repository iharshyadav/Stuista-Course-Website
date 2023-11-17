import React, { useState } from 'react'
import { Client, Storage } from "appwrite";
import Navbar from '../../Navbar';

const client = new Client();

const storage = new Storage(client);

const ThirdVideo = () => {

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('654739634a8f958f0d8c')
    ;

   const [html1, sethtml1] = useState("https://cloud.appwrite.io/v1/storage/buckets/654761da456fc400b5f6/files/65559c628d5cc2e7d268/view?project=654739634a8f958f0d8c&mode=admin")

  return (
    <div className="main w-full h-screen">
      <div className="h-20">
        <Navbar />
      </div>
      <div className="w-full h-screen flex items-center gap-8">
        <div className="left-part w-3/5 h-screen rounded-xl ml-12">
          {html1 && (
            <video className="rounded-xl ml-2" controls>
              <source src={html1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <h1 className="text-2xl font-semibold mt-3 ml-4">
            HTML crash course
          </h1>
          <div className="teacher flex items-center justify-between h-16 rounded-t-2xl w-full ml-2 mt-4">
            <h1 className="ml-6">Angela YU <span className="pb-px pt-px pl-1 pr-1 text-xs bg-yellow-400 rounded-md cursor-pointer w-24 uppercase font-medium">Teacher</span></h1>
            <button className="mr-6 pb-2 pt-2 pl-4 pr-4 text-sm bg-yellow-400 rounded-lg w-24 uppercase font-semibold">
              Profile
            </button>
          </div>
          <hr className="ml-3"/>
          <div className="discription ml-2 pt-4 pb-4 pl-4 w-full rounded-b-2xl">
            <h1>
              Complete react course: In this react course, we will see how to
              use react using projects. React is an amazing library for creating
              user interfaces This is going to be a project-based course full of
              real-world react projects. Make sure to access the playlist here
              (Important): • React Js Tutorials in Hindi All the source code and
              other material will be uploaded on codewithharry.com as and when
              available! All the links will be provided in the description!
              ►Check out my English channel here: / programmingwithharry ►Click
              here to subscribe - / @codewithharry
            </h1>
          </div>
          <div className="h-16"></div>
        </div>
        <div className="right-part w-2/5 flex justify-center items-start h-full">
           <div className="big-box w-3/4 h-4/5 rounded-2xl">
               <div className="h-24 p-3 rounded-t-2xl box">
                  <h1 className="mt-2 ml-2 text-2xl font-bold">HTML Crash Course</h1> 
               </div>
               <div>

               </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdVideo