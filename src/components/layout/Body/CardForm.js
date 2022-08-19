import { FilledInput, FormControl, InputAdornment, InputLabel } from "@mui/material";
import React, { useState } from "react";
import classes from './Card-section.module.css'


  
  const CardForm=()=>{
 const [values, setValues]= useState({amount: ''});

 const handleChange =(props) => (event) =>{
    setValues({...values, [props]: event.target.value })
 }

 
    return (
     <div className={classes['cardform']} >
    <h4>Amount :  </h4>
        <FormControl  sx={{ width: '80px',  height:"30px", marginTop:'auto', borderRadius:'25px' ,marginBottom:'auto' , marginRight: '20px', paddingLeft:'10px'}} color='secondary' variant="filled" >
        
        <FilledInput
          id="filled-adornment-amount"
          sx={{ width:'85px', height:"30px" , paddingBottom:'10px', borderRadius:'8px' }}
          value={values.amount}
          onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      </div> ) }

            export default CardForm