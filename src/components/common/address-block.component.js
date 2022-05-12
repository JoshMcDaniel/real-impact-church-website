import { Box, Divider, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import NavBtn from '../common/nav-to-location-btn.component';

export const AddressBlock = (props) => {
  const address = useContext(AppConfigContext)?.organization?.contact?.address;
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
      <Typography variant="p">{address}</Typography>
      <Divider />
      <NavBtn label={'Take me to church!'} />
    </Box>
  );
};

export default AddressBlock;
