import { Box } from '@mui/material';
import React from 'react';
import { HomeMainContent } from './home-main-content.component';
import { ScheduleSummary } from './schedule-summary.component';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { centerFixedBackgroundImage } from '../common/common-styles';

export const Home = () => {
  const homeConfigContext = useContext(AppConfigContext).website.home;
  const bgImage = homeConfigContext.intro_section.images.background_image;
  const bgImagePath = '/images/home/' + bgImage.name;
  const homeStyle = {
    ...centerFixedBackgroundImage(bgImagePath),
  };
  return (
    <Box component="main" style={homeStyle}>
      <HomeMainContent />
      <ScheduleSummary />
    </Box>
  );
};

export default Home;
