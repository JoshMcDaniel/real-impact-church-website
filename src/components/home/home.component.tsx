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
  useTheme,
} from '@mui/material';
import React from 'react';
import { ScheduleSummary } from './schedule-summary.component';
import { useHomeConfig } from '../../config/app-config-hooks';
import { Link } from 'react-router-dom';
import { AddressBlock } from '../common/address-block.component';
import { Image } from '../../common/types';
import SectionIntroImage from './section-intro-image.component';

type HomeSummaryItem = {
  image: Image;
  info_text: {
    title: string;
    subtitle: string;
  };
  nav_to_route: string;
};

export const Home = () => {
  const homeConfigContext = useHomeConfig();
  const items: HomeSummaryItem[] = homeConfigContext.home_summary_items;
  const primaryText = homeConfigContext.intro_section.text.primary;
  const subText = homeConfigContext.intro_section.text.sub;
  const imagePath = homeConfigContext.intro_section.images.intro_image.path;

  const isMediumView = useMediaQuery(useTheme().breakpoints.up('md'));

  return (
    <Fade
      // Will begin immediately after being added to the DOM
      in={true}
      timeout={1_500}
      easing={{
        enter: 'cubic-bezier(0.7, 0, 0.84, 0)',
      }}
    >
      <Box>
        <SectionIntroImage
          imagePath={imagePath}
          primaryText={primaryText}
          subText={subText}
        />
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
            rowHeight={isMediumView ? 267 : 500}
            gap={32}
            sx={{
              padding: '0',
              margin: '0',
              maxWidth: '800px',
              height: 'fit-content',
            }}
          >
            {items.map((item, index) => (
              <Box boxShadow={3} key={index}>
                <Link to={item.nav_to_route}>
                  <ImageListItem className="full-img-height-container">
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
              </Box>
            ))}
          </ImageList>
        </Container>
      </Box>
    </Fade>
  );
};

export default Home;
