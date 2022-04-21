import { Box, Container, Paper, Slide, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import './home-main-content.component.css';

export const homeMainContentContainerId = 'homeMainContentContainerId';

export const HomeMainContent = () => {
  const homeConfigContext = useContext(AppConfigContext).website.home;
  const primaryText = homeConfigContext.intro_section.text.primary;
  const subText = homeConfigContext.intro_section.text.sub;

  const centerStyle = {
    display: 'grid',
    justifyContent: 'center',
  };

  return (
    <Box
      component="section"
      id={homeMainContentContainerId}
      className="home-main-content-container"
    >
      <Slide
        direction="down"
        in={true}
        container={document.getElementById(homeMainContentContainerId)}
        timeout={1_000}
        easing={{
          enter: 'cubic-bezier(0.7, 0, 0.84, 0)',
        }}
      >
        <Paper className="light-paper" variant="outlined">
          <Container style={centerStyle}>
            <Typography
              variant="h4"
              component="h1"
              display={{ xs: 'block', md: 'none' }}
            >
              {primaryText}
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              display={{ xs: 'none', md: 'block' }}
            >
              {primaryText}
            </Typography>
          </Container>
          <Container style={centerStyle}>
            <Typography
              variant="subtitle1"
              component="p"
              textAlign="center"
              display={{ xs: 'block', md: 'none' }}
            >
              {subText}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              textAlign="center"
              display={{ xs: 'none', md: 'block' }}
            >
              {subText}
            </Typography>
          </Container>
        </Paper>
      </Slide>
    </Box>
  );
};

export default HomeMainContent;
