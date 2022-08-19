import React from "react";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import { Backdrop, Badge, Box, Fade, IconButton, MenuItem, Modal, Typography } from "@mui/material";




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Modalpop = () =>{

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);










    return(
        <MenuItem sx={{ marginLeft: "auto" }} >
        
          <IconButton
          onClick={handleOpen}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
         
          
            <Badge badgeContent={17} color="secondary">
              <DirectionsTransitFilledIcon />
              
            </Badge>
            

          </IconButton>
          <p>total tickets</p>
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
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
        </MenuItem>


    )

}

export default Modalpop