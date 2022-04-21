import { Box, Skeleton, Stack } from '@mui/material';
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

export const HomeContentLoading = () => {
  return (
    <Box
      component="section"
      position="absolute"
      top="0"
      bottom="0"
      left="0"
      right="0"
      display="grid"
      gap="2rem"
      justifyContent="center"
      alignContent="space-evenly"
    >
      <Skeleton variant="rectangular" width="80vw" height={120} />
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export const Home = () => {
  const [isContentReady, setIsContentReady] = useState(false);

  const homeConfigContext = useContext(AppConfigContext).website.home;
  const bgImagePath =
    homeConfigContext.intro_section.images.background_image.path;

  const onImageLoad = () => setIsContentReady(true);

  return (
    <React.Fragment>
      <FixedBackgroundImage imgPath={bgImagePath} onImageLoad={onImageLoad} />
      {!isContentReady ? (
        <Box component="section" position="relative">
          <HomeContentLoading />
          <Loading
            loadingText="Getting content ready..."
            height="100vh"
            with="100vw"
          />
        </Box>
      ) : (
        <Box component="main">
          <HomeMainContent />
          <Stack component="section" spacing={8}>
            <ScheduleSummary />
            <AboutSummary />
            <MediaSummary />
            <EventsSummary />
            <GivingSummary />
            <ConnectSummary />
          </Stack>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Home;
