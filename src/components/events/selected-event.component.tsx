import {
  Box,
  Card,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import axios, { AxiosRequestConfig } from 'axios';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import LoadingIndication from '../common/loading-indication.component';
import { Event } from './Event';
import EventDateTimeCard from './event-date-time-card.component';
import EventDetailsCard from './event-details-card.component';
import EventLocationCard from './event-location-card.component';
import SelectedEventNotFound from './selected-event-not-found.component';

const SelectedEvent = () => {
  const [event, setEvent] = React.useState<Event>();
  const [requestPending, setRequestPending] = React.useState<boolean>(false);

  const eventsConfig = useContext(AppConfigContext).website.events;
  const theme = useTheme();
  const isMediumView = useMediaQuery(theme.breakpoints.up('md'));
  const eventName = useLocation().pathname.split('/').pop();

  useEffect(() => {
    if (!event) {
      getEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getEvent = () => {
    setRequestPending(true);

    const config: AxiosRequestConfig = {
      params: { route: eventName },
    };

    axios.get(eventsConfig.routes.get_event, config).then((res) => {
      if (res.data) {
        setEvent(new Event(res.data));
      }
      setRequestPending(false);
    });
  };

  return (
    <Box component="main" className="center-container">
      {!requestPending && event ? (
        <Box>
          <Card raised>
            <CardMedia
              component="img"
              image={event.imageUrl}
              alt={event.name}
            />
          </Card>
          <Box
            display="grid"
            gap="2rem"
            padding={isMediumView ? '2rem' : '1rem'}
          >
            <Typography variant="h4" component="h1" fontWeight="bolder">
              {event.name}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: isMediumView ? '1fr 1fr' : '1fr',
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gap: '1rem',
                  gridAutoFlow: 'row',
                }}
              >
                <EventDateTimeCard event={event} />
                <EventLocationCard eventLocation={event.location} />
              </Box>
              <EventDetailsCard event={event} />
            </Box>
          </Box>
        </Box>
      ) : requestPending ? (
        <LoadingIndication loadingText="Retrieving event info..." />
      ) : (
        <SelectedEventNotFound />
      )}
    </Box>
  );
};

export default SelectedEvent;
