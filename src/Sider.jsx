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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Collapse from '@mui/material/Collapse';
import logo from './assets/Aha-png-Eng.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const drawerWidth = 300;

const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova",
  },
});

function Sider() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"

          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` , backgroundColor: 'transparent', // Ensure no background color
          boxShadow: 'none', }}
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
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Box sx={{ display: 'flex' }}>
            <img src={logo} alt="aha tiffins" style={{ width: '270px' }} />
          </Box>
          <Box sx={{ px: '15px', py: '20px' }}>
            <Divider sx={{ borderColor: 'white' }} />
          </Box>

          <List sx={{ pt: '10px' }}>
            {['HOME', 'ABOUT US'].map((text) => (
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
                      navigate('/aboutus');
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

            <ListItem disablePadding>
              <ListItemButton
                onClick={handleMenuClick}
                sx={{
                  px: 8,
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: 'lightgrey',
                  fontWeight: 'bold',
                  '&:hover': { color: '#ff9d2e' },
                }}
              >
                <ListItemText primary="MENU" />
                <ArrowDropDownIcon sx={{ color: 'lightgrey' }} />
              </ListItemButton>
            </ListItem>

            <Collapse in={openMenu} timeout="auto" unmountOnExit>
              <List sx={{ pl: 0 }}>
                <ListItem key="Menu Card" disablePadding>
                  <ListItemButton
                      onClick={() => navigate('/home2')}
                    sx={{
                      px: 8,
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: 'lightgrey',
                      fontWeight: 'bold',
                      '&:hover': { color: '#ff9d2e' },
                    }}
                  >
                    <ListItemText primary="Menu Card" />
                  </ListItemButton>
                </ListItem>

                <ListItem key="Tiffins " disablePadding>
                  <ListItemButton
                     onClick={() => navigate('/Menu')}
                    sx={{
                      px: 8,
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: 'lightgrey',
                      fontWeight: 'bold',
                      '&:hover': { color: '#ff9d2e' },
                    }}
                  >
                    <ListItemText primary="Tiffins" />
                  </ListItemButton>
                </ListItem>

                <ListItem key="Tiffins" disablePadding>
                  <ListItemButton
                    onClick={() => {
                      console.log("item3");
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
                    <ListItemText primary="item3" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => navigate('/contactus')}
                sx={{
                  px: 8,
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: 'lightgrey',
                  fontWeight: 'bold',
                  '&:hover': { color: '#ff9d2e' },
                }}
              >
                <ListItemText primary="CONTACT US" />
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{ px: '15px', py: '20px' }}>
            <Divider sx={{ borderColor: 'white' }} />
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default Sider;
