import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { Box, Typography, useMediaQuery } from '@mui/material';
import ChipsArray from '../common/chips-array.component';

export const Beliefs = () => {
  const beliefsConfig = useContext(AppConfigContext).website.beliefs;
  const isMediumView = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Box
      display="grid"
      gap="2rem"
      padding={isMediumView ? '2rem 6rem' : '2rem'}
    >
      <Typography variant="h4">{beliefsConfig.doctrine.title}</Typography>
      {beliefsConfig.doctrine.beliefs.map((belief, index) => (
        <Box key={index} display="grid" gap="1rem">
          <Typography variant="h5">{belief.title}</Typography>
          <Typography variant="p">{belief.text}</Typography>
          <ChipsArray data={belief.verses}></ChipsArray>
        </Box>
      ))}
    </Box>
  );
};

export default Beliefs;
