import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import FixedBackgroundImage from '../common/fixed-bg-img.component';
import './section-intro-image.component.css';

export const SectionIntroImage = (props) => {
  const centerStyle = {
    display: 'grid',
    justifyContent: 'center',
  };
  const height = '50vh';

  const onImageLoad = () => {
    if (props.onLoad) {
      props.onLoad();
    }
  };

  return (
    <Box
      component="section"
      className="section-intro-image-container"
      height={height}
    >
      <FixedBackgroundImage
        imgPath={props.imagePath}
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
          {props.primaryText}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          display={{ xs: 'none', md: 'block' }}
        >
          {props.primaryText}
        </Typography>
      </Container>
      <Container style={centerStyle}>
        <Typography
          variant="subtitle1"
          component="p"
          textAlign="center"
          display={{ xs: 'block', md: 'none' }}
        >
          {props.subText}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          textAlign="center"
          display={{ xs: 'none', md: 'block' }}
        >
          {props.subText}
        </Typography>
      </Container>
    </Box>
  );
};

export default SectionIntroImage;
