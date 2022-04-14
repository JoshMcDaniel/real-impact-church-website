import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const RegisteredFooterText = (props) => {
  const configContext = useContext(AppConfigContext);
  const { registration_year, full_name } = configContext.organization;
  return (
    <Typography variant="caption" color={props.color}>
      &reg; {registration_year} {full_name}
    </Typography>
  );
};
