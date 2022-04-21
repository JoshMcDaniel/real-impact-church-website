import { Box, Fade, Stack } from '@mui/material';
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
  const [isContentReady, setIsContentReady] = useState(false);
  const onImageLoad = () => setIsContentReady(true);

  const homeConfigContext = useContext(AppConfigContext).website.home;
  const bgImagePath =
    homeConfigContext.intro_section.images.background_image.path;

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
        </Fade>
      )}
    </React.Fragment>
  );
};

export default Home;
