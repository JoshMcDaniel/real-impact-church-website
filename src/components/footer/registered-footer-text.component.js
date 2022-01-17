import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const RegisteredFooterText = (props) => {
  const configContext = useContext(AppConfigContext);
  return (
    <Typography variant="caption" color={props.color}>
      &reg; {new Date().getFullYear()} {configContext.organization.full_name}
    </Typography>
  );
};
