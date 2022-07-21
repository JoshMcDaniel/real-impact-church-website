import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useEventsConfig } from '../../config/app-config-hooks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EventCard from './event-card.component';
import NoEvents from './no-events.component';
import { Link } from 'react-router-dom';
import { Event, EventType } from './Event';

export const AllEvents = () => {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [requestPending, setRequestPending] = React.useState<boolean>(false);

  const eventsConfig = useEventsConfig();
  const theme = useTheme();
  const isMediumView = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (!events.length) {
      getAllEvents();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllEvents = () => {
    setRequestPending(true);

    axios.get(eventsConfig.routes.get_all_events).then((res) => {
      const events = res.data.map((e: EventType) => new Event(e));
      setEvents(events);
      setRequestPending(false);
    });
  };

  return (
    <Box
      component="main"
      display="grid"
      margin="auto"
      gap="2rem"
      padding={isMediumView ? '2rem' : '1rem'}
    >
      <Typography variant="h4">{eventsConfig.header_text}</Typography>
      {!requestPending && events.length < 1 ? (
        <NoEvents />
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap="2rem"
        >
          {(events.length > 0 ? events : Array.from(new Array(3))).map(
            (event, index) => (
              <Link
                key={event?.route || index}
                to={`${event?.route || '#'}`}
                style={{ textDecoration: 'none' }}
              >
                <EventCard event={event} />
              </Link>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default AllEvents;
