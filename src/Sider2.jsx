import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close'; 
import grillslogo from './assets/ahagrillspng.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 300;

const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova",
  },
});

function Sider2() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)'); 

  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false); 
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <img src={grillslogo} alt="aha Grills" style={{ width: '280px' }} />
      </Box>
      <Box sx={{ px: '15px', py: '20px' }}>
        <Divider sx={{ borderColor: 'white' }} />
      </Box>

      <List sx={{ pt: '10px' }}>
        {['HOME', 'ABOUT US','MENU','CONTACT US'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
               onClick={() => {
                if (text === 'HOME') {
                  window.location.href = '/';
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                } else if (text === 'ABOUT US') {
                  navigate('/aboutusgrills');
                } else if (text === 'MENU') {
                  navigate('/grillsmenu');
                } else if (text === 'CONTACT US') {
                  navigate('/contactusgrills');
                }
              }}
              sx={{
                px: 8,
                justifyContent: 'center',
                textAlign: 'center',
                color: 'lightgrey',
                fontWeight: 'bold',
                '&:hover': { color: '#ff9d2e' },
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ px: '15px', py: '20px' }}>
        <Divider sx={{ borderColor: 'white' }} />
      </Box>
      <Box sx={{ textAlign: 'center', color: 'white', py: 2 }}>
        <Box sx={{ mb: 1 }}>
          <FacebookIcon sx={{ margin: '0 10px', fontSize: '24px', cursor: 'pointer' }} />
          <TwitterIcon sx={{ margin: '0 10px', fontSize: '24px', cursor: 'pointer' }} />
          <a 
        href="https://www.instagram.com/aha.tiffins/profilecard/?igsh=MW1yZmxpbWJlcWo3NA==" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none' }} 
      >
        <InstagramIcon sx={{ margin: '0 10px', fontSize: '24px', cursor: 'pointer', color: 'white' }} />
      </a>        </Box>
        <Box sx={{ fontSize: '14px', lineHeight: '1.5' }}>
          <p>Copyright © 2024 Aha-Foods.</p>
          <p>All Rights Reserved</p>
        </Box>
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {isMobile ? (
          <>
            <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
              <Toolbar>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                  <img src={grillslogo} alt="Aha-Grills & Kebabs" style={{ width: '150px' }} />
                </Box>
                <ListItemButton onClick={handleDrawerToggle} sx={{ color: 'lightgrey' }}>
                <MenuIcon sx={{ mr: 2 }} />
                </ListItemButton>
              </Toolbar>
            </AppBar>
            <Drawer
              open={mobileOpen}
              onClose={handleCloseDrawer}
              sx={{
                '& .MuiDrawer-paper': {
                  width: '100%', 
                  boxSizing: 'border-box',
                  backgroundColor: 'black',
                }
              }}
            >
              <Box sx={{ position: 'relative' }}>
              <CloseIcon onClick={handleDrawerToggle} sx={{ color: 'white', cursor: 'pointer' ,}} />
                {drawer}
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <AppBar
              position="fixed"
              sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
                backgroundColor: 'transparent',
                boxShadow: 'none',
              }}
            >
              <Toolbar />
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  backgroundColor: 'black',
                },
              }}
              variant="permanent"
              anchor="left"
            >
              {drawer}
            </Drawer>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default Sider2;