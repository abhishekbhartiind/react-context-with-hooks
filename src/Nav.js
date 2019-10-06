import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "center"
    },
    para: {
        margin: '0 20px'
    }
}));

const Nav = () => {
    const classes = useStyles();
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Movie List
                    </Typography>
                    <p className={classes.para}>list of Movie:  {movies.length}</p>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav