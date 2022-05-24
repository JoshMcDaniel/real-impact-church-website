import { Slide, useScrollTrigger } from '@mui/material';
import * as React from 'react';

export const HideOnScroll = (props: any) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
