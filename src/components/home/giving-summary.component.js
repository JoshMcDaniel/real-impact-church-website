import { Paper, Typography } from '@mui/material';
import React from 'react';

export const GivingSummary = () => {
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
      <Typography variant="h4">Giving</Typography>
    </Paper>
  );
};

export default GivingSummary;
