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
  const footerContext = configContext.website.footer;
  const theme = useTheme();

  const imgSrc = '/images/logo/' + footerContext.images.logo.name;

  return (
    <Container
      maxWidth="false"
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
        <Container
          component="figure"
          sx={{
            display: 'grid',
            alignItems: 'center',
            margin: '0',
          }}
        >
          <img
            src={imgSrc}
            alt={footerContext.images.logo.description}
            height="50px"
            width="150px"
          />
        </Container>
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
          gridAutoFlow: { xs: 'row', sm: 'column' },
          rowGap: '0.5rem',
          columnGap: '0.5rem',
          width: { xs: '100%', sm: 'fit-content' },
        }}
      >
        <RegisteredFooterText color={theme.palette.text.white} />
        <Divider
          orientation="vertical"
          color={theme.palette.text.white}
          width="1px"
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
        />
        <Divider
          orientation="horizontal"
          color={theme.palette.text.white}
          width="100%"
          sx={{
            display: { xs: 'flex', sm: 'none' },
          }}
        />
        <WebsiteAuthor color={theme.palette.text.white} />
      </Container>
    </Container>
  );
};
