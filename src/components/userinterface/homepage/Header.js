import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../../assets/logo.png'
import TextBoxSearch from './TextBoxSearch';
import MenuBar from './MyMenuBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: '#009432 '}}>
        <Toolbar>
         {matches?<div></div>:<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>}
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
          <Typography variant="h6" component="div" style={{display:'flex',alignItems:'center' }}>
            {/* <img src={logo} style={{width:70,height:70}}/> */}
            <div style={{fontWeight:'bold',fontSize:24}}>EcoMeter</div>
          </Typography>
       {matches?<TextBoxSearch/>:<div></div>}
          


          <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <ShoppingCartIcon/> */}
          </IconButton>
           
          <IconButton
           
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon style={{fontSize:30}}/>
            <div style={{marginLeft:5,fontWeight:'bold',fontSize:16}}>Sign In</div>
          </IconButton>
           </div>
           </div>
          
        </Toolbar>
      </AppBar>
      { matches?<div></div>:
      <AppBar position="static" >
        <Toolbar>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
        <TextBoxSearch width="80%"  />
        </div>
        </Toolbar>
      </AppBar>
     }

 
     
    </Box>
  );
}





{/* <AppBar position="static" sx={{ backgroundColor: '#009432 '}}> */}