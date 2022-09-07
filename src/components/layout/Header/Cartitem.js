import { Button, Card, CardContent, Typography } from "@mui/material";
import classes from "./header.module.css";
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li ><div>
      <Card
      className={classes['ModalCard']}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          borderBottom: '1px solid #8a2b06',
          marginBottom: "2px",
        }}
      >
      <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}} className={classes['content']}>
  <Typography gutterBottom variant="h5" className={classes['AmountName']} sx={{marginRight: 'auto', textTransform:'uppercase', fontWeight:'700'}}>
  {props.name}
  </Typography>
  <Typography variant="h6" color="red" className={classes['Price']} sx={{fontWeight:'800', textAlign:'left'}}>
  <span>{price}</span>
            <span> x {props.amount}</span>
  </Typography>
</CardContent>
  
        <div className={classes['button-div']}>
        <Button variant="contained" size="small" color="secondary" sx={{borderRadius:'100px', marginRight:'5px', width:'10px'}} onClick={props.onRemove}>−</Button>
        <Button variant="contained" size="small" color="secondary" sx={{borderRadius:'100px', marginRight:'5px'}} onClick={props.onAdd}>+</Button>
        </div>
      </Card>
      </div>
    </li>
  );
};

export default CartItem;
