import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const SocialIcons = (props) => {
  const configContext = useContext(AppConfigContext);

  const platforms = configContext.website.media.social_media;
  const iconButtonPadding = '8px 16px 8px 0';

  const socialMediaPlatformIconMap = {
    FACEBOOK: (
      <FacebookIcon
        sx={{
          color: props.color,
        }}
        fontSize="large"
      />
    ),
    INSTAGRAM: (
      <InstagramIcon
        sx={{
          color: props.color,
        }}
        fontSize="large"
      />
    ),
    YOUTUBE: (
      <YouTubeIcon
        sx={{
          color: props.color,
        }}
        fontSize="large"
      />
    ),
  };

  return (
    <Box sx={{ width: '100%' }} color={props.color}>
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

const handleIconClick = (path) => {
  window.open(path);
};
