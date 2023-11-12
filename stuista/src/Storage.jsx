import React from 'react'
import { Client, Storage } from "appwrite";
import { useEffect, useState } from "react"
const client = new Client();

const storage = new Storage(client);
const Storage1 = () => {

    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('654739634a8f958f0d8c')
    ;
    
       const [videoUrl, setVideoUrl] = useState('https://cloud.appwrite.io/v1/storage/buckets/654761da456fc400b5f6/files/6550a240c447fca6da66/view?project=654739634a8f958f0d8c&mode=admin');

  return (
    <div>
        {videoUrl && (
        <video controls width="400">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

export default Storage1;