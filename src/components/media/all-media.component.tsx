import {
  useMediaQuery,
  Box,
  Typography,
  Divider,
  useTheme,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useMediaConfig,
  useOrganizationConfig,
} from '../../config/app-config-hooks';
import HorizontalScrollMedia from '../common/horizontal-scroll-media.component';
import LoadingIndication from '../common/loading-indication.component';
import MostRecentVideo from './most-recent-video.component';

export const AllMedia = () => {
  const { api_url, channel_id } = useOrganizationConfig().social_media.youtube;
  const { most_recent, most_popular } = useMediaConfig().media_page.youtube;

  const theme = useTheme();
  const isMediumView = useMediaQuery(theme.breakpoints.up('md'));

  const [recentRequestPending, setRecentRequestPending] =
    useState<boolean>(false);
  const [recentVideos, setRecentVideos] = useState<any[]>([]);

  const [popularRequestPending, setPopularRequestPending] =
    useState<boolean>(false);
  const [popularVideos, setPopularVideos] = useState<any[]>([]);

  const isRequestPending = (): boolean =>
    recentRequestPending || popularRequestPending;

  const channelUrl = `${api_url}${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=${channel_id}`;

  const getVideosUrl = (order: 'date' | 'viewCount', count: number): string => {
    return `${channelUrl}&order=${order}&part=snippet &type=video,id&maxResults=${count}`;
  };

  useEffect(() => {
    if (!recentVideos.length) {
      getMostRecentVideos();
    }
    if (!popularVideos.length) {
      getMostPopularVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMostRecentVideos = async (): Promise<void> => {
    setRecentRequestPending(true);
    const results = await axios.get(
      getVideosUrl('date', most_recent.number_of_videos)
    );
    const videos = results.data?.items;
    if (videos) {
      setRecentVideos(videos);
    }
    setRecentRequestPending(false);
  };

  const getMostPopularVideos = async (): Promise<void> => {
    setPopularRequestPending(true);
    const results = await axios.get(
      getVideosUrl('viewCount', most_popular.number_of_videos)
    );
    const videos = results.data?.items;
    if (videos) {
      setPopularVideos(videos);
    }
    setPopularRequestPending(false);
  };

  return (
    <Box display="grid" gap="1rem" padding={isMediumView ? '2rem' : '1rem'}>
      <Box>
        <Typography variant="h4">Sermons</Typography>
      </Box>
      <Divider></Divider>
      {isRequestPending() ? (
        <LoadingIndication loadingText="Loading media..." />
      ) : (
        <React.Fragment>
          <Link
            to={`${recentVideos[0]?.id?.videoId || '#'}`}
            style={{ textDecoration: 'none' }}
          >
            <MostRecentVideo video={recentVideos[0]} />
          </Link>
          <Box width="100%" overflow="hidden">
            <Typography variant="h4">Recent</Typography>
            <HorizontalScrollMedia mediaItems={recentVideos.slice(1)} />
          </Box>
          <Box width="100%" overflow="hidden">
            <Typography variant="h4">Popular</Typography>
            <HorizontalScrollMedia mediaItems={popularVideos} />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default AllMedia;
