import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import { Badge, IconButton } from "@mui/material";
import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";


const HeaderCartButton= (props) =>{

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.item.reduce((curNumber, item) => {
        return curNumber + item.Amount ;
      }, 0);
    return(
        <IconButton
        onClick={props.onClick}
        size="large"
        color="inherit"
      >
      
        <Badge badgeContent={numberOfCartItems} color="secondary">
          <DirectionsTransitFilledIcon />
          
        </Badge>
        <span>Your Cart</span>
      </IconButton>



    )
}
export default HeaderCartButton