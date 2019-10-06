import React from 'react';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie'
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
