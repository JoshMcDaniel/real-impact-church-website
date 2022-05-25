import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';

export type Service = {
  title: string;
  day_of_week: string;
  time: string;
  description: string;
};

export type ScheduleSummaryServiceProps = {
  service: Service;
};

export const ScheduleSummaryService = (props: ScheduleSummaryServiceProps) => {
  const { title, day_of_week, time, description } = props.service;

  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: '0.5rem',
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Box
        sx={{
          display: 'grid',
          rowGap: '0.25rem',
        }}
      >
        <Typography variant="subtitle1" fontWeight="700" color="secondary">
          {day_of_week} | <time>{time}</time>
        </Typography>
        <Typography variant="body2" component="summary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ScheduleSummaryService;
