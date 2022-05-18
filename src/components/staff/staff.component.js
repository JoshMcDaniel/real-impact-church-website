import { Box, useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import { BioBlock } from '../common/bio-block.component';

export const Staff = () => {
  const [staff, setStaff] = useState([]);

  const configContext = useContext(AppConfigContext);
  const isMediumView = useMediaQuery((theme) => theme.breakpoints.up('md'));

  useEffect(() => {
    if (!staff.length) {
      getAllStaff();
    }
  }, []);

  const getAllStaff = () => {
    axios.get(configContext.website.staff.routes.get_all_staff).then((res) => {
      setStaff(res.data);
    });
  };
  return (
    <Box
      component="main"
      display="grid"
      gap="2rem"
      padding={isMediumView ? '2rem 6rem' : '2rem'}
    >
      {staff.map((person, index) => (
        <BioBlock key={index} person={person} />
      ))}
    </Box>
  );
};

export default Staff;
