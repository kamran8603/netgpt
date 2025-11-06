// import React from 'react'
// import MovieList from './MovieList'
// import {useSelector }from"react-redux"
// function SeccondryContainer() {
//   const movies = useSelector(store=>store.movies)
//   return (
//     movies.nowPlayingMovies && (
//     <div className=' bg-black'>
//      <div className=' -mt-52 pl-12 relative z-20'>
//       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
//       <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
//       <MovieList title={"Popular"} movies={movies.popularMovies}/>
//       <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
//       {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/> */}
//      </div>
        
     
      
//     </div>
//      )
//   ) 
// }

// export default SeccondryContainer
// // https://api.themoviedb.org/3/movie/popular

import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux"

function SeccondryContainer() {
  const movies = useSelector(store => store.movies)

  return (
    movies.nowPlayingMovies && (
      <div className='bg-[#141414] min-h-screen text-white'>
        <div className='-mt-48 pl-8 md:pl-12 relative z-20 space-y-10'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  )
}

export default SeccondryContainer
