import React, {useContext} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 500,
      width: '150px',
      margin: '0 20px'
    }
}));

/**
 * 
 * @param {props} props
 * 
 * instead to pass props we can pass attribute directlty 
 * to parameter with curly braces  
 */

const Movie = ({name, price}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="body2" color="textPrimary" component="h3">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {price}
                </Typography>
            </CardContent>            
        </Card>
    )
}

export default Movie