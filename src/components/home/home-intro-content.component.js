import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const HomeMainContent = () => {
  const theme = useTheme();
  const color = theme.palette.text.white;

  const homeConfigContext = useContext(AppConfigContext).website.home;
  const primaryText = homeConfigContext.intro_section.text.primary;
  const subText = homeConfigContext.intro_section.text.sub;

  return (
    <Box
      component="div"
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        color={color}
        display={{ xs: 'block', md: 'none' }}
      >
        {primaryText}
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        color={color}
        display={{ xs: 'none', md: 'block' }}
      >
        {primaryText}
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        color={color}
        display={{ xs: 'block', md: 'none' }}
      >
        {subText}
      </Typography>
      <Typography
        variant="h4"
        component="p"
        color={color}
        display={{ xs: 'none', md: 'block' }}
      >
        {subText}
      </Typography>
    </Box>
  );
};
