import { Button, CardActions, Typography } from "@mui/material"
import CardForm from "./CardForm";


const trainItem = (props) =>{


    const price = `$${props.price.toFixed(2)}`;

    return( 
        
        <li>
        <Typography gutterBottom variant="h5" sx={{marginRight: 'auto', textTransform:'uppercase', fontWeight:'700'}}>
        {props.name}
        </Typography>
        <Typography variant="h6" color="red" sx={{fontWeight:'800', textAlign:'left'}}>
        {price}
        </Typography>
        
        
        
        </li>)
}

export default trainItem

/**
 * <CardActions sx={{marginLeft: 'auto', display:'flex', flexDirection:'column' , justifyContent:'space-evenly' }}>
  <CardForm />
    <Button size="large" variant="contained" color="secondary" sx={{borderRadius: '50px', color:'grey', width:'180px'}}>buy Ticket</Button>
   
  </CardActions>
 */