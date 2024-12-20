import React from 'react'
import { Box, Typography } from '@mui/material';
import menu1 from './assets/menu1.jpg';
  import menu2 from './assets/menu2.jpg';
  import menu3 from './assets/menu3.jpg';
  import logo from './assets/Aha-png-Eng.png';
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
import Sider from './Sider';

  const drawerWidth = 300;
export const Home2 = () => {
  return (
    <div>
        <Sider/>
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
    py: 5,
  }}
>
  <Typography 
    variant="h4" 
    component="h1" 
    fontWeight="bold" 
    fontFamily="cursive"
    color='#F27F0C'
    
  >
    Aha-Tiffins
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
            width: '700px',
            height: '500px',
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
            width: '500px',
            height: '500px',
            borderRadius: '10px',
          }}
        />
      </Box>
    </SwiperSlide>

    <SwiperSlide>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={menu3}
          alt="Menu 3"
          style={{
            width: '500px',
            height: '510px',
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
