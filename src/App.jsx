  import React,{ useState } from 'react';
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  import './App.css';
  import Box from '@mui/material/Box';
  import CssBaseline from '@mui/material/CssBaseline';
  import img4 from './assets/k1.jpg'; 
  import wada from './assets/wada.jpg';
  import dosa from './assets/dosa.jpg';
  import idly from './assets/idly.jpg';
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Home1 } from './Home1';
import { Home2 } from './Home2';
import Sider from './Sider';
import Footers from './Footers';



  const drawerWidth = 300;

  const theme = createTheme({
    typography: {
      fontFamily: "Proxima Nova",
    },
  });

  function App() {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu); 
  };

    return (
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
     
        <Box sx={{ display: 'flex', }}>
<Sider/>

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
    <Typography
      sx={{
        fontSize: { xs: '2.5rem', sm: '4rem', md: '6rem' }, 
        fontWeight: 'bold',
        color: 'grey',
      }}
    >
      Welcome!
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, 
        fontWeight: 'bold',
        color: 'grey',
        px: { xs: '60px', md: '170px' },
      }}
    >
      To
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, 
        fontFamily: 'cursive',
        color: 'rgb(255, 170, 0)',
        px: { xs: '10px', md: '70px' },
      }}
    >
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
        </Box>
   
      <Home1/>
       
       <Box>
        <Home2/>
       </Box>
       <Box sx={{  ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            },}}>
          <Footers/>
        </Box>
       
      </ThemeProvider>

      
    );
  }


  export default App;
