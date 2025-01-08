import React from 'react';
import { Typography, Box, AppBar, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img4 from "./assets/badrakali.jpg"; 
import Footers from "./Footers"; 
import Sider2 from './Sider2';
const drawerWidth = 300;
const theme = createTheme({
  typography: { 
    fontFamily: "Proxima Nova",
 },
});

const ContactusGrills = () => {
  return (
    <div>
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
        <Box sx={{  ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            }, }}>
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
                  fontSize: { xs: "2.5rem", md: "4.2rem" },
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
              
                Chowrastha, Hunter Rd, New Shyampet, Shyampet, Hanamkonda, Telangana 506001
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'orange',fontFamily:'cursive' }}>
                  Phone Number
                </Typography>
                <hr />
                <Typography>
                  9177638694
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'orange',fontFamily:'cursive' }}>
                  Email Us
                </Typography>
                <hr />
                <Typography>
                Ahatiffins2024@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Box>

         
          <Box sx={{ padding: 4, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'orange', fontFamily: 'cursive' }}>
              Find Us Here 
            </Typography>
            <hr />
            <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.123456789!2d79.5651496!3d17.9895221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334502f9a67a35%3A0x1930d0b168198ce2!2sAha%20Grills%20and%20Kebabs!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>

          <Footers />
        </Box>
      </ThemeProvider> 
    </div>
  );
}

export default ContactusGrills;