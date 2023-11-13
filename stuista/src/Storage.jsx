import { Client, Storage } from "appwrite";
import { useState } from "react"
import Navbar from "./Navbar";
const client = new Client();

const storage = new Storage(client);
const Storage1 = () => {

    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('654739634a8f958f0d8c')
    ;
    
    const [videoUrl, setVideoUrl] = useState('https://cloud.appwrite.io/v1/storage/buckets/654761da456fc400b5f6/files/6550a240c447fca6da66/view?project=654739634a8f958f0d8c&mode=admin');


  return (
    <div className="main w-full h-screen">
       <Navbar />
       <div className="w-3/5 h-screen">
           {videoUrl && (
           <video className="pt-16 pl-7 rounded" controls>
             <source src={videoUrl} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
         )}
         <h1 className="text-2xl font-semibold mt-6 pl-7">HTML crash course</h1>
       </div>
    </div>
  )
}

export default Storage1;