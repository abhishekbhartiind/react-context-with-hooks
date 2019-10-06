import React, { useState, createContext } from 'react'
export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id:1
        },
        {
            name: 'GOT',
            price: '$10',
            id:3
        },
        {
            name: 'Inception',
            price: '$10',
            id:2
        },
        {
            name: 'Intersteller',
            price: '$10',
            id:4
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
