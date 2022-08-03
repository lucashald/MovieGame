import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MovieList from "./MovieList"

function App() {
  const [movie, updateMovie] = useState({})
  const getMovie = () => {
    updateMovie(MovieList[Math.floor(Math.random() * MovieList.length)])
  }
    
  return (
    <View>
      <Text>{movie.title} from {movie.year} starring {movie.starring}
      <button onClick={getMovie}>Get Random Movie</button></Text>
    </View>
  );
}

export default App;