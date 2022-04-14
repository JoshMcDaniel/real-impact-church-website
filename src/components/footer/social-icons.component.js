import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { socialMediaPlatformIconMap } from '../../constants/social-media-icon-map';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const SocialIcons = () => {
  const configContext = useContext(AppConfigContext);

  const handleIconClick = (path) => window.open(path);

  const platforms = configContext.website.media.social_media;
  const iconButtonPadding = '8px 16px 8px 0';

  return (
    <Box sx={{ width: '100%' }} color="white">
      {platforms.map((platform, index) => {
        return (
          <IconButton
            key={index}
            sx={{
              padding: iconButtonPadding,
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
