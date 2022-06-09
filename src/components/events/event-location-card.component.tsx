import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { EventTypeLocation } from './Event';
import MapIcon from '@mui/icons-material/Map';
import './event-location-card.component.css';
import { createLocationLinkFromAddress } from '../../common/location-link';
import DirectionLink from '../../common/directions-link.component';

const EventLocationCard = (props: { eventLocation: EventTypeLocation }) => {
  const { streetAddress, city, state, zipCode } = props.eventLocation;
  const fullAddress = `${streetAddress} ${city} ${state} ${zipCode}`;
  const locationLink = createLocationLinkFromAddress(fullAddress);

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
          columnGap: '2rem',
        }}
      >
        <MapIcon />
        <Typography>
          {streetAddress} {city}
          <br />
          {state} {zipCode}
        </Typography>
      </Box>
      <DirectionLink href={locationLink} />
    </Paper>
  );
};

export default EventLocationCard;
