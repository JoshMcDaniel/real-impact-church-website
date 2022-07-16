import {
  useMediaQuery,
  Box,
  useTheme,
  ImageListItem,
  ImageListItemBar,
  Chip,
  IconButton,
} from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './media.component.css';

type Props = {
  video: any;
};

const MostRecentVideo = (props: Props) => {
  const theme = useTheme();
  const isMediumView = useMediaQuery(theme.breakpoints.up('md'));
  const { video } = props;

  return (
    <Box display="grid" gap="2rem">
      <Box
        display="grid"
        position="relative"
        width="100%"
        boxShadow={5}
        className="grow-on-hover-small"
      >
        <Chip label="Most Recent" variant="filled" className="category-chip" />
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
            src={video?.snippet?.thumbnails?.medium?.url}
            alt={video?.snippet?.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={video?.snippet?.title}
            subtitle={video?.snippet?.description?.slice(0, 100)}
          />
        </ImageListItem>
      </Box>
    </Box>
  );
};

export default MostRecentVideo;
