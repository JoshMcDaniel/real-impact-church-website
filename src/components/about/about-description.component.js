import { Box, Typography } from '@mui/material';

export const AboutDescription = (props) => {
  return (
    <Box display="grid" gap="1rem" justifyItems="center" component={'section'}>
      <Typography variant="h4" width="fit-content">
        {props.title}
      </Typography>
      <Typography variant="p" width="fit-content">
        {props.description}
      </Typography>
    </Box>
  );
};

export default AboutDescription;
