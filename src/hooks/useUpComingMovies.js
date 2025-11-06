import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import {  addPopularMovies, addTopRatedMovies, addupComingMovies } from "../utils/movieSlice"
const useUpComingMovies= ()=>{
    const dispatch = useDispatch  () 

  const getUpComingMovies = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS)
    const json = await data.json()
 
    dispatch(addupComingMovies(json.results))
  }
  useEffect(()=>{
    getUpComingMovies()
  },[]) 
}
export default useUpComingMovies