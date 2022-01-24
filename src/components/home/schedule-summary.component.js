import { Container, Divider, Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const ScheduleSummary = () => {
  const configContext = useContext(AppConfigContext);
  const services = configContext.organization.schedule.services;

  return (
    <Box variant="section" display="grid">
      <Container
        height="fit-content"
        sx={{
          justifySelf: 'center',
          alignSelf: 'center',
          padding: '2rem',
          display: 'grid',
          rowGap: '1.75rem',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2">Worship Service Schedule</Typography>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              rowGap: '1.75rem',
            }}
          >
            <Typography variant="h4">{service.title}</Typography>
            <Box
              sx={{
                display: 'grid',
                rowGap: '0.25rem',
              }}
            >
              <Typography variant="subtitle2" fontSize="1.5rem">
                Every {service.day_of_week} at {service.time}
              </Typography>
              <Typography variant="body1">{service.description}</Typography>
            </Box>
            {index !== services.length - 1 && <Divider />}
          </Box>
        ))}
        <Fab
          variant="extended"
          size="medium"
          color="secondary"
          aria-label="navigation button"
          sx={{
            width: 'fit-content',
            justifySelf: 'center',
          }}
          href={configContext.organization.contact.google_maps_link}
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Take me to church!
        </Fab>
      </Container>
    </Box>
  );
};
