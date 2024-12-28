  import React,{ useState } from 'react';
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  import './App.css';
  import Box from '@mui/material/Box';
  import CssBaseline from '@mui/material/CssBaseline';
  import Collapse from '@mui/material/Collapse';
  import AppBar from '@mui/material/AppBar';
  import Toolbar from '@mui/material/Toolbar';
  import Drawer from '@mui/material/Drawer';
  import List from '@mui/material/List';
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemText from '@mui/material/ListItemText';
  import Divider from '@mui/material/Divider';
  import logo from './assets/Aha-png-Eng.png';
  import img1 from './assets/laknavaram-lake.jpg';
  import img2 from './assets/ra.jpeg';
  import img3 from './assets/Ramappa Temple.jpeg';
  import img4 from './assets/k1.jpg'; 
  import wada from './assets/wada.jpg';
  import dosa from './assets/dosa.jpg';
  import idly from './assets/idly.jpg';
  
  import orange from './assets/orange.png';
  import milkshake from './assets/milkshake.png';
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
import { Header } from './Header';
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
     <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
     
     
      zIndex: 2,
    }}
  
  >
 <Typography sx={{fontSize:'6rem', fontWeight: 'bold', color: 'grey',}} >
 Welcome!
 </Typography>
 <Typography sx={{fontSize:'3rem', fontWeight: 'bold', color: 'grey',px:'170px'}} >
 To
 </Typography>
 <Typography   sx={{fontSize:'3rem',fontFamily:'cursive', color: 'rgb(255, 170, 0)',px:'70px'}} >
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
       <Box sx={{ ml: `${drawerWidth}px`,}}>
          <Footers/>
        </Box>
       
      </ThemeProvider>

      
    );
  }


  export default App;
