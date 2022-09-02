
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/movie';
import SearchBox from './components/moviesearch';
import Home from './components/movielist';
import StarRating from './components/stars';
import Movie from './components/movie';
import Main from './components/reviewlist';

function App() {
  return (
    <div>
      
      <h3>Movie Review</h3>
    
    <div className="App">
      
      <MovieList />
    </div>
    </div>
  );
}

export default App;
