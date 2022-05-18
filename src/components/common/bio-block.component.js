import { Box, Typography, useMediaQuery } from '@mui/material';
import { AvatarWithFallbacks } from './avatar-with-fallbacks.component';

export const BioBlock = (props) => {
  const isMediumView = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const avatarProps = {
    height: '300px',
    width: '300px',
    alt: `${props.person.firstName} ${props.person.lastName}`,
    src: props.person.imgURL,
  };

  return (
    <Box
      component="section"
      display="grid"
      maxWidth="960px"
      gridAutoFlow={isMediumView ? 'column' : 'row'}
      justifyItems={isMediumView ? 'start' : 'center'}
    >
      <AvatarWithFallbacks avatarProps={avatarProps} />
      <Box padding="2rem">
        <Typography
          variant="h5"
          fontWeight="bold"
        >{`${props.person.firstName} ${props.person.lastName}`}</Typography>
        <Typography variant="subtitle1">
          {props.person.positionTitle}
        </Typography>
        <Typography variant="p">{props.person.description}</Typography>
      </Box>
    </Box>
  );
};
