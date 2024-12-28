import React from 'react';
import { Box, AppBar, createTheme, ThemeProvider, Typography } from '@mui/material';
import {Header} from './Header'; 
import Sider from './Sider'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const drawerWidth = 300;

const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova",
  },
});

const Footers = () => {
  return (
    <ThemeProvider theme={theme}>
     
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        />
      
      </Box>
      <Box >
        <Box sx={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography sx={{ color: 'white' }}>
            Copyright © 2024 Aha-Foods. All Rights Reserved
          </Typography>
          <Box sx={{px:'20px'}}>
          <InstagramIcon sx={{ color: 'white' , marginRight: 2}} />
          <FacebookIcon sx={{ color: 'white' }} />
          </Box>
         
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footers;
