import { Box, Typography } from '@mui/material';
import * as React from 'react';

export type AboutDescriptionContainer = {
  descriptions: AboutDescriptionProps[];
};

export type AboutDescriptionProps = {
  title_text: string;
  description: string;
};

export const AboutDescription = (props: AboutDescriptionProps) => {
  return (
    <Box display="grid" gap="1rem" justifyItems="center" component={'section'}>
      <Typography variant="h4" width="fit-content">
        {props.title_text}
      </Typography>
      <Typography width="fit-content">{props.description}</Typography>
    </Box>
  );
};

export default AboutDescription;
