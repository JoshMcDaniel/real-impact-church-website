import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const AboutDescription = (props) => {
  const aboutDescriptionConfig =
    useContext(AppConfigContext).website.about.about_description;
  const title = aboutDescriptionConfig.title_text;
  const description = aboutDescriptionConfig.description;

  return (
    <Box
      padding="2rem"
      display="grid"
      gap="1rem"
      component={props.component ? props.component : 'section'}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography variant="p">{description}</Typography>
    </Box>
  );
};

export default AboutDescription;
