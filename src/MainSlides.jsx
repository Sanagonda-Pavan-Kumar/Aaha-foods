import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; 
import { Typography } from '@mui/material'; 
import img4 from './assets/k1.jpg'; 
import kebab from './assets/kebab.jpg';
import kebabs1 from './assets/kebabs1.jpg';
import fullbird from './assets/fullbird.jpg';

const MainSlides = () => {
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
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}>
              <Typography sx={{ fontSize: { xs: '3rem', sm: '2rem', md: '6rem' },  fontWeight: 'bold', color: 'grey' }}>
                Welcome!
              </Typography>
              <Typography sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' },  fontWeight: 'bold', color: 'grey',  px: { xs: '60px', md: '170px' }, }}>
                To
              </Typography>
              <Typography sx={{ fontSize: { xs: '2rem', sm: '2rem', md: '3rem' },  fontFamily: 'cursive', color: 'rgb(255, 170, 0)',  px: { xs: '10px', md: '70px' }, }}>
                Aha-Foods
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
              src={kebab}
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
              src={kebabs1}
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
              src={fullbird}
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
}

export default MainSlides;