import React, {useState, useContext} from 'react'
import Button from '@material-ui/core/Button';
import { MovieContext } from './MovieContext';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    input: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

  
const AddMovie = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        setName(e.target.value)
    }
    const updatePrice = e => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {
            name: name, 
            price: price
        }])
    }

    return (
        <form className={classes.container} onSubmit={addMovie}>
            <Input
                name="name"
                onChange={updateName}
                defaultValue={name}
                className={classes.input}
                inputProps={{
                    'aria-label': 'name',
                }}
            />
            <Input
                name="price"
                onChange={updatePrice}
                defaultValue={price}
                className={classes.input}
                inputProps={{
                    'aria-label': 'price',
                }}
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                className={classes.button}>Submit</Button>
        </form>
    )
}
export default AddMovie