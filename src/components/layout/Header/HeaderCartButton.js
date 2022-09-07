import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import { Badge, IconButton } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../Store/CartContext";
import classes from './header.module.css'


const HeaderCartButton= (props) =>{
  const [highlited, setHighlited] = useState(false);

    const cartCtx = useContext(CartContext);
    const { item } = cartCtx
    const numberOfCartItems = item.reduce((curNumber, item) => {
        return curNumber + item.Amount ;
      }, 0);

      const btnClasses = `${highlited ? classes['bump'] : '' }`
useEffect(() => {
  if(item.length === 0){
    return;
  }
  setHighlited(true)

  const timer =setTimeout(() => {
    setHighlited(false)
  }, 300)

  return () =>{
    clearTimeout(timer)
  }
}, [item])


    return(
        <IconButton
        sx={{paddingBottom:'0', paddingRight:'0'}}
        className={btnClasses}
        onClick={props.onClick}
        size="large"
        color="inherit"
      >
      <span className={classes['Total']}>Total Tickets</span>
     
        
        
        <Badge badgeContent={numberOfCartItems} color="secondary">
          
        <DirectionsTransitFilledIcon sx={{marginLeft:'4px'}}/>
        </Badge>
      </IconButton>



    )
}
export default HeaderCartButton