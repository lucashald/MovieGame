import React, { useState } from 'react';
import MovieList from "./MovieList";
import GuessBox from "./GuessBox";

const getMovie = () => {
    let randomMovie = MovieList[Math.floor(Math.random() * MovieList.length)]
    return randomMovie
  }

function App() {
  const [movie, updateMovie] = useState(getMovie())
  const [guess, updateGuess] = useState(false)
  const [correctCount, updateCount] = useState(0)

const getNewMovie = () => {
  updateMovie(getMovie())
  updateGuess()
}

const handleGuess = (movieGuess) => {
  if (movieGuess == movie) {
    updateGuess(true)
    updateCount(correctCount + 1)
    setTimeout(getNewMovie, [1000])
    }
}

  return (
    <main>
      <p>
      What {movie.year} film starred {movie.starring}?
      </p>
      <GuessBox movie={movie} correct={true} handleGuess={handleGuess} />
      <GuessBox movie={getMovie()} correct={false} />
      <GuessBox movie={getMovie()} correct={false} />
      <GuessBox movie={getMovie()} correct={false} handleGuess={handleGuess} />
      <br />
      {guess && "You got it!"}
      <p>Your current score is {correctCount}</p>
            <br />
      <button onClick={getNewMovie}>Reset</button>
    </main>
  );
}

export default App;