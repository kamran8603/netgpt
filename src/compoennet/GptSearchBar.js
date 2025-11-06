import React from 'react'

function GptSearchBar() {
  return (
    <div>
     <form className='p-6 m-6 bg-black'>
     <input className='p-4 m-4' type="text" placeholder='What would you like to watch today?' />
     <button className='py-2 px-4 bg-red-600 text-white rounded-lg'>Search</button>
     </form>
    </div>
  )
}

export default GptSearchBar
