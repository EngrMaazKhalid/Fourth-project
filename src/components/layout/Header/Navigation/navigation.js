import React from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Toolbar,
  Typography,
  
} from "@mui/material";


import classes from "../header.module.css";
import Modalpop from "../Modal";

const Navigation = () => {
  const Barstyle = styled(
    AppBar,
    {}
  )({
    background: "rgba(46, 43, 43, 0.911)",
    padding: "5px",
    position:'fixed',
    zIndex:'2000',
  });

  return (
    <Barstyle position="static">
      <Toolbar variant="dense">
        <div className={classes["train"]}>
          <img src={require("./download.png")} alt="train logo" className={classes['train-img']}></img>
        </div>
       
        
        
     <span className={classes["Rail"]}>
    Rail Train
     </span>
    
     
    <Modalpop />
        
      </Toolbar>
    </Barstyle>
  );
};

export default Navigation;
