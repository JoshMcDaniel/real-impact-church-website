import { Box, Divider, Typography } from '@mui/material';
import { useOrganizationConfig } from '../../config/app-config-hooks';
import NavBtn from './nav-to-location-btn.component';
import * as React from 'react';

export const AddressBlock = () => {
  const { full_address } = useOrganizationConfig().contact;
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
      <Typography>{full_address}</Typography>
      <Divider />
      <NavBtn label={'Take me to church!'} />
    </Box>
  );
};

export default AddressBlock;
