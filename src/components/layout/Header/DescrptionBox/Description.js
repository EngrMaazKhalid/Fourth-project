import React from "react";
import { Box } from "@mui/system";


const Description =() => {


return(
 
    <Box
      sx={{
        display:"flex",
        flexWrap: 'wrap',
        position:'absolute',
        left: '0', 
        right: '0', 
        marginTop: 'auto',
        boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        bottom: '50px',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        width: 700,
        height: 300,
        borderRadius:'20px',
        color:'white',
    
    
        backgroundColor: 'rgba(46, 43, 43, 1)',
        '&:hover': {
          backgroundColor: 'black',
          
        },
      }}
    ><p>loremipsum</p>
    
    </Box>
)



}

export default Description;