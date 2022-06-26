import { Box, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import SectionIntroImage from '../home/section-intro-image.component';
import OnlineGiving from './online-giving.component';
import OtherGiving from './other-giving.component';

export const Giving = () => {
  const givingConfig = useContext(AppConfigContext).website.giving;
  const introSection = givingConfig.intro_section;
  const introImage = introSection.images.intro_image;
  const introText = introSection.text;
  const onlineGiving = givingConfig.online_giving;

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
            description={onlineGiving.description}
            furtherInfo={onlineGiving.further_info}
            givingPath={onlineGiving.giving_path}
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
