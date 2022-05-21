import { Box, Typography, useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { BioBlock, BioBlockSkeleton } from '../common/bio-block.component';

export const Staff = () => {
  const placeholders = new Array(2).fill(null);
  const [staff, setStaff] = useState([]);

  const staffConfig = useContext(AppConfigContext).website.staff;
  const isMediumView = useMediaQuery((theme) => theme.breakpoints.up('md'));

  useEffect(() => {
    if (!staff.length) {
      getAllStaff();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllStaff = () => {
    axios.get(staffConfig.routes.get_all_staff).then((res) => {
      setStaff(res.data);
    });
  };

  return (
    <Box
      component="main"
      display="grid"
      gap="2rem"
      padding={isMediumView ? '2rem' : '2rem'}
      maxWidth="1140px"
      margin="auto"
    >
      <Typography variant="h4" component="h1" fontWeight="bolder">
        {staffConfig.header_text}
      </Typography>
      {staff.length > 0
        ? staff.map((person, index) => <BioBlock key={index} person={person} />)
        : placeholders.map((_, index) => <BioBlockSkeleton key={index} />)}
    </Box>
  );
};

export default Staff;
