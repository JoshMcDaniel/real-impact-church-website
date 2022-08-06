import { Divider, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useOrganizationConfig } from '../../config/app-config-hooks';
import {
  Service,
  ScheduleSummaryService,
} from './schedule-summary-service.component';
import React, { useEffect } from 'react';
import axios from 'axios';

export const ScheduleSummary = () => {
  const [services, setServices] = React.useState<Service[]>([]);
  const schedule = useOrganizationConfig().schedule;

  useEffect(() => {
    if (!services.length) {
      getAllServices();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllServices = () => {
    axios.get(schedule.services.route).then((res) => {
      setServices(res.data);
    });
  };

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
      {services.length && (
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
      )}
    </Paper>
  );
};
