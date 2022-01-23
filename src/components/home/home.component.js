import { Box } from '@mui/material';
import React from 'react';
import { HomeMainContent } from './home-main-content.component';
import { ScheduleSummary } from './schedule-summary.component';

export const centerFixedBackgroundImage = (path) => {
  return {
    backgroundImage: `url(${path})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };
};

export const Home = () => {
  return (
    <Box component="main">
      <HomeMainContent />
      <ScheduleSummary />
    </Box>
  );
};

export default Home;
