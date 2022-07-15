import {
  useMediaQuery,
  Box,
  Typography,
  Divider,
  useTheme,
} from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import LoadingIndication from '../common/loading-indication.component';
import MostRecentVideos from './most-recent-videos.component';

export const Media = () => {
  const socialConfig = useContext(AppConfigContext).organization.social_media;
  const mediaConfig = useContext(AppConfigContext).website.media.media_page;
  const { api_url, channel_id } = socialConfig.youtube;

  const theme = useTheme();
  const isMediumView = useMediaQuery(theme.breakpoints.up('md'));

  const youtubeChannelUrl = `${api_url}${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=${channel_id}`;

  return (
    <Box display="grid" gap="1rem" padding={isMediumView ? '2rem' : '1rem'}>
      <Box>
        <Typography variant="h4">Sermons</Typography>
      </Box>
      <Divider></Divider>
      <MostRecentVideos
        channelUrl={youtubeChannelUrl}
        numberOfVideos={mediaConfig.youtube.most_popular.number_of_videos}
      />
    </Box>
  );
};

export default Media;
