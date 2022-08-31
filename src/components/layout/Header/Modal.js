import React, { useContext } from "react";
import ModalArea from "./ModalArea";
import {
  MenuItem,
} from "@mui/material";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

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

const Modalpop = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MenuItem sx={{ marginLeft: "auto" }}>
    <HeaderCartButton onClick={handleOpen}  />
      <ModalArea onClose={handleClose} open={open} />
    </MenuItem>
  );
};

export default Modalpop;

/**
 *  { <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                
             </Typography>}
 */
/**
 * 
      <IconButton
        onClick={handleOpen}
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={numberOfCartItems} color="secondary">
          <DirectionsTransitFilledIcon />
        </Badge>
      </IconButton>
      <p>Total Tickets</p>
<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {cartItems}

            <div className={classes["Backdrop"]}>
              <span>Total Amount </span>
              <span>567</span>
            </div>
            <div className={classes["modal-button"]}>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                onClick={handleClose}
                sx={{
                  borderRadius: "50px",
                  width: "110px",
                  marginRight: "20px",
                }}
              >
                Close
              </Button>

               
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: "50px", width: "110px" }}
                >
                  buy
                </Button>
              
            </div>
          </Box>
        </Fade>
      </Modal>
 */