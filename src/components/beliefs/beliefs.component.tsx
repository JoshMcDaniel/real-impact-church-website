import { useBeliefsConfig } from '../../config/app-config-hooks';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ChipsArray, { LabelLink } from '../common/chips-array.component';
import * as React from 'react';

export type DoctrineBelief = {
  title: string;
  text: string;
  verses: LabelLink[];
};

export type BeliefsDoctrineContainer = {
  title: string;
  beliefs: DoctrineBelief[];
};

export type BeliefsContainer = {
  doctrine: BeliefsDoctrineContainer;
};

export const Beliefs = () => {
  const beliefsConfig: BeliefsContainer = useBeliefsConfig();
  const isMediumView = useMediaQuery(useTheme().breakpoints.up('md'));

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
          <Typography>{belief.text}</Typography>
          <ChipsArray data={belief.verses}></ChipsArray>
        </Box>
      ))}
    </Box>
  );
};

export default Beliefs;
