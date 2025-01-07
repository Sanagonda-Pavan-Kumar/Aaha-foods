import React from 'react';
import parota from './assets/parota.jpg';
import chepathi from './assets/chepathi.jpg';
import vegbiryani from './assets/vegbiryani.jpg';
import meals from './assets/vegmeals.jpg';
import bisbillabath from './assets/bisibillabath.jpg';
import tomatorice from './assets/tomatorice.jpg';
import jirarice from './assets/jirarice.jpg';
import coconutrice from './assets/coconutrice.jpg';
import curdrice from './assets/curdrice.jpg';
import sambarrice from './assets/sambarrice.jpg';
import vegpulao from './assets/vegpulav.jpg';
import lemonrice from './assets/lemonrice.jpg';
import pulihora from './assets/pulihora.jpg';
import { Box, Typography } from '@mui/material';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from 'antd'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Sider from './Sider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footers from './Footers';

const drawerWidth = 300;

const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova",
  },
});

const imageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover', 
};

const Meals = () => {
  return (
    <div>
      <Sider />
      <Box
        component="main"
        sx={{ backgroundColor: 'RGB(231,216,201,0.5)', pb: '40px' }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            },
          px:{
            xs:2,md:4
          },
          pt:{
            xs:11,md:5
          },
          pb:{
            xs:0,md:5
          },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            fontFamily="cursive"
            color="#F27F0C"
            sx={{px:'1'}}
          >
            Aha- Meals
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            fontFamily="ProximaNova"
            sx={{ pl: '20px', pt: '5px' }}
          >
            MENU
          </Typography>
        </Box>

        <Box
          sx={{
            px: '10px',
            ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            },
            alignItems: 'center',
            pt: '60px',
            pb: '20px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: "Proxima Nova",
              fontWeight: 'bold',
              fontSize: '25px',
            }}
          >
            Meals & Biryani
          </Typography>
        </Box>
        <Box
          sx={{
            px: '30px',
            ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            },
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
                cover={<img alt="parota" src={parota} style={imageStyle} />}
              >
                <Card.Meta
                  title="Parota"
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
                  width: 240,
                }}
                cover={<img alt="Chepathi" src={chepathi} style={imageStyle} />}
              >
                <Card.Meta
                  title="Chepathi"
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
                  width: 240,
                }}
                cover={<img alt="Bisbillabath" src={bisbillabath} style={imageStyle} />}
              >
                <Card.Meta
                  title="Bisbilla Bath"
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
                  width: 240,
                }}
                cover={<img alt="meals" src={meals} style={imageStyle} />}
              >
                <Card.Meta
                  title="Meals"
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
                  width: 240,
                }}
                cover={<img alt="Veg Biryani" src={vegbiryani} style={imageStyle} />}
              >
                <Card.Meta
                  title="Veg Biryani"
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
            ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            },
            alignItems: 'center',
            pt: '60px',
            pb: '20px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: "Proxima Nova",
              fontWeight: 'bold',
              fontSize: '25px',
            }}
          >
            Flavoured Rice 
          </Typography>
        </Box>
        <Box
          sx={{
            px: '30px',
            ml: {
              xs: 0,
              md: `${drawerWidth}px`,
            },
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
                cover={<img alt="Tomato Rice" src={tomatorice} style={imageStyle} />}
              >
                <Card.Meta
                  title="Tomato Rice"
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
                  width: 240,
                }}
                cover={<img alt="Lemon rice" src={lemonrice} style={imageStyle} />}
              >
                <Card.Meta
                  title="Lemon Rice"
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
                  width: 240,
                }}
                cover={<img alt="pulihora" src={pulihora} style={imageStyle} />}
              >
                <Card.Meta
                  title="Pulihora"
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
                  width: 240,
                }}
                cover={<img alt="veg pulao" src={vegpulao} style={imageStyle} />}
              >
                <Card.Meta
                  title="Veg Pulao"
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
                  width: 240,
                }}
                cover={<img alt="jira rice" src={jirarice} style={imageStyle} />}
              >
                <Card.Meta
                  title="Jira Rice"
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
                  width: 240,
                }}
                cover={<img alt="coconutrice" src={coconutrice} style={imageStyle} />}
              >
                <Card.Meta
                  title="Coconut Rice"
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
                  width: 240,
                }}
                cover={<img alt="Curd Rice" src={curdrice} style={imageStyle} />}
              >
                <Card.Meta
                  title="Curd Rice"
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
                  width: 240,
                }}
                cover={<img alt="Sambar rice" src={sambarrice} style={imageStyle} />}
              >
                <Card.Meta
                  title="Sambar Rice"
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
      <Box sx={{ ml: {
    xs: 0,
    md: `${drawerWidth}px`,
  }, }}>
        <Footers />
      </Box>  
    </div>
  );
};

export default Meals;