import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import * as React from 'react';

export const WebsiteAuthor = (props: { color: string }) => {
  const configContext = useContext(AppConfigContext);
  return (
    <Typography variant="caption" color={props.color}>
      Developed by {configContext.website.author}
    </Typography>
  );
};

export default WebsiteAuthor;
