import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

const OtherGiving = () => {
  const theme = useTheme();
  const isMediumView = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallView = useMediaQuery(theme.breakpoints.up('sm'));

  const org = useContext(AppConfigContext).organization;
  const { street, city, state, zip_code } = org.contact;

  return (
    <Box display="grid" textAlign="center" justifyItems="center">
      <Typography variant="h4">More Ways to Give</Typography>
      <Box
        sx={{
          padding: isMediumView ? '2rem' : '2rem 1rem',
          display: 'grid',
          gridAutoFlow: isMediumView ? 'column' : 'row',
          gap: '2rem',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
        component="section"
      >
        <Paper
          sx={{
            padding: '2rem',
            textAlign: 'left',
            width: isSmallView ? '400px' : '100%',
          }}
        >
          <Typography variant="h6" fontWeight="bolder">
            Give in person
          </Typography>
          <Typography>
            Want to give in person? Feel free to give in person during one of
            our services.
          </Typography>
        </Paper>
        <Paper
          sx={{
            padding: '2rem',
            textAlign: 'left',
            width: isSmallView ? '400px' : '100%',
          }}
        >
          <Typography variant="h6" fontWeight="bolder">
            Give by mail
          </Typography>
          <Typography>
            {org.full_name}
            <br />
            {street} {city},
            <br />
            {state} {zip_code}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default OtherGiving;
