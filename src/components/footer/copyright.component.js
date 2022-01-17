import { Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const Copyright = () => {
  const configContext = useContext(AppConfigContext);
  return (
    <Typography
      variant="caption"
      component="div"
      width="100%"
      textAlign="center"
      marginTop="1rem"
    >
      &copy; {new Date().getFullYear()} {configContext.organization.full_name}
    </Typography>
  );
};
