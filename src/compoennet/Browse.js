import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SeccondryContainer from './SeccondryContainer'



function Browse() {
  useNowPlayingMovies()
  return (
    <div>
      <Header/> 
      <MainContainer/>
      <SeccondryContainer/>
    </div>
  )
}

export default Browse
