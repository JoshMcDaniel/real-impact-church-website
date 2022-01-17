import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Copyright } from './copyright.component';
import { SocialIcons } from './social-icons.component';

export const Footer = () => {
  return (
    <Box
      sx={{
        padding: '2rem 0',
      }}
    >
      <Container>
        <Typography component="footer" variant="body2">
          Follow Us
        </Typography>
        <SocialIcons />
        <Copyright />
      </Container>
    </Box>
  );
};
