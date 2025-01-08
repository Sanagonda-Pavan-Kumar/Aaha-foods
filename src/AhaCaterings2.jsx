import React from 'react'
import { Box, Typography } from '@mui/material';
import menu1 from './assets/nonveg1.png';
import menu2 from './assets/nonveg2.png';
import menu3 from './assets/nonveg3.png';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import logo from './assets/aha-logo.png';
import Sider3 from './Sider3';

const drawerWidth = 300;

export const AhaCaterings2 = () => {
  return (
    <div>
      <Sider3 />
      <Box component="main" sx={{ backgroundColor: 'RGB(231,216,201,0.5)', pb: '40px' }}>
     
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            },
            px: 4,
            pt: {
              xs: 7,
              md: 0,
            },
            pb: {
              xs: 3,
              md: 0,
            },
          }}
        >
          <Box sx={{ textAlign: 'center', pt: {
                xs: '2rem',
                md: '0px',
              }, }}>
                <img 
                  src={logo} 
                  alt="Aha Foods Logo"
                  style={{ width: '200px', height: 'auto' }} 
                />
              </Box>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            fontFamily="ProximaNova"
            sx={{
              pl: {
                xs: '10px',
                md: '20px',
              },
              pt: {
                xs: '2rem',
                md: '5px',
              },
              fontSize: {
                xs: '1.5rem',
                md: '2.125rem',
              },
              mb: {
                xs: '2rem',
                md: '30px',
              },
            }}
          >
            MENU
          </Typography>
        </Box>

      
        <Box
          sx={{
            ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            },
            display: 'flex',
            justifyContent: 'center',
            
          }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
            effect="fade"
            speed={1000}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
         
            <SwiperSlide>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={menu1}
                  alt="Menu 1"
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    maxHeight: '550px',
                    borderRadius: '10px',
                  }}
                />
              </Box>
            </SwiperSlide>

          
            <SwiperSlide>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={menu2}
                  alt="Menu 2"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: 'auto',
                    maxHeight: '550px',
                    borderRadius: '10px',
                  }}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={menu3}
                  alt="Menu 2"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: 'auto',
                    maxHeight: '550px',
                    borderRadius: '10px',
                  }}
                />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </div>
  );
};
