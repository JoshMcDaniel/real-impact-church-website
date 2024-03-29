import {
  Box,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AvatarWithFallbacks } from './avatar-with-fallbacks.component';
import * as React from 'react';

const bioBlockConfig = {
  avatar: {
    maxHeight: '300px',
    maxWidth: '300px',
    justifySelf: 'center',
  },
};

export const BioBlockSkeleton = () => {
  const isMediumView = useMediaQuery(useTheme().breakpoints.up('md'));

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
      <Box
        padding={isMediumView ? '2rem' : '1rem'}
        display="grid"
        gap="1rem"
        height="fit-content"
      >
        <Skeleton height="2rem" />
        <Skeleton height="1.5rem" />
        <Skeleton height="8rem" />
      </Box>
    </Box>
  );
};

type BioBlocProps = {
  person: {
    firstName: string;
    lastName: string;
    imgURL: string;
    positionTitle: string;
    description: string;
  };
};

export const BioBlock = (props: BioBlocProps) => {
  const isMediumView = useMediaQuery(useTheme().breakpoints.up('md'));
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
      <AvatarWithFallbacks {...avatarProps} />
      <Box padding={isMediumView ? '2rem' : '2rem 1rem'}>
        <Typography
          variant="h5"
          fontWeight="bold"
        >{`${props.person.firstName} ${props.person.lastName}`}</Typography>
        <Typography variant="subtitle1">
          {props.person.positionTitle}
        </Typography>
        <Typography>{props.person.description}</Typography>
      </Box>
    </Box>
  );
};

export default BioBlock;
