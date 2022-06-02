import {
  Box,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import axios, { AxiosRequestConfig } from 'axios';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import SectionIntroImage from '../home/section-intro-image.component';
import EventCard from './event-card.component';
import { OrgEvent } from './events.component';
import NoEvents from './no-events.component';

const SelectedEvent = () => {
  const [event, setEvent] = React.useState<OrgEvent>();
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
      setEvent(res.data);
      setRequestPending(false);
      console.log(res.data);
    });
  };

  return (
    <Box component="main" className="center-container">
      {!requestPending && !event ? (
        <NoEvents />
      ) : (
        <Box>
          <SectionIntroImage
            imagePath={event?.imageUrl || ''}
            primaryText={''}
            subText={''}
          />
          <Box gap="2rem" padding={isMediumView ? '2rem' : '1rem'}>
            <Typography variant="h3" component="h1">
              {event ? event.name : <Skeleton />}
            </Typography>
            <Paper
              sx={{
                padding: '1rem',
              }}
            >
              {event ? new Date(event.date) : <Skeleton />}
            </Paper>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SelectedEvent;
