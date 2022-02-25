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
    <Box display="grid">
      <Container
        component="section"
        height="fit-content"
        sx={{
          justifySelf: 'center',
          alignSelf: 'center',
          padding: '2rem',
          display: 'grid',
          rowGap: '2rem',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4">Schedule</Typography>
        <Box
          sx={{
            display: 'grid',
            rowGap: '1rem',
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                display: 'grid',
                rowGap: '0.5rem',
              }}
            >
              <Typography variant="h5">{service.title}</Typography>
              <Box
                sx={{
                  display: 'grid',
                  rowGap: '0.25rem',
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight="700"
                  color="secondary"
                >
                  {service.day_of_week} at <time>{service.time}</time>
                </Typography>
                <Typography variant="body2" component="summary">
                  {service.description}
                </Typography>
              </Box>
              {index !== services.length - 1 && (
                <Divider
                  sx={{
                    marginTop: '1rem',
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
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
