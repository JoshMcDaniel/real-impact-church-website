import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const SocialIcons = (props) => {
  const iconButtonPadding = '8px 16px 8px 0';
  return (
    <Box sx={{ width: '100%' }} color={props.color}>
      <IconButton
        sx={{
          padding: iconButtonPadding,
        }}
      >
        <FacebookIcon color="info" fontSize="large" />
      </IconButton>
      <IconButton
        sx={{
          padding: iconButtonPadding,
        }}
      >
        <InstagramIcon color="info" fontSize="large" />
      </IconButton>
      <IconButton
        sx={{
          padding: iconButtonPadding,
        }}
      >
        <YouTubeIcon color="info" fontSize="large" />
      </IconButton>
    </Box>
  );
};
