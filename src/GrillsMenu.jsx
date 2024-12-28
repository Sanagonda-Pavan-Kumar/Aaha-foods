import React from 'react'
import { Box, Typography } from '@mui/material';
import grillsmenu from './assets/grillsmenu.png';
import grillsmenu2 from './assets/grillsmenu2.png';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Sider2 from './Sider2';

  
    const drawerWidth = 300;
  
   
const GrillsMenu = () => {
  return (
    <div>
        <Sider2/>
          <Box
  component="main"
 sx={{backgroundColor:'RGB(231,216,201,0.5)', pb:'40px'}}
>
<Box 
  sx={{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center', 
    ml: `${drawerWidth}px`, 
    px: 4,
    py: 4,
  }}
>
  <Typography 
    variant="h4" 
    component="h1" 
    fontWeight="bold" 
    fontFamily="cursive"
    color='#F27F0C'
    
  >
    Aha-Grills & Kebabs
  </Typography>
  <Typography 
    variant="h4" 
    component="h1" 
    fontWeight="bold" 
    fontFamily="ProximaNova"
    sx={{ pl: '20px',pt:'5px' }}

  >
    MENU
  </Typography>
</Box>
 

<Box sx={{ ml: `${drawerWidth}px`, display: 'flex', justifyContent: 'center' }}>
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
          src={grillsmenu}
          alt="Menu 1"
          style={{
            width: '500px',
            height: '550px',
            borderRadius: '10px',
          }}
        />
      </Box>
    </SwiperSlide>

    <SwiperSlide>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={grillsmenu2}
          alt="Menu 2"
          style={{
            width: '500px',
            height: '550px',
            borderRadius: '10px',
          }}
        />
      </Box>
    </SwiperSlide>
  </Swiper>
</Box>
</Box>
    </div>
  )
}

export default GrillsMenu