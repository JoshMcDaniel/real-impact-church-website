import { Typography } from '@mui/material';
import { useAuthorConfig } from '../../config/app-config-hooks';
import * as React from 'react';

export const WebsiteAuthor = (props: { color: string }) => {
  const { full_name } = useAuthorConfig();
  return (
    <Typography variant="caption" color={props.color}>
      Developed by {full_name}
    </Typography>
  );
};

export default WebsiteAuthor;
