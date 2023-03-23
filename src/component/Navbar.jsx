import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
 
        <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
       <Toolbar>          
  
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Movies
         </Typography>
         
       
         <Button><Link to = 'Movie1' style={{color:"white"}}>movies</Link></Button>
              
       
         <Button><Link to = 'Addmovie' style={{color:"white"}}>add movies</Link></Button>
       </Toolbar>
     </AppBar>
   </Box>
           

 )
}


export default Navbar
