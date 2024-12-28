import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const drawerWidth = 300;
    
    return (
        <Box
            component="main"
            sx={{
                ml: `${drawerWidth}px`,
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0)', 
           px:'150px',
               pt:'10px',
                zIndex: 10,
            }}
        >
          
            <Button
                onClick={() => navigate('/')}
                sx={{
                    
                    fontWeight: 'bold',
                    color: 'white',
                    px:'40px',
                    mb: 1.5, 
                    '&:hover': {
                        backgroundColor: 'orange',
                      borderRadius:'40px',
                      
                    },
                }}
            >
                Aha-Tiffins
            </Button>
            <Button
                onClick={() => navigate('/Grills')}
                sx={{
                   
                    fontWeight: 'bold',
                    px:'40px',
                    color: 'white',
                    mb: 1.5, 
                    '&:hover': {
                        backgroundColor: 'orange',
                  
                       borderRadius:'100px',
                     
                    },
                }}
            >
                Aha-Grills & Kababs
            </Button>
            <Button
                onClick={() => navigate('/aha-foods')}
                sx={{
                   
                    fontWeight: 'bold',
                    px:'40px',
                    color: 'white',
                    mb: 2, 
                    '&:hover': {
                        backgroundColor: 'orange', 
                       borderRadius:'40px',
                    
                    },
                }}
            >
                Aha Foods
            </Button>
        </Box>
    );
};
