import { Box, Container } from '@mui/material';
import React, { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { HomeMainContent } from './home-intro-content.component';
import './home.component.css';

const homeStyle = (path) => {
  return {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${path})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };
};

export const Home = () => {
  const homeConfigContext = useContext(AppConfigContext).website.home;
  const bgImage = homeConfigContext.intro_section.images.background_image;
  const bgImagePath = '/images/home/' + bgImage.name;

  return (
    <Box component="main" style={homeStyle(bgImagePath)}>
      <Container
        component="article"
        sx={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <HomeMainContent />
      </Container>
    </Box>
  );
};

export default Home;
