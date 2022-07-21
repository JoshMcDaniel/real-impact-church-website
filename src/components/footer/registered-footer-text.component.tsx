import { Typography } from '@mui/material';
import { useOrganizationConfig } from '../../config/app-config-hooks';
import * as React from 'react';

export const RegisteredFooterText = (props: { color: string }) => {
  const { registration_year, full_name } = useOrganizationConfig();
  return (
    <Typography variant="caption" color={props.color}>
      &reg; {registration_year} {full_name}
    </Typography>
  );
};
