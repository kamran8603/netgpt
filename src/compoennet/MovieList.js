// import React from 'react'
// import MovieCard from './MovieCard'

// function MovieList({title, movies}) {
//     console.log(movies)
//   return (
//     <div className='px-6 '>
//         <h1 className='text-3xl py-4 text-white'>{title}</h1>
//         <div className='flex overflow-x-scroll '>
            
//             <div className='flex'>
//            {
//             movies?.map((movie)=>(
//                 <MovieCard key={movie.id} posterPath={movie.poster_path} />
//             ))
//            }
//             </div>
//         </div>

//     </div>
//   )
// }

// export default MovieList

import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, movies }) {
  return (
    <div className='px-4 md:px-8'>
      <h1 className='text-2xl md:text-3xl font-semibold py-3 md:py-4'>
        {title}
      </h1>

      {/* Scrollable movie row */}
      <div className='flex overflow-x-scroll scrollbar-hide space-x-4 pb-4'>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList

 