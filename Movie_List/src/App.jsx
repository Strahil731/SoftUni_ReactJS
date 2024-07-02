import './App.css'
import MovieList from './components/MovieList'

function App() {

  const movies = [
    "Taxi 5",
    "Fast and Furious 5"
  ];

  return (
    <>
      <MovieList movies={movies}/>
    </>
  )
}

export default App
