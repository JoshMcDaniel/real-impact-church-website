import { Box, CircularProgress, Typography } from '@mui/material';

export const Loading = (props) => {
  return (
    <Box
      component="section"
      height={props.height ? props.height : '100%'}
      width={props.width ? props.width : '100%'}
      display="grid"
      gap="2rem"
      justifyItems="center"
      alignContent="center"
      justifySelf="center"
      alignSelf="center"
      zIndex="999"
    >
      <Typography variant="p">{props.loadingText}</Typography>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loading;
