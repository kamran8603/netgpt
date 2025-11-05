import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='py-36 px-12'>
   <h1 className='text-6xl font-bold'>{title}</h1>
   <p className='py-6 text-lg w-1/4'>{overview}</p>
   <div className=''>
    <button className='bg-gray-500  text-white p-4 px-12 bg-opacity-50 rounded'> ▶ Play</button>
    <button className='mx-2 bg-gray-500  text-white p-4 px-12 bg-opacity-50 rounded'>More Info</button>
   </div>
     
    </div>
  )
}

export default VideoTitle
