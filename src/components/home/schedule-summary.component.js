import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const ScheduleSummary = () => {
  const configContext = useContext(AppConfigContext);
  const schedule = configContext.organization.schedule;

  return (
    <Box variant="section">
      <Typography variant="h3" component="h2">
        Workship Service Schedule
      </Typography>
      <Typography variant="p">
        Every {schedule.primary_service.day_of_week} at{' '}
        {schedule.primary_service.time}
      </Typography>
    </Box>
  );
};
