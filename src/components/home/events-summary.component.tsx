import { Paper, Typography } from '@mui/material';
import React from 'react';

export const EventsSummary = () => {
  return (
    <Paper
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
      <Typography variant="h4">Events</Typography>
    </Paper>
  );
};

export default EventsSummary;
