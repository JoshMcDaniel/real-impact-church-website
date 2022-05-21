import { Box, Skeleton, Typography, useMediaQuery } from '@mui/material';
import { AvatarWithFallbacks } from './avatar-with-fallbacks.component';

const bioBlockConfig = {
  avatar: {
    maxHeight: '300px',
    maxWidth: '300px',
    justifySelf: 'center',
  },
};

export const BioBlockSkeleton = () => {
  const isMediumView = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Box
      component="section"
      display="grid"
      gridTemplateColumns={isMediumView ? '300px 1fr' : '1fr'}
      gridTemplateRows={isMediumView ? '1fr' : '300px 1fr'}
      height={isMediumView ? '300px' : 'auto'}
    >
      <Skeleton
        variant="circular"
        sx={{
          justifySelf: bioBlockConfig.avatar.justifySelf,
          maxHeight: bioBlockConfig.avatar.maxHeight,
          maxWidth: bioBlockConfig.avatar.maxWidth,
          height: '100%',
          width: '100%',
        }}
      />
      <Box padding="2rem" display="grid" gap="1rem" height="fit-content">
        <Skeleton variant="h5" height="2rem" />
        <Skeleton variant="subtitle" height="1.5rem" />
        <Skeleton variant="p" height="8rem" />
      </Box>
    </Box>
  );
};

export const BioBlock = (props) => {
  const isMediumView = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const avatarProps = {
    ...bioBlockConfig.avatar,
    alt: `${props.person.firstName} ${props.person.lastName}`,
    src: props.person.imgURL,
  };

  return (
    <Box
      component="section"
      display="grid"
      gridTemplateColumns={isMediumView ? '300px 1fr' : '1fr'}
      gridTemplateRows={isMediumView ? '1fr' : '300px 1fr'}
      height={isMediumView ? '300px' : 'auto'}
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

export default BioBlock;
