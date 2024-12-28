import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; 
import { Typography } from '@mui/material'; 
import img4 from './assets/k1.jpg'; 
import wada from './assets/wada.jpg';
import dosa from './assets/dosa.jpg';
import idly from './assets/idly.jpg';

export const Swipers = () => {
  return (
    <div>
       
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
        <div>
          <SwiperSlide>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 1,
              }}
            ></div>

            <img
              src={img4}
              alt="Warangal"
              style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                display: 'block',
                position: 'relative',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
              }}
            >
              <Typography sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'grey' }}>
                Welcome!
              </Typography>
              <Typography sx={{ fontSize: '3rem', fontWeight: 'bold', color: 'grey', px: '170px' }}>
                To
              </Typography>
              <Typography sx={{ fontSize: '3rem', fontFamily: 'cursive', color: 'rgb(255, 170, 0)', px: '70px' }}>
                Aha Tiffins
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 1,
              }}
            ></div>

            <img
              src={dosa}
              alt="Laknavaram Lake"
              style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                display: 'block',
                position: 'relative',
                zIndex: 0,
              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 1,
              }}
            ></div>

            <img
              src={idly}
              alt="Laknavaram Lake"
              style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                display: 'block',
                position: 'relative',
                zIndex: 0,
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 1,
              }}
            ></div>

            <img
              src={wada}
              alt="Laknavaram Lake"
              style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                display: 'block',
                position: 'relative',
                zIndex: 0,
              }}
            />
          </SwiperSlide>
        </div>
      </Swiper>
    
    </div>
  );
};
