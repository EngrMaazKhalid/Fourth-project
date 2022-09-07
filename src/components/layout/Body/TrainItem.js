import {
  Button,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import styled from "@emotion/styled";
import { createTheme } from "@mui/system";
import classes from "./Card-section.module.css";
import CardForm from "./CardForm";
import CartContext from "../../Store/CartContext";
import { useContext } from "react";


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});


const CardResponsive ={
  
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderRadius: "20px",
    border: "2px solid black",
    marginBottom: "20px",
  }
const TrainItem = (props) => {
  const Cartctx = useContext(CartContext);
  const Price = `$${props.price.toFixed(2)}`;

  const AddToCartHandler = (amount) => {
    Cartctx.addItem({
      id: props.id,
      name: props.name,
      Amount: amount,
      price: props.price,
    });
  };

  return (
    <li>
      <div className={classes["section2"]}>
        <div className={classes["Card-section"]}>
          <Card
          className={classes["body-card"]}
           
          
          >
            <CardMedia
              sx={{ display: "block", height: "130px", width: "auto" }}
              component="img"
              alt="green iguana"
              height="140"
              image={props.image}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  marginRight: "auto",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                {props.name}
              </Typography>
              <Typography
                variant="h6"
                color="red"
                sx={{ fontWeight: "800", textAlign: "left" }}
              >
                {Price}
              </Typography>
            </CardContent>
            <CardForm id={props.id} onAddToCart={AddToCartHandler} />
          </Card>
        </div>
      </div>
    </li>
  );
};

export default TrainItem;

// const trainItem = (props) =>{

//     const price = `$${props.price.toFixed(2)}`;

//     return(
//       <li>
//       <div>
//         <h3>{props.name}</h3>
//         <div>{price}</div>
//       </div>

//         </li>)
// }

// export default trainItem

/**
 * 

//  <Typography gutterBottom variant="h5" sx={{marginRight: 'auto', textTransform:'uppercase', fontWeight:'700'}}>
//         {props.name}
//         </Typography>
//         <Typography variant="h6" color="red" sx={{fontWeight:'800', textAlign:'left'}}>
//         {price}
//         </Typography>
 * <CardActions sx={{marginLeft: 'auto', display:'flex', flexDirection:'column' , justifyContent:'space-evenly' }}>
  <CardForm />
    <Button size="large" variant="contained" color="secondary" sx={{borderRadius: '50px', color:'grey', width:'180px'}}>buy Ticket</Button>
   
  </CardActions>
 */
