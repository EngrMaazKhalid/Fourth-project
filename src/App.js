// import logo from "./logo.svg";
import "./App.css";
import Headerp from "./components/layout/Header/header";
import Navigation from "./components/layout/Header/Navigation/navigation";
import TrainCard from "./components/layout/Body/Card";
import Description from "./components/layout/Header/DescrptionBox/Description";
import { Button, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
// import { createTheme, ThemeProvider, typography } from "@mui/system";


const UseStyle = styled(Button, {}) ({
  color: 'yellow',
  backgroundColor:'black',
  borderRadius: '20px',

  '&:hover':{
    color:'red'
  }
})

const TextStyle = styled(Typography, [])({
  textTransform:'uppercase',
  

})


// const theme = createTheme({
//   Typography:{
//    myVariant:{
//     color:'yellow'
//    }
//   }})

function App() {



  return (
    <div className="App">
    <Navigation />
  <Headerp />

    <TrainCard />
      
    </div>
  );
}

export default App;
/**
  /**{} */
    // {<TextStyle > 
    // hi its maaz
    // </TextStyle>
    //   <UseStyle>
    //     Click karo!
    //     </UseStyle>
    // <Paper  sx={{color:'red', backgroundColor:'blue' }}>
    // my name id
    // </Paper>}
 /*<Button
    
        variant="contained"
        size="large"
        endIcon={<personalbar />}
        className={classes.mybutton}
      style={{ backgroundColor: "yellow", boxShadow: "blue" }}/// we can do it like this but it iss not a good approach! make  e style iss bst approach
       /> */

