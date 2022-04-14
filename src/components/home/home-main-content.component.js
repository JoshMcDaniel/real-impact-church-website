import { useTheme } from '@emotion/react';
import { Box, Container, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { centerFixedBackgroundImage } from '../common/common-styles';

export const HomeMainContent = () => {
  const theme = useTheme();
  const color = theme.palette.text.white;

  const homeConfigContext = useContext(AppConfigContext).website.home;
  const primaryText = homeConfigContext.intro_section.text.primary;
  const subText = homeConfigContext.intro_section.text.sub;

  const bgImage = homeConfigContext.intro_section.images.background_image;
  const bgImagePath = '/images/home/' + bgImage.name;

  const mainContentStyle = {
    ...centerFixedBackgroundImage(bgImagePath),
    height: '100vh',
    width: '100%',
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  };

  const centerStyle = {
    display: 'grid',
    justifyContent: 'center',
  };

  return (
    <Box component="section" style={mainContentStyle}>
      <Container style={centerStyle}>
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
      </Container>
      <Container style={centerStyle}>
        <Typography
          variant="subtitle1"
          component="p"
          color={color}
          textAlign="center"
          display={{ xs: 'block', md: 'none' }}
        >
          {subText}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color={color}
          textAlign="center"
          display={{ xs: 'none', md: 'block' }}
        >
          {subText}
        </Typography>
      </Container>
    </Box>
  );
};
