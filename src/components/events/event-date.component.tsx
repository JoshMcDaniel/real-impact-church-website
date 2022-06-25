import { Box, Skeleton, Typography } from '@mui/material';
import React from 'react';
import { Event } from './Event';
import EventIcon from '@mui/icons-material/Event';
import './event-date-time-card.component.css';

const EventDate = (props: { event: Event }) => {
  const event = props.event;

  return (
    <Box className="edt-section-container">
      <EventIcon />
      <Box>
        <Typography>
          {event?.dayOfWeek ? event.dayOfWeek : <Skeleton width="80px" />}
        </Typography>
        <Typography fontWeight="bolder">
          {event?.dateAsDateObj?.format('MMM, DD') || <Skeleton width="80px" />}
        </Typography>
      </Box>
    </Box>
  );
};

export default EventDate;
