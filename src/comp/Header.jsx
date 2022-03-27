import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Header() {
 
    const navigate = useNavigate();
 
    const goToHomePage = () => {
        navigate('/');
    } 

    const goToWishPage = () => {
        navigate('/Wish');
    }

    const goToAboutPage = () => {
        navigate('/About');
    } 

    return (
    <div className='header'> 
     <AppBar
      position="static"  
      sx={{ backgroundColor: '#37474f' }}          
     >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: 'flex', md: 'flex' } }}
          >
            To be there or not to be there?
          </Typography>
          <Box sx={{ display: {flexGrow: 1, xs: 'flex', md: 'flex' } }}>
          <Button  
          sx={{  my: 4, color: 'white', display: 'block' }}
          onClick={() =>goToHomePage()}
          >Home</Button>
          <Button  
          sx={{ color: 'white', display: 'block' }}
          onClick={() =>goToWishPage()}
          >Wish list</Button>
          <Button  
          sx={{  color: 'white', display: 'block' }}
          onClick={() =>goToAboutPage()}
          >About</Button>
          </Box>
        </Toolbar>
      </Container>
     </AppBar>
    </div>
    )
}
