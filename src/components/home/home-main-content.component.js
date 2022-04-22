import { Box, Container, Paper, Skeleton, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import FixedBackgroundImage from '../common/fixed-bg-img.component';
import './home-main-content.component.css';

export const HomeMainContent = (props) => {
  const [isContentReady, setIsContentReady] = useState(false);

  const homeConfigContext = useContext(AppConfigContext).website.home;
  const primaryText = homeConfigContext.intro_section.text.primary;
  const subText = homeConfigContext.intro_section.text.sub;
  const bgImagePath =
    homeConfigContext.intro_section.images.background_image.path;

  const centerStyle = {
    display: 'grid',
    justifyContent: 'center',
  };
  const height = '50vh';

  const onImageLoad = () => setIsContentReady(true);

  return (
    <Box
      component="section"
      className="home-main-content-container"
      height={height}
    >
      <FixedBackgroundImage
        imgPath={bgImagePath}
        onImageLoad={onImageLoad}
        height="100%"
        width="100%"
      />
      <Container>
        <Typography
          variant="h4"
          component="h1"
          display={{ xs: 'block', md: 'none' }}
        >
          {primaryText}
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          display={{ xs: 'none', md: 'block' }}
        >
          {primaryText}
        </Typography>
      </Container>
      <Container style={centerStyle}>
        <Typography
          variant="subtitle1"
          component="p"
          textAlign="center"
          display={{ xs: 'block', md: 'none' }}
        >
          {subText}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          textAlign="center"
          display={{ xs: 'none', md: 'block' }}
        >
          {subText}
        </Typography>
      </Container>
    </Box>
  );
};

export default HomeMainContent;
