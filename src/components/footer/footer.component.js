import { Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RegisteredFooterText } from './registered-footer-text.component';
import { SocialIcons } from './social-icons.component';
import './footer.component.css';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { WebsiteAuthor } from './website-author.component';
import { useTheme } from '@emotion/react';

export const Footer = () => {
  const configContext = useContext(AppConfigContext);
  const theme = useTheme();

  return (
    <Container
      maxWidth="false"
      variant="footer"
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
            xs: 'row',
            md: 'column',
          },
          rowGap: {
            xs: '1rem',
            md: '0',
          },
          justifyContent: {
            xs: 'start',
            md: 'space-evenly',
          },
        }}
      >
        {/* This Box is a placeholder for the logo/title image */}
        <Box>
          <img
            src="/images/logo/logo_no_bg.png"
            alt="logo"
            className="logo-image"
          />
          <Typography
            variant="subtitle1"
            component="span"
            color={theme.palette.text.white}
            fontFamily="'Luxurious Roman', cursive;"
          >
            {configContext.organization.full_name}
          </Typography>
        </Box>
        <Container>
          <Typography variant="body1" color="secondary">
            Follow Us
          </Typography>
          <SocialIcons color={theme.palette.text.white} />
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
          <Typography variant="body2" color={theme.palette.text.white}>
            {configContext.organization.contact.email.primary}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.white}>
            {configContext.organization.contact.address}
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: '0.5rem',
          width: 'fit-content',
        }}
      >
        <RegisteredFooterText color={theme.palette.text.white} />
        <Divider
          orientation="vertical"
          color={theme.palette.text.white}
          width="1px"
        />
        <WebsiteAuthor color={theme.palette.text.white} />
      </Container>
    </Container>
  );
};
