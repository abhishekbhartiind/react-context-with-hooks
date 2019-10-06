import React, {useState} from 'react'
import Button from '@material-ui/core/Button';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
    }
    return (
        <form>
            <input 
                type="text" 
                name="name"
                value={name}
                onChange={updateName}
            />
            <input 
                type="text" 
                name="price"
                value={price}
                onChange={updatePrice}
            />
            <Button variant="contained" color="primary">Submit</Button>
        </form>
    )
}
export default AddMovie