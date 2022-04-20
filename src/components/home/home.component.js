import { Stack } from '@mui/material';
import React from 'react';
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

export const Home = () => {
  const homeConfigContext = useContext(AppConfigContext).website.home;
  const bgImagePath =
    homeConfigContext.intro_section.images.background_image.path;

  return (
    <React.Fragment>
      <FixedBackgroundImage imgPath={bgImagePath} />
      <HomeMainContent />
      <Stack component="main" spacing={8}>
        <ScheduleSummary />
        <AboutSummary />
        <MediaSummary />
        <EventsSummary />
        <GivingSummary />
        <ConnectSummary />
      </Stack>
    </React.Fragment>
  );
};

export default Home;
