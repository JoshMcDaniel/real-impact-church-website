import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { YoutubeSnippet } from '../../common/types';
import ArrowLink from '../common/arrow-link.component';
import YoutubeEmbed from '../common/youtube-embed.component';

const SelectedMedia = () => {
  const [videoInfo, setVideoInfo] = React.useState<YoutubeSnippet>();
  const videoId = useLocation().pathname.split('/').pop();

  const videoSnippetUrl = (): string => {
    return `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
  };

  const watchVideoOnYoutubeUrl = (): string => {
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  useEffect(() => {
    if (!videoInfo) {
      getVideoInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVideoInfo = () => {
    axios.get(videoSnippetUrl()).then((res) => {
      if (res?.data?.items[0]?.snippet) {
        setVideoInfo(res.data.items[0].snippet);
      }
    });
  };

  const getFormattedPublishedAtDate = (publishedAt: string): string => {
    return dayjs(publishedAt).format('MMMM DD, YYYY');
  };

  return (
    <Box display="grid" gap="2rem">
      <YoutubeEmbed videoId={videoId} />
      <Box display="grid" padding="0 1rem 2rem 1rem">
        <Card
          sx={{
            width: '100%',
            maxWidth: 800,
            justifySelf: 'center',
          }}
          raised
        >
          <CardContent>
            <Typography variant="h5" fontWeight="bolder">
              {videoInfo?.title || <Skeleton width="60%" />}
            </Typography>
            <Typography variant="caption" gutterBottom>
              {videoInfo?.publishedAt ? (
                `Published: ${getFormattedPublishedAtDate(
                  videoInfo.publishedAt
                )}`
              ) : (
                <Skeleton width="100px" />
              )}
            </Typography>
            <Typography variant="body2">
              {videoInfo?.description || <Skeleton />}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: '0 0 1rem 1rem',
            }}
          >
            <ArrowLink
              linkText="Watch on YouTube"
              route={watchVideoOnYoutubeUrl()}
              openInNewTab={true}
            />
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default SelectedMedia;
