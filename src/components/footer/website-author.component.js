import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const WebsiteAuthor = (props) => {
  const configContext = useContext(AppConfigContext);
  return (
    <Typography variant="caption" color={props.color}>
      Developed by {configContext.website.author}
    </Typography>
  );
};
