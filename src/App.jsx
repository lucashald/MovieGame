import React, { useState } from 'react';
import MovieList from "./MovieList";
import GuessBox from "./GuessBox";

// Returns an array of 4 movies at random.
const getMovies = () => {
  let randomMovieArray = []
  for (let i = 0; i < 4; i++) {
  let randomMovie = MovieList[Math.floor(Math.random() * MovieList.length)]
  randomMovieArray.push(randomMovie)
  }
  return randomMovieArray
  }

// Returns a random number between 0 and 3.
const randomNum = () => {
  return Math.floor(Math.random() * 4)
}

function App() {
  const [movie, updateMovie] = useState(getMovies())
  const [guess, updateGuess] = useState(false)
  const [correctCount, updateCount] = useState(0)
  const [correctMovie, updateCorrect] = useState(randomNum())
  const [ready, updateReady] = useState(true)

const getNewMovie = () => {
  updateMovie(getMovies())
  updateGuess()
  updateReady(true)
  updateCorrect(randomNum())
}

const handleGuess = (movieGuess) => {
  if (ready === true) {
    updateReady(false)
    if (movieGuess === movie[correctMovie]) {
    updateGuess(true)
    updateCount(correctCount + 1)
    setTimeout(getNewMovie, [2000])
    } else {
    setTimeout(getNewMovie, [2000])
    }
    }
}

  return (
    <main>
      <p>
      What {movie[correctMovie].year} film starred {movie[correctMovie].starring}?
      </p>
      <GuessBox movie={movie[0]} handleGuess={handleGuess} />
      <GuessBox movie={movie[1]} handleGuess={handleGuess} />
      <GuessBox movie={movie[2]} handleGuess={handleGuess} />
      <GuessBox movie={movie[3]} handleGuess={handleGuess} />
      <br />
      {guess && "You got it!"}
      <p>Your current score is {correctCount}</p>
            <br />
      <button onClick={getNewMovie}>Reset</button>
      {ready ? "ready" : `It was ${movie[correctMovie].title}`}
    </main>
  );
}

export default App;