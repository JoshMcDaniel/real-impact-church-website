import { Paper, Typography } from '@mui/material';
import React from 'react';

export const AboutSummary = () => {
  return (
    <Paper
      className="light-paper"
      variant="outlined"
      component="section"
      sx={{
        padding: '2rem',
        display: 'grid',
        rowGap: '2rem',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4">About Us</Typography>
    </Paper>
  );
};

export default AboutSummary;
