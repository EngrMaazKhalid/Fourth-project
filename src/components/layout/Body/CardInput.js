import { FilledInput, FormControl, InputAdornment, InputLabel, Button, Input } from "@mui/material";
import React from "react";


  
  const CardInput=React.forwardRef((props,ref)=>{

 
    return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />

</div>

      //  { <FilledInput
      //   ref={ref} {...props.input}
      //     id="filled-adornment-amount"
      //     sx={{ width:'85px', height:"30px" , paddingBottom:'10px', borderRadius:'8px' }}
      //     value={values.Amount}
      //     onChange={handleChange('Amount')}
      //     type='number'
      //   />}
    ) })

            export default CardInput

    //  {       <Input
    //         ref={ref} {...props.input}
               
    //             sx={{ width:'85px', height:"30px" , paddingBottom:'10px', borderRadius:'8px' }}
               
    //             color='secondary'
    //             />}