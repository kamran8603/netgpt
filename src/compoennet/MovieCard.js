// import React from 'react'
// import { IMG_CDN_URL } from '../utils/constants'


// function MovieCard({posterPath}) {
//   return (
//     <div className='w-48 pr-4'>
        
//         <img 
//         src={IMG_CDN_URL+posterPath}
//         alt='Movie card'
//         />
      
//     </div>
//   )
// }

// export default MovieCard

import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({ posterPath }) {
  return (
    <div className='w-32 sm:w-40 md:w-48 lg:w-52 flex-shrink-0 transform transition duration-300 hover:scale-110 cursor-pointer'>
      <img
        src={IMG_CDN_URL + posterPath}
        alt='Movie card'
        className='rounded-md shadow-md hover:shadow-xl'
      />
    </div>
  )
}

export default MovieCard
