import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useStaffConfig } from '../../config/app-config-hooks';
import { BioBlock, BioBlockSkeleton } from '../common/bio-block.component';
import React from 'react';

export const Staff = () => {
  const placeholders = new Array(2).fill(null);
  const [staff, setStaff] = useState([]);

  const { routes, header_text } = useStaffConfig();
  const theme = useTheme();
  const isMediumView = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (!staff.length) {
      getAllStaff();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllStaff = () => {
    axios.get(routes.get_all_staff).then((res) => {
      setStaff(res.data);
    });
  };

  return (
    <Box
      component="main"
      className="center-container"
      gap="2rem"
      padding={isMediumView ? '2rem' : '1rem'}
    >
      <Typography variant="h4" component="h1" fontWeight="bolder">
        {header_text}
      </Typography>
      {staff.length > 0
        ? staff.map((person, index) => <BioBlock key={index} person={person} />)
        : placeholders.map((_, index) => <BioBlockSkeleton key={index} />)}
    </Box>
  );
};

export default Staff;
