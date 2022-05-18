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
          width: props.avatarProps.height,
          height: props.avatarProps.width,
          display: imageLoaded ? 'block' : 'none',
        }}
        imgProps={{ onLoad: imageHasLoaded }}
      />
      {!imageLoaded && (
        <Skeleton
          variant="circular"
          height={props.avatarProps.height}
          width={props.avatarProps.width}
        />
      )}
    </React.Fragment>
  );
};

export default AvatarWithFallbacks;
