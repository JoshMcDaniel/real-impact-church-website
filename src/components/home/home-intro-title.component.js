import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import LargeFontText from '../common/large-font-text.component';
import './home-intro-title.component.css';

export const HomeIntroTitle = () => {
  return (
    <Box className="home-intro-title">
      <Container
        sx={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr 1fr',
          rowGap: '0.5rem',
          height: 'fit-content',
          width: '100%',
          alignSelf: 'center',
          alignItems: 'center',
        }}
      >
        <LargeFontText text="Real" />
        <LargeFontText text="Impact" />
        <LargeFontText text="Church" />
      </Container>
    </Box>
  );
};
