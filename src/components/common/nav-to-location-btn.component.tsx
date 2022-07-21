import { Fab } from '@mui/material';
import { useOrganizationConfig } from '../../config/app-config-hooks';
import NavigationIcon from '@mui/icons-material/Navigation';
import * as React from 'react';

type NavToLocationBtnProps = {
  label: string;
};

export const NavToLocationBtn = (props: NavToLocationBtnProps) => {
  const { google_maps_link } = useOrganizationConfig().contact;
  return (
    <Fab
      variant="extended"
      size="medium"
      color="secondary"
      aria-label="Navigation button"
      sx={{
        width: 'fit-content',
        justifySelf: 'center',
      }}
      href={google_maps_link}
    >
      <NavigationIcon sx={{ mr: 1 }} />
      {props.label || "Let's Go!"}
    </Fab>
  );
};

export default NavToLocationBtn;
