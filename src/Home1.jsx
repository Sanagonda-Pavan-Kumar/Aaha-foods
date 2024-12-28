import React from "react";
import { Box, Typography } from "@mui/material";

const drawerWidth = 300;

export const Home1 = () => {
  return (
    <div>
     <Box
  component="main"
  sx={{
    ml: `${drawerWidth}px`,
    px: 4,
    py: 4,
    display: "flex", 
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center", 
    minHeight: "70vh", 
  }}
>
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
  <Typography
    sx={{
      lineHeight: "2",
      mt: 2,
      textAlign: "center", 
      
   
    }}
  >
    Welcome to Aha Tiffins, where we serve delicious and authentic food made
    with love and care, blending tradition with a modern twist to create a
    delightful culinary experience. Our specialties include South Indian
    tiffins and meals featuring freshly prepared dosa, idli, vada, pongal, and
    traditional meals paired with flavorful chutneys and aromatic sambar. For
    street food lovers, our Chat Corner offers a variety of crispy, tangy, and
    spicy delights. Tea enthusiasts can savor the rich, creamy Irani tea made
    with pure buffalo milk, while our Juice & Milkshake Bar provides a
    refreshing selection of fresh fruit juices, milkshakes, and smoothies.
    Join us for a taste of tradition and innovation crafted to perfection!
  </Typography>
</Box>


    </div>
  );
};
