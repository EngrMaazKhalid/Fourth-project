import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

import CardForm from "./CardForm"




  const AvailableTrain= (props) =>{
     
return(
    <Card sx={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '80%' , display:'flex' , flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap' ,borderRadius:'20px', border: '2px solid black', marginBottom:'20px' }}>
    <CardMedia
        sx={{ display: 'block',
            height: '130px',
            width: 'auto'}}
      component="img"
      alt="green iguana"
      height="140"
      image={require('./train1.jpg')}
    />
    <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
    {props.children}
    </CardContent>
    </Card>


)
  }

  export default AvailableTrain
  