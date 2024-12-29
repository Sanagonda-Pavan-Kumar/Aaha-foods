import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules'; 
import 'swiper/swiper-bundle.css'; 
import dosa1 from './assets/dosa1.jpg';
import kebab from './assets/kebab.jpg';
import kebabs1 from './assets/kebabs1.jpg';
import idly12 from './assets/idly12.jpg'; 
import dosa3 from './assets/wada12.jpg'; 
import fullbird from './assets/fullbird.jpg';
import vegbiryani1 from './assets/vegbiryani1.jpg';
import grillleg from './assets/grillleg.jpg';

const AhaFoods = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: 'Aha-Tiffins',
      subtitle: 'South Indian Delicacies',
      time: '7:00 AM - 12:00 PM',
      images: [dosa1, idly12, dosa3], 
      buttonText: 'View Menu',
      navigateTo: '/App',
    },
    {
      title: 'Aha-Grills & Kebabs',
      subtitle: '',
      time: '5:00 PM - 12:00 PM',
      images: [kebab,fullbird , kebabs1], 
      buttonText: 'View Menu',
      navigateTo: '/Grills',
    },
    {
      title: 'Aha Catering',
      subtitle: 'For All Your Events',
      images: [grillleg, dosa1, vegbiryani1], 
      buttonText: 'View Services',
      navigateTo: '/catering',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', background: 'linear-gradient(to bottom right, #FFF4E5, #FFD9D9)', padding: 0 }}>
      <Grid container spacing={0}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
               
                  disableOnInteraction: false,
                }}
                speed={1000} 
                style={{ height: '100%' }} 
                onMouseEnter={(swiper) => swiper.autoplay.stop()} 
                onMouseLeave={(swiper) => swiper.autoplay.start()} 
              >
                {card.images.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <img
                      src={image}
                      alt={`${card.title} ${imgIndex}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.7)',
                      }}
                    />
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
                      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        {card.title}
                      </Typography>
                      <Typography variant="subtitle1">{card.subtitle}</Typography>
                      {card.time && <Typography variant="body2">{card.time}</Typography>}
                      <Button
                        variant="contained"
                        sx={{
                          marginTop: 2,
                          backgroundColor: 'white',
                          color: '#CC5500',
                          borderRadius: '20px', 
                        }}
                        onClick={() => navigate(card.navigateTo)}
                      >
                        {card.buttonText}
                      </Button>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AhaFoods;