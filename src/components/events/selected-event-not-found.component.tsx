import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SelectedEventNotFound = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        gap: '1rem',
        marginTop: '4rem',
      }}
    >
      <Typography variant="h4">Event not found</Typography>
      <Typography>The event may have expired or been removed.</Typography>
      <Link to={'/events'}>See current Events</Link>
    </Box>
  );
};

export default SelectedEventNotFound;
