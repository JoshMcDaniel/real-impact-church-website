import { Divider, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import {
  Service,
  ScheduleSummaryService,
} from './schedule-summary-service.component';
import React from 'react';

export const ScheduleSummary = () => {
  const configContext = useContext(AppConfigContext);
  const services: Service[] = configContext.organization.schedule.services;

  return (
    <Paper
      component="section"
      sx={{
        padding: '1rem',
        display: 'grid',
        rowGap: '2rem',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4">Schedule</Typography>
      <Box
        sx={{
          display: 'grid',
          rowGap: '1rem',
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              rowGap: '0.5rem',
              maxWidth: '800px',
            }}
          >
            <ScheduleSummaryService service={service} />
            {index !== services.length - 1 && (
              <Divider
                sx={{
                  marginTop: '1rem',
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
