import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { EventTypeLocation } from './Event';
import MapIcon from '@mui/icons-material/Map';
import './event-location-card.component.css';
import DirectionLink from '../../common/directions-link.component';

export const EventLocationCard = (props: {
  eventLocation: EventTypeLocation;
}) => {
  const { streetAddress, city, state, zipCode, mapLink } = props.eventLocation;

  return (
    <Paper
      className="elc-container"
      sx={{
        padding: '1rem',
        height: 'fit-content',
        justifyContent: 'space-between',
      }}
    >
      <Box
        className="elc-container"
        sx={{
          width: 'fit-content',
        }}
      >
        <MapIcon />
        <Typography>
          {streetAddress} {city}
          <br />
          {state} {zipCode}
        </Typography>
      </Box>
      <DirectionLink href={mapLink} />
    </Paper>
  );
};

export default EventLocationCard;
