import { Box, Container, Fade, Stack } from '@mui/material';
import React, { useState } from 'react';
import { HomeMainContent } from './home-main-content.component';
import { ScheduleSummary } from './schedule-summary.component';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import FixedBackgroundImage from '../common/fixed-bg-img.component';
import AboutSummary from './about-summary.component';
import MediaSummary from './media-summary.component';
import EventsSummary from './events-summary.component';
import GivingSummary from './giving-summary.component';
import ConnectSummary from './connect-summary.component';
import { Loading } from '../common/loading.component';
import { HomeContentLoading } from './home-content-loading.component';

export const Home = () => {
  return (
    <Fade
      direction="down"
      // Will begin immediately after being added to the DOM
      // which is when `isContentReady` is true.
      in={true}
      timeout={1_500}
      easing={{
        enter: 'cubic-bezier(0.7, 0, 0.84, 0)',
      }}
    >
      <Box>
        <Stack component="main" spacing={0}>
          <HomeMainContent />
          <ScheduleSummary />
          <AboutSummary />
          <MediaSummary />
          <EventsSummary />
          <GivingSummary />
          <ConnectSummary />
        </Stack>
      </Box>
    </Fade>
  );
};

export default Home;
