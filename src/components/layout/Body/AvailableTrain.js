import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"
import classes from './Card-section.module.css'






const AvailableTrain =(props) =>{





return(

  <div className={classes['section2']}>
      <div className={classes['Card-section']}>
    <Card sx={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px', width: '80%' , display:'flex' , flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap' ,borderRadius:'20px', border: '2px solid black', marginBottom:'20px' }}>
 
    
    {props.children}
  
    </Card>

    </div>
    </div>

 )
  }

  export default AvailableTrain
  