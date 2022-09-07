import { Button, CardActions } from "@mui/material";
import React, { useRef, useState } from "react";
import CardInput from "./CardInput";
import classes from "../Header/header.module.css";

const CardForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
   
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    
    props.onAddToCart(enteredAmountNumber);

  };


  return (
    <CardActions
    className={classes['card-Action']}
      sx={{
        marginLeft: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div className={classes["cardform"]}>
      
        <form onSubmit={submitHandler} >
          <CardInput
          ref={amountInputRef}
          label='Seats : '
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
            }}
          />
          <button className={classes['AddBtn']}>Add
          </button>
          {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
        </form>
      </div>
    </CardActions>
  );
};

export default CardForm;

/**
  * <FormControl onSubmit={submitHandler} sx={{ width: '80px',  height:"30px", marginTop:'auto', borderRadius:'25px' ,marginBottom:'auto' , marginRight: '20px', paddingLeft:'10px'}} color='secondary' variant="filled" >
        
<Button
          
            size="large"
            variant="contained"
            color="secondary"
            sx={{ borderRadius: "50px", color: "grey", width: "180px" }}
          >
            buy Ticket
          </Button>
  */