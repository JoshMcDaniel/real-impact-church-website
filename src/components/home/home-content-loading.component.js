import { Box, Skeleton } from '@mui/material';

export const HomeContentLoading = () => {
  const skeletonStyle = {
    width: '80vw',
    height: 120,
  };

  return (
    <Box
      component="section"
      position="absolute"
      top="0"
      bottom="0"
      left="0"
      right="0"
      display="grid"
      gap="2rem"
      justifyContent="center"
      alignContent="center"
    >
      <Skeleton variant="rectangular" style={skeletonStyle} />
      <Skeleton style={skeletonStyle} />
      <Skeleton style={skeletonStyle} />
      <Skeleton animation={false} style={skeletonStyle} />
    </Box>
  );
};
