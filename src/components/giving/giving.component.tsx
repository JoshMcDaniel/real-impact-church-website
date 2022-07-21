import { Box, Paper } from '@mui/material';
import React from 'react';
import { useGivingConfig } from '../../config/app-config-hooks';
import SectionIntroImage from '../home/section-intro-image.component';
import OnlineGiving from './online-giving.component';
import OtherGiving from './other-giving.component';

export const Giving = () => {
  const { intro_section, online_giving } = useGivingConfig();
  const introImage = intro_section.images.intro_image;
  const introText = intro_section.text;

  return (
    <Box>
      <SectionIntroImage
        imagePath={introImage?.path}
        primaryText={introText?.primary}
        subText={introText?.sub}
      />
      <Box display="grid" gap="2rem">
        <Paper
          sx={{
            width: '100%',
            padding: '2rem 1rem',
          }}
        >
          <OnlineGiving
            description={online_giving.description}
            furtherInfo={online_giving.further_info}
            givingPath={online_giving.giving_path}
          />
        </Paper>
        <Box
          sx={{
            width: '100%',
            padding: '2rem 1rem',
          }}
        >
          <OtherGiving />
        </Box>
      </Box>
    </Box>
  );
};

export default Giving;
