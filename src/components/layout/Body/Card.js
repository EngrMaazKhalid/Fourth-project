import { Card , CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";
import { borderRadius, textAlign } from "@mui/system";
import classes from './Card-section.module.css'
import React from "react";
import trainItem from "./TrainItem";
import AvailableTrain from "./AvailableTrain";




const trainEx = [
  {
    name:'Bullet train',
    id: '01',
    price:'10.56'
  },
  {
    name:'green-line',
    id: '02',
    price:'22.43'
  },
  {
    name:'tez gaam',
    id: '03',
    price:'08.88'
  }

]


const TrainCard =() => {

  const TrainList= (trainEx.map((train)=><trainItem key={train.id} name={train.name} price={train.price} />))
    return(
        <div className={classes['section2']}>
               <div className={classes['Card-section']}>
               
  <AvailableTrain>
    
   <ul>{TrainList}</ul>
   </AvailableTrain>
   
  
  
  
  
  </div>
  </div>
 
    )
}

export default TrainCard

/**
 * <Card sx={{ boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '80%' , display:'flex' , flexDirection:'row', borderRadius:'20px', border: '2px solid black'}}>
    <CardMedia
        sx={{ display: 'block',
            height: '130px',
            width: 'auto'}}
      component="img"
      alt="green iguana"
      height="140"
      image={require('./train2.jpg')}
    />
    <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
      <Typography gutterBottom variant="h5" sx={{marginRight: 'auto', textTransform:'uppercase', fontWeight:'700'}}>
       Green-line Express
      </Typography>
      <Typography variant="h6" color="red" sx={{fontWeight:'800', textAlign:'left'}}>
      $22.56
        
      </Typography>
    </CardContent>
    <CardActions sx={{marginLeft: 'auto', display:'flex', flexDirection:'column' , justifyContent:'space-evenly'}}>
    <CardForm
    label='amount'
    input={{
      id:'amount',
      type:'number',
      min:'1',
      max:'50',
      step:'1'
    }} />
      <Button size="large" variant="contained" color="secondary" sx={{borderRadius: '50px', color:'grey', width:'180px'}}>buy Ticket</Button>
     
    </CardActions>
  </Card>
 */