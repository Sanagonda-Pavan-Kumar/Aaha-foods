import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import idly from './assets/idly.jpg';
import gheekaramidly from './assets/gheekaramidly.jpg';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Card } from 'antd';
import ravvaidly from './assets/ravvaidly.jpeg';
import sambaridly from './assets/sambaridly.jpg';
import buttonidly from './assets/buttonidly.jpeg';
import thatteidly from './assets/thatteidly.png';
import tawaidly from './assets/tawaidly.jpeg';
import wada2p from './assets/wada2p.jpg';
import singlewada from './assets/singlewada.jpg';
import singleidlywada from './assets/singleidlywada.png';
import idlywada from './assets/idlywada.jpg';
import sambarwada from './assets/sambarwada.jpeg';
import poori3p from './assets/poori3p.jpg';
import poori2p from './assets/poori2p.jpg';
import bonda4p from './assets/bonda4p.jpg';
import bonda2p from './assets/bonda2p.png';
import pongal from './assets/pongal.jpg';
import upma from './assets/upma.jpg';
import plaindosa from './assets/plaindosa.jpg';
import masaladosa from './assets/masalaadosa.jpg';
import oniondosa from './assets/oniondosa.jpg';
import onionmasaladosa from './assets/onionmasaladosa.jpg';
import pannerdosa from './assets/pannerdosa.jpg';
import ravvadosa from './assets/ravvadosa.jpg';
import ravvamasaladosa from './assets/ravvamasaladosa.jpg';
import pesarattu from './assets/pesarattu.jpg';
import onionpesarattu from './assets/onionpesarattu.jpg';
import masalapesarattu from './assets/masalapesarattu.jpg';
import Footers from './Footers';
const { Meta } = Card;

import Sider from './Sider';

const drawerWidth = 300;

const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova",
  },
});

function Menu() {
  const navigate = useNavigate();
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          boxShadow= 'none'
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        />

      
        <Sider/>


      </Box>
     
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
  pt: 5,
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
  fontFamily= "Proxima Nova"
  sx={{ pl: '10px' }}
>
  MENU
</Typography>
</Box>

<Box
sx={{
  px:'10px',
  marginLeft: `${drawerWidth}px`, 
  alignItems: 'center',
 pt:'60px',
 pb:'20px',
 
}}
><Typography sx={{textAlign:'center',fontFamily:'',fontWeight:'bold',fontSize:'25px'}}>
    Idly Recipies</Typography></Box>
<Box
    sx={{
      pb: "60px",
      px: "30px",
      marginLeft: `${drawerWidth}px`,
    }}
  >
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={3}
    spaceBetween={0} 
    loop={true}
    navigation
    autoplay={{
      delay: 1, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true, 
    }}
    speed={3000} 
  >
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 260,
            
          }}
          cover={<img alt="Idly" src={idly}  />}
        >
          <Meta
            title="Idly"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="Ragi Idly" src={ravvaidly} />}
        >
          <Meta
            title="Ragi Idly"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 220,
          }}
          cover={<img alt="Sambar Idly" src={sambaridly} />}
        >
          <Meta
            title="Sambar Idly"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="Button Idly" src={buttonidly} />}
        >
          <Meta
            title="Button Idly"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="Ghee Karam Idly" src={gheekaramidly} />}
        >
          <Meta
            title="Ghee Karam Idly"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
       <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="Thatte Idly" src={thatteidly} />}
        >
          <Meta
            title="Thatte Idly"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
       </SwiperSlide>
       <SwiperSlide>
       <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="Thatte Idly" src={tawaidly} />}
        >
          <Meta
            title="Tawa Idly"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
       </SwiperSlide>
    </Swiper>
  </Box>
  <Box
sx={{
  px:'10px',
  marginLeft: `${drawerWidth}px`, 
  alignItems: 'center',
 pt:'10px',
 pb:'20px',
 
}}
><Typography sx={{textAlign:'center',fontFamily:'',fontWeight:'bold',fontSize:'25px'}}>
    Dosa Recipies </Typography></Box>
