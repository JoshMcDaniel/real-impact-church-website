import {
  useMediaQuery,
  Box,
  useTheme,
  Stack,
  Pagination,
  PaginationItem,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  ImageListItem,
  ImageListItemBar,
  Chip,
  IconButton,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingIndication from '../common/loading-indication.component';
import EventDate from '../events/event-date.component';
import './media.component.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type Props = {
  channelUrl: string;
  numberOfVideos: number;
};

const MostRecentVideos = (props: Props) => {
  const theme = useTheme();
  const isMediumView = useMediaQuery(theme.breakpoints.up('md'));

  const [requestPending, setRequestPending] = useState<boolean>(false);
  const [videos, setVideos] = useState<any[]>([]);

  const { channelUrl, numberOfVideos } = props;
  const mostRecentVideosUrl = `${channelUrl}&order=date&part=snippet &type=video,id&maxResults=${numberOfVideos}`;

  useEffect(() => {
    if (!videos.length) {
      getMostRecentVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMostRecentVideos = async () => {
    setRequestPending(true);
    const results = await axios.get(mostRecentVideosUrl);
    const videos = results.data?.items;
    if (videos) {
      setVideos(videos);
      console.log(videos);
    }
    setRequestPending(false);
  };

  const firstVideo = videos[0];

  return (
    <Box>
      {firstVideo && (
        <Box display="grid" position="relative" width="100%">
          {/* <Stack spacing={2}>
          <Pagination
            count={videos.length}
            renderItem={(item) => (
              <PaginationItem
                // components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack> */}
          <Chip
            label="Most Recent"
            variant="filled"
            className="category-chip"
          />
          <IconButton className="play-button">
            <PlayArrowIcon
              sx={{
                fontSize: isMediumView ? '5rem' : '3.5rem',
              }}
              className="play-button-icon"
            />
          </IconButton>
          <ImageListItem>
            <img
              src={firstVideo?.snippet?.thumbnails?.medium?.url}
              alt={firstVideo?.snippet?.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={firstVideo?.snippet?.title}
              subtitle={firstVideo?.snippet?.description?.slice(0, 100)}
            />
          </ImageListItem>
        </Box>
      )}
      {requestPending && <LoadingIndication />}
    </Box>
  );
};

export default MostRecentVideos;
