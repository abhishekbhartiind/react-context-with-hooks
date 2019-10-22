import React from 'react';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import { ThemeProvider } from './ThemeContext'
import AddMovie from './AddMovie'
import Switch from './Switch'
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovie/>
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
