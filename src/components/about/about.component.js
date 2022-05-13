import { Box, Paper, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import NavTile from '../common/nav-tile.component';
import SectionIntroImage from '../home/section-intro-image.component';
import AboutDescription from './about-description.component';

export const About = () => {
  const aboutConfig = useContext(AppConfigContext).website.about;
  const aboutDescription = aboutConfig.about_description;
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
      <Box
        component={'main'}
        sx={{
          display: 'grid',
          padding: isMediumView ? '2rem 4rem' : '2rem',
          gap: '2rem',
          justifyItems: 'center',
        }}
      >
        <Box display="grid" rowGap="1rem">
          {aboutDescription.descriptions.map((item, index) => (
            <AboutDescription
              key={index}
              title={item.title_text}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
      <Paper
        sx={{
          padding: isMediumView ? '2rem' : '2rem 1rem',
          display: 'grid',
          gridAutoFlow: isMediumView ? 'column' : 'row',
          gap: '2rem',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
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
      </Paper>
    </Box>
  );
};

export default About;
