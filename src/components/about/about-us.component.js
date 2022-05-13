import { Box, Container, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import NavTile from '../common/nav-tile.component';
import SectionIntroImage from '../home/section-intro-image.component';
import AboutDescription from './about-description.component';

export const AboutUs = () => {
  const aboutConfig = useContext(AppConfigContext).website.about;
  const primaryText = aboutConfig.intro_section.text.primary;
  const subText = aboutConfig.intro_section.text.sub;
  const imagePath = aboutConfig.intro_section.images.intro_image.path;
  const tiles = aboutConfig.nav_tiles.tiles;

  const isMediumView = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Box component="section">
      <SectionIntroImage
        imagePath={imagePath}
        primaryText={primaryText}
        subText={subText}
      />
      <Container
        sx={{
          display: 'grid',
          paddingTop: '24px',
          paddingBottom: '24px',
          gap: '2rem',
          justifyItems: 'center',
        }}
      >
        <AboutDescription component="main" />
        <Box
          padding={isMediumView ? '1rem 2rem' : '0'}
          display="grid"
          gridAutoFlow={isMediumView ? 'column' : 'row'}
          gap="2rem"
          justifyContent="space-evenly"
          width="100%"
          component="section"
        >
          {tiles.map((tile, index) => (
            <NavTile
              key={index}
              title={tile.title}
              summary={tile.summary}
              linkText={tile.link_text}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
