import React from "react";
import { Typography, Box, AppBar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img4 from "./assets/badrakali.jpg"; 
import Footers from "./Footers"; 
import Sider2 from "./Sider2";

const drawerWidth = 300;

const theme = createTheme({
  typography: { 
    fontFamily: "Proxima Nova",
  },
});

const AboutUsGrills = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
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
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img4}
            alt="Badrakali"
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
              transform: "translate(-20%, -20%)",
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
              pt: "60px",
            }}
          >
            About Us
          </Typography>

          <Typography
            sx={{
              lineHeight: "2",
              mt: 2,
              textAlign: "center",
              py: "20px",
              pb: "50px",
              px: "20px",
            }}
          >
            Welcome to Aha Grills and Kebabs, where we serve delicious and authentic food made with love and care, blending tradition with a modern twist to create a delightful culinary experience. Our specialties include a variety of grilled dishes, kebabs, and traditional meals paired with flavorful chutneys and aromatic sauces. Join us for a taste of tradition and innovation crafted to perfection!
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "RGB(231,216,201,0.5)" }}>
          <Typography
            variant="h4"
            component="h1"
            fontFamily="cursive"
            color="#F27F0C"
            sx={{
              px: "40px",
              pt: "60px",
            }}
          >
            Why Choose Us?
          </Typography>

          <Typography
            sx={{
              lineHeight: "2",
              mt: 2,
              textAlign: "center",
              py: "20px",
              pb: "50px",
              px: "20px",
            }}
          >
            At Aha Grills and Kebabs, we pride ourselves on using the freshest ingredients and authentic recipes to deliver an unforgettable dining experience. Our menu features a wide range of options, from smoky tandoori delights to mouthwatering kebabs, ensuring that there is something for everyone. Experience the best of Indian cuisine with us!
          </Typography>
        </Box >
        <Footers />
      </Box>
    </ThemeProvider>
  );
};

export default AboutUsGrills;