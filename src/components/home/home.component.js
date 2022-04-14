import { Box } from '@mui/material';
import React from 'react';
import { HomeMainContent } from './home-main-content.component';
import { ScheduleSummary } from './schedule-summary.component';

export const Home = () => {
  return (
    <Box component="main">
      <HomeMainContent />
      <ScheduleSummary />
    </Box>
  );
};

export default Home;
