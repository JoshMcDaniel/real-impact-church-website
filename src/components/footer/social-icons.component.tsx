import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { socialMediaPlatformIconMap } from '../../constants/social-media-icon-map';
import * as React from 'react';

export type SocialPlatform = {
  platform: string;
  path: string;
};

export type SocialIconsProps = {
  platforms: SocialPlatform[];
};

export const SocialIcons = (props: SocialIconsProps) => {
  const handleIconClick = (path: string) => window.open(path);

  return (
    <Box sx={{ width: '100%' }} color="white">
      {props.platforms.map((platform, index) => {
        return (
          <IconButton
            key={index}
            sx={{
              padding: '8px 16px 8px 0',
            }}
            onClick={() => handleIconClick(platform.path)}
          >
            {socialMediaPlatformIconMap[platform.platform]}
          </IconButton>
        );
      })}
    </Box>
  );
};

export default SocialIcons;
