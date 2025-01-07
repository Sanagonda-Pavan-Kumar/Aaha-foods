import React from "react";
import { Typography, Box, AppBar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img4 from "./assets/badrakali.jpg";
import Sider from "./Sider";
import Footers from "./Footers";

const drawerWidth = 300;

const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova",
  },
});

function AboutUs() {
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
        <Sider />
      </Box>
      <Box
  sx={{
    ml: {
      xs: 0,          
      md: `${drawerWidth}px`, 
    },
  }}
>
  

        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img4}
            alt="Warangal"
            style={{
              width: "100%",
              height: "70vh",
              objectFit: "cover",
              display: "block",
              position: "relative",
              filter: "brightness(26%)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4.2rem" }, 
                fontWeight: "bold",
                color: "rgb(250, 250, 242)",
              }}
            >
              ABOUT US
            </Typography>
          </div>
        </Box>
        <Box>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            fontFamily="cursive"
            color="#F27F0C"
            sx={{
              textAlign: "center",
              pt: { xs: "30px", md: "60px" }, 
            }}
          >
            About Us
          </Typography>
          {/* <Typography  variant="h4" 
  component="h1" 
  fontWeight="bold" 
  fontFamily="Proxima Nova"
  
  sx={{
    textAlign:'center',
   pt:'20px'
  }}>
       The Aha-Food Corps 
       </Typography> */}

          <Typography
            sx={{
              lineHeight: "2",
              mt: 2,
              textAlign: "center",
              py: "20px",
              pb: "50px",
              px: { xs: "10px", md: "20px" }, 
            }}
          >
            Welcome to Aha Tiffins, where we serve delicious and authentic food
            made with love and care, blending tradition with a modern twist to
            create a delightful culinary experience. Our specialties include
            South Indian tiffins and meals featuring freshly prepared dosa,
            idli, vada, pongal, and traditional meals paired with flavorful
            chutneys and aromatic sambar. For street food lovers, our Chat
            Corner offers a variety of crispy, tangy, and spicy delights. Tea
            enthusiasts can savor the rich, creamy Irani tea made with pure
            buffalo milk, while our Juice & Milkshake Bar provides a refreshing
            selection of fresh fruit juices, milkshakes, and smoothies. Join us
            for a taste of tradition and innovation crafted to perfection!
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "RGB(231,216,201,0.5)" }}>
          <Typography
            variant="h4"
            component="h1"
            fontFamily="cursive"
            color="#F27F0C"
            sx={{
              px: { xs: "20px", md: "40px" }, 
              pt: { xs: "30px", md: "60px" }, 
            }}
          >
            Why Choose Us ?
          </Typography>
          {/* <Typography  variant="h4" 
  component="h1" 
  fontWeight="bold" 
  fontFamily="Proxima Nova"
  
  sx={{
    textAlign:'center',
   pt:'20px'
  }}>
       The Aha-Food Corps 
       </Typography> */}

          <Typography
            sx={{
              lineHeight: "2",
              mt: 2,
              textAlign: "center",
              py: "20px",
              pb: "50px",
              px: { xs: "10px", md: "20px" }, 
            }}
          >
            Welcome to Aha Tiffins, where we serve delicious and authentic food
            made with love and care, blending tradition with a modern twist to
            create a delightful culinary experience. Our specialties include
            South Indian tiffins and meals featuring freshly prepared dosa,
            idli, vada, pongal, and traditional meals paired with flavorful
            chutneys and aromatic sambar. For street food lovers, our Chat
            Corner offers a variety of crispy, tangy, and spicy delights. Tea
            enthusiasts can savor the rich, creamy Irani tea made with pure
            buffalo milk, while our Juice & Milkshake Bar provides a refreshing
            selection of fresh fruit juices, milkshakes, and smoothies. Join us
            for a taste of tradition and innovation crafted to perfection!
          </Typography>
        </Box>
        <Footers />
      </Box>
    </ThemeProvider>
  );
}

export default AboutUs;