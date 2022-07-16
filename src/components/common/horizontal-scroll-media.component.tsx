import { ImageList, Box, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export type HorizontalScrollMediaItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
};

type Props = {
  mediaItems: any[];
};

const HorizontalScrollMedia = (props: Props) => {
  const getScrollableMediaItems = (
    items: any[]
  ): HorizontalScrollMediaItem[] => {
    return items.map((video) => ({
      id: video?.id?.videoId,
      src: video?.snippet?.thumbnails?.medium?.url,
      alt: video?.snippet?.title,
      title: video?.snippet?.title,
    }));
  };

  const scrollableMedia = getScrollableMediaItems(props.mediaItems);

  return (
    <ImageList
      className="hide-scrollbar"
      gap={32}
      sx={{
        display: 'grid',
        width: '100%',
        height: '200px',
        overflowX: 'auto',
        alignItems: 'center',
        margin: 0,
        padding: '0 1rem',
      }}
      cols={scrollableMedia.length}
    >
      {scrollableMedia.map((item) => (
        <Box boxShadow={3} key={item.id} className="grow-on-hover-medium">
          <Link to={item?.id || '#'} style={{ textDecoration: 'none' }}>
            <ImageListItem
              sx={{
                width: '300px',
                height: '200px',
                boxShadow: 3,
              }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          </Link>
        </Box>
      ))}
    </ImageList>
  );
};

export default HorizontalScrollMedia;
