import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import classes from "./header.module.css";
import CartItem from "./Cartitem";
const ModalArea = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
    borderRadius: "30px",
  };

  const cartCtx = useContext(CartContext);
  const TotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasitem = cartCtx.item.length > 0;

  const AdditemHandler = (id) => {};
  const RemoveItemHandler = (id) => {};
  const cartItems = (
    <ul className={classes["list"]}>
      {cartCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.Amount}
          price={item.price}
          onRemove={AdditemHandler.bind(null, item.id)}
          onAdd={RemoveItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          {cartItems}

          <div className={classes["Backdrop"]}>
            <span>Total Amount </span>
            <span>{TotalAmount}</span>
          </div>
          <div className={classes["modal-button"]}>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              onClick={props.onClose}
              sx={{
                borderRadius: "50px",
                width: "110px",
                marginRight: "20px",
              }}
            >
              Close
            </Button>

            {hasitem && (
              <Button
                size="large"
                variant="contained"
                color="secondary"
                sx={{ borderRadius: "50px", width: "110px" }}
              >
                buy
              </Button>
            )}
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalArea;
