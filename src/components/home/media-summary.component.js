import { Paper, Typography } from '@mui/material';
import React from 'react';

export const MediaSummary = () => {
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
      <Typography variant="h4">Media</Typography>
    </Paper>
  );
};

export default MediaSummary;
