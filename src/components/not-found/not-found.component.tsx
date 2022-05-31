import { Box, Link, Typography } from '@mui/material';
import React from 'react';

export const NotFound = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        gap: '2rem',
      }}
    >
      <Typography variant="h2">404 Error</Typography>
      <Typography variant="h5" component="p">
        Page not found
      </Typography>
      <Link href="/">Home</Link>
    </Box>
  );
};
