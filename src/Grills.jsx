import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Sider2 from './Sider2'; 
import { Typography } from '@mui/material';
import Footers from './Footers';
import MainSlides from './MainSlides';

const drawerWidth = 300;

const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova",
  },
});

export const Grills = () => {
  return (
    <ThemeProvider theme={theme}>
   
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            }, 
          }}
        />
        <Sider2 />
      </Box>
      <Box sx={{ ml: {
    xs: 0,
    md: `${drawerWidth}px`,
  },  }}>
      <MainSlides/></Box>
      <Box sx={{ ml: {
    xs: 0,
    md: `${drawerWidth}px`,
  }, }}>
   
     <Box>
     <Box
  component="main"
  sx={{
  
  px:'70px',
  py:'50px',
    
    minHeight: "70vh", 
  }}
>
    <Box
    sx={{textAlign:'center'}}>
  <Typography
    variant="h4"
    component="h1"
    gutterBottom
    fontWeight="bold"
    fontFamily="unset"
    sx={{
      position: "relative",
      display: "inline-block", 
      textAlign: "center",
   
      fontSize:'55px',
      "&::after": {
        content: '""',
        position: "absolute",
        
        left: 0,
        bottom: -4, 
        height: "2px",
        width: "100%",
        backgroundColor: "orange",
      },
    }}
  >
    ABOUT US
  </Typography>
  </Box>
  <Typography  fontWeight="bold" sx={{
    fontSize:'18px',
      mt: 2,
   
   
    }}> Welcome to Aha Grills and Kebabs – Where Flavor Meets Tradition</Typography>
  <Typography
    sx={{
      lineHeight: "2",
      mt: 2,
    
   
    }}
  >
   At Aha Grills and Kebabs, we take pride in bringing you a unique culinary experience that blends the best of Indian, Chinese, and Tandoori cuisines. Our menu features a variety of mouthwatering dishes, each crafted with care and passion. From the iconic Hyderabadi Dum Chicken Biryani to sizzling grills, juicy shawarmas, and flavorful Chinese specials, every bite is a celebration of bold flavors and rich traditions.

We are dedicated to delivering the highest quality food, using only the freshest ingredients and authentic recipes. Whether you're craving smoky tandoori delights, aromatic biryanis, or a fresh, filling shawarma, our diverse offerings ensure that every meal is a feast for your senses. We invite you to enjoy a warm and inviting atmosphere where family dinners, friendly gatherings, and quick meals are all made special.

At Aha Grills and Kebabs, we're committed to providing exceptional quality, unforgettable taste, and an experience that keeps you coming back for more. Come, indulge in the best of Indian and global cuisine with us.
  </Typography>
</Box>

     </Box>
     <Footers/>
      </Box>
<Box >

</Box>
    </ThemeProvider>
  );
};
