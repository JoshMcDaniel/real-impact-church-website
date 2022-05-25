import { Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RegisteredFooterText } from './registered-footer-text.component';
import { SocialIcons } from './social-icons.component';
import './footer.component.css';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { WebsiteAuthor } from './website-author.component';
import { TitleLogoImage } from '../common/title-logo-image';
import * as React from 'react';

export const Footer = () => {
  const configContext = useContext(AppConfigContext);

  return (
    <Container
      maxWidth={false}
      component="footer"
      className="footer-container"
      sx={{
        display: 'grid',
        rowGap: '1rem',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'grid',
          gridAutoFlow: {
            sm: 'row',
            md: 'column',
          },
          rowGap: {
            sm: '1rem',
            md: '0',
          },
          justifyContent: {
            sm: 'start',
            md: 'space-evenly',
          },
        }}
      >
        <Box padding="0 1rem">
          <TitleLogoImage />
        </Box>
        <Container>
          <Typography variant="body1" color="secondary">
            Follow Us
          </Typography>
          <SocialIcons platforms={configContext.website.media.social_media} />
        </Container>
        <Container
          sx={{
            display: 'grid',
            rowGap: '0.5rem',
          }}
        >
          <Typography variant="body1" color="secondary">
            Contact Us
          </Typography>
          <Typography variant="body2" color={'white'}>
            {configContext.organization.contact.email.primary}
          </Typography>
          <Typography variant="body2" color={'white'}>
            {configContext.organization.contact.address}
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          display: 'grid',
          gridAutoFlow: { sm: 'row', md: 'column' },
          rowGap: '0.5rem',
          columnGap: '0.5rem',
          width: { sm: '100%', md: 'fit-content' },
        }}
      >
        <RegisteredFooterText color={'white'} />
        <Divider
          orientation="vertical"
          style={{ background: 'white' }}
          sx={{
            display: { sm: 'none', md: 'flex' },
            width: '1px',
          }}
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          style={{ background: 'white' }}
          sx={{
            display: { sm: 'flex', md: 'none' },
          }}
        />
        <WebsiteAuthor color={'white'} />
      </Container>
    </Container>
  );
};
