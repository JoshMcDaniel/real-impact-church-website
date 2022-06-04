import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { Event } from './Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import './event-date-time-card.component.css';

const EventDateTimeCard = (props: { event: Event }) => {
  const event = props.event;
  return (
    <Paper className="edt-container">
      <Box className="edt-section-container">
        <EventIcon />
        <Box>
          <Typography>{event.dayOfWeek}</Typography>
          <Typography fontWeight="bolder">
            {event.dateAsDateObj?.format('MMM, DD') || ''}
          </Typography>
        </Box>
      </Box>

      <Divider />

      <Box className="edt-section-container">
        <AccessTimeIcon />
        <Box>
          <Typography variant="caption">Begins</Typography>
          <Typography>{event.startTime}</Typography>
        </Box>
        <Box>
          <Typography variant="caption">Ends</Typography>
          <Typography>{event.endTime}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default EventDateTimeCard;
