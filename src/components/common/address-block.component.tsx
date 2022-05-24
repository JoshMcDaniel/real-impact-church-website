import { Box, Divider, Typography } from '@mui/material';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import NavBtn from './nav-to-location-btn.component';
import * as React from 'react';

export const AddressBlock = () => {
  const address =
    React.useContext(AppConfigContext)?.organization?.contact?.address;
  return (
    <Box
      component="section"
      padding="1rem"
      display="grid"
      gap="1rem"
      justifyContent="center"
      textAlign="center"
    >
      <Typography variant="h4">Address</Typography>
      <Typography>{address}</Typography>
      <Divider />
      <NavBtn label={'Take me to church!'} />
    </Box>
  );
};

export default AddressBlock;