<Box
    sx={{
      pb: "60px",
      px: "30px",
      marginLeft: `${drawerWidth}px`,
    }}
  >
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={3}
    spaceBetween={0} 
    loop={true}
    navigation
    autoplay={{
      delay: 1, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true, 
    }}
    speed={3000} 
  >
      
    
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 210,
          }}
          cover={<img alt="plaindosa" src={plaindosa} />}
        >
          <Meta
            title="Plain Dosa"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="masaladosa" src={masaladosa} />}
        >
          <Meta
            title="Masala Dosa"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 220,
          }}
          cover={<img alt="oniondosa" src={oniondosa} />}
        >
          <Meta
            title="Onion Dosa"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 220,
            
          }}
          cover={<img alt="onionmasaladosa" src={onionmasaladosa} />}
        >
          <Meta
            title="Onion Masala Dosa"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 210,
            
          }}
          cover={<img alt="pannerdosa" src={pannerdosa}  />}
        >
          <Meta
            title="Panner Dosa"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
   
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 200,
            
          }}
          cover={<img alt="Ravva Dosa" src={ravvadosa}  />}
        >
          <Meta
            title="Ravva Dosa"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 230,
            
          }}
          cover={<img alt="Ravva masala Dosa" src={ravvamasaladosa}  />}
        >
          <Meta
            title="Ravva Masala Dosa"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 220,
            
          }}
          cover={<img alt="Pesarattu" src={pesarattu}  />}
        >
          <Meta
            title="Pesarattu"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 220,
            
          }}
          cover={<img alt="Onionpesarattu" src={onionpesarattu}  />}
        >
          <Meta
            title="Onion Pesarattu"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          hoverable
          style={{
            width: 210,
            
          }}
          cover={<img alt="Masala pesarattu" src={masalapesarattu}  />}
        >
          <Meta
            title="Masala Pesarattu"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
            }}
          />
        </Card>
      </SwiperSlide>
    </Swiper>
  </Box>
  
  
  <Box
  sx={{
    px: '10px',
    marginLeft: `${drawerWidth}px`,
    alignItems: 'center',
    pt: '10px',
    pb: '20px',
  }}
>
  <Typography sx={{ textAlign: 'center', fontFamily: '', fontWeight: 'bold', fontSize: '25px' }}>
    Bonda & Others
  </Typography>
</Box>
<Box
  sx={{
    pb: '60px',
    px: '30px',
    marginLeft: `${drawerWidth}px`,
  }}
>
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={3}
    spaceBetween={0} 
    loop={true}
    navigation
    autoplay={{
      delay: 1, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true, 
    }}
    speed={3000} 
  >
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 210,
        }}
        cover={<img alt="Poori" src={poori3p} />}
      >
        <Meta
          title="Poori 3-pieces"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 220,
        }}
        cover={<img alt="poori" src={poori2p} />}
      >
        <Meta
          title="Poori 2-pieces"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 220,
        }}
        cover={<img alt="Bonda " src={bonda4p} />}
      >
        <Meta
          title="4-piece Bonda"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 220,
        }}
        cover={<img alt="Bonda" src={bonda2p} />}
      >
        <Meta
          title="2-piece Bonda"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 230,
        }}
        cover={<img alt="upma" src={upma} />}
      >
        <Meta
          title="Upma"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 210,
        }}
        cover={<img alt="pongal" src={pongal} />}
      >
        <Meta
          title="Pongal"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
  </Swiper>
</Box>
<Box
  sx={{
    px: '10px',
    marginLeft: `${drawerWidth}px`,
    alignItems: 'center',
    pt: '10px',
    pb: '20px',
  }}
>
  <Typography sx={{ textAlign: 'center', fontFamily: '', fontWeight: 'bold', fontSize: '25px' }}>
    Wada Recipies
  </Typography>
</Box>
<Box
  sx={{
    pb: '60px',
    px: '30px',
    marginLeft: `${drawerWidth}px`,
  }}
>
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0} 
    loop={true} 
    autoplay={{
      delay: 1, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true, 
    }}
    speed={3000} 
    navigation
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    }}
  >
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="Ragi Idly" src={singlewada} />}
      >
        <Meta
          title="Single Wada"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 220,
        }}
        cover={<img alt="Idly Wada" src={singleidlywada} />}
      >
        <Meta
          title="Idly Wada"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 210,
        }}
        cover={<img alt="Button Idly" src={idlywada} />}
      >
        <Meta
          title="2-piece Idly, Wada"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 205,
        }}
        cover={<img alt="Ghee Karam Idly" src={sambarwada} />}
      >
        <Meta
          title="Sambar-Wada"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card
        hoverable
        style={{
          width: 210,
        }}
        cover={<img alt="Wada" src={wada2p} />}
      >
        <Meta
          title="2-piece Wada"
          style={{
            textAlign: 'center',
            fontFamily: 'cursive',
          }}
        />
      </Card>
    </SwiperSlide>
  </Swiper>
</Box>
</Box>

<Box sx={{ marginLeft: `${drawerWidth}px` }}>
        <Footers />
      </Box>  

    </ThemeProvider>

    
  );
}



export default Menu; 
