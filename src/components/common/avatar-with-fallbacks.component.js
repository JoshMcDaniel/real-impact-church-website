import { Avatar, Skeleton } from '@mui/material';
import React, { useState } from 'react';

export const AvatarWithFallbacks = (props) => {
  const [imageLoaded, setIsImageLoaded] = useState(false);

  const imageHasLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <React.Fragment>
      <Avatar
        alt={props.avatarProps.alt}
        src={props.avatarProps.src}
        sx={{
          display: imageLoaded ? 'grid' : 'none',
          justifySelf: props.avatarProps.justifySelf,
          maxHeight: props.avatarProps.maxHeight,
          maxWidth: props.avatarProps.maxWidth,
          width: '100%',
          height: '100%',
        }}
        imgProps={{ onLoad: imageHasLoaded }}
      />
      {!imageLoaded && (
        <Skeleton
          variant="circular"
          sx={{
            justifySelf: props.avatarProps.justifySelf,
            maxHeight: props.avatarProps.maxHeight,
            maxWidth: props.avatarProps.maxWidth,
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </React.Fragment>
  );
};

export default AvatarWithFallbacks;
