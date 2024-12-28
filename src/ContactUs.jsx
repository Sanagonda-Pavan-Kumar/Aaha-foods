import React from 'react';
import { Typography, Box, AppBar, Grid } from "@mui/material";
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

const ContactUs = () => {
  return (
    <div>
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
          <Sider2 />
        </Box>
        <Box sx={{ ml: `${drawerWidth}px` }}>
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
                  fontSize: "4.2rem",
                  fontWeight: "bold",
                  color: "rgb(250, 250, 242)",
                }}
              >
                CONTACT US
              </Typography>
            </div>
          </Box>

          <Box sx={{ padding: 4 }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'orange' ,fontFamily:'cursive'}}>
                  Our Location
                </Typography>
                <hr />
                <Typography>
                  119, 12TH B CROSS, 19TH MAIN, J P NAGAR 2ND PHASE, BANGALORE, KARNATAKA - 560078
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'orange',fontFamily:'cursive' }}>
                  Phone Number
                </Typography>
                <hr />
                <Typography>
                  8151999191
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'orange',fontFamily:'cursive' }}>
                  Email Us
                </Typography>
                <hr />
                <Typography>
                  info@therameshwaramcafe.org
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Footers />
        </Box>
      </ThemeProvider> 
    </div>
  );
}

export default ContactUs;