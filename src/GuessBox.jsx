import React, { useState } from 'react';
import MovieList from "./MovieList"

function GuessBox(props) {
    
  return (
    <>
      <button onClick={() => props.handleGuess(props.movie)}>{props.movie.title}</button>
    </>
  );
}

export default GuessBox;