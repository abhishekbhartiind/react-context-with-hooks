import React, {useState, useContext} from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    movie: {
       display: "flex",
       flexGrow: 1,
       alignContent: "center",
       justifyContent: "center",
       margin: "1em"
    }
}));


const MovieList = () => {
    const classes = useStyles();
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className={classes.movie} >
            {
                movies.map((movie, ix) => (
                    <Movie key={ix} name={movie.name} price={movie.price}/>
                ))
                // movies.map(movie => {
                //     return (
                //         <Movie name={movie.name}/>
                //     )
                // })
            }
        </div>
    )
}

export default MovieList