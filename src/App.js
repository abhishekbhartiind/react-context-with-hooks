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
    <ThemeProvider>
       <MovieProvider>
        <div className="App">
          <Nav/>
          <Switch/>
          <AddMovie/>
          <MovieList/>
        </div>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
