import { AppBar, Box, Button , Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            <Link to="/" style={{color:'white', textDecoration:'none'}}>
            HOLLY🎥OOD
          </Link></Typography>
          <Button color="inherit">
            <Link to="/Movie" style={{color:'white', textDecoration:'none'}}>Addmovies</Link></Button>
            <Button color="inherit"> <Link to="/read" style={{color:'white', textDecoration:'none'}}>List</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
} 
export default Navbar
