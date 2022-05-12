import {
  Box,
  Container,
  Fade,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Stack,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { HomeMainContent } from './home-main-content.component';
import { ScheduleSummary } from './schedule-summary.component';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { Link } from 'react-router-dom';
import { AddressBlock } from '../common/address-block.component';

export const Home = () => {
  const homeConfigContext = useContext(AppConfigContext).website.home;
  const items = homeConfigContext.home_summary_items;

  const isMediumView = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Fade
      direction="down"
      // Will begin immediately after being added to the DOM
      // which is when `isContentReady` is true.
      in={true}
      timeout={1_500}
      easing={{
        enter: 'cubic-bezier(0.7, 0, 0.84, 0)',
      }}
    >
      <Box>
        <HomeMainContent />
        <Container
          sx={{
            display: 'grid',
            gridTemplateColumns: isMediumView ? '1fr 2fr' : '1fr',
            paddingTop: '24px',
            paddingBottom: '24px',
            gap: '2rem',
            justifyItems: 'center',
          }}
        >
          <Stack component="main" spacing={1} maxWidth="400px">
            <Paper>
              <AddressBlock />
            </Paper>
            <ScheduleSummary />
          </Stack>
          <ImageList
            cols={isMediumView ? 2 : 1}
            gap={32}
            sx={{
              padding: '0',
              margin: '0',
              maxWidth: '800px',
              height: 'fit-content',
            }}
          >
            {items.map((item, index) => (
              <Link to={item.nav_to_route} key={index}>
                <ImageListItem key={index}>
                  <img
                    src={item.image.path}
                    alt={item.image.description}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.info_text.title}
                    subtitle={item.info_text.subtitle}
                  />
                </ImageListItem>
              </Link>
            ))}
          </ImageList>
        </Container>
      </Box>
    </Fade>
  );
};

export default Home;
