import { Fab } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';
import NavigationIcon from '@mui/icons-material/Navigation';

export const NavToLocationBtn = (props) => {
  const configContext = useContext(AppConfigContext);
  return (
    <Fab
      variant="extended"
      size="medium"
      color="secondary"
      aria-label="navigation button"
      sx={{
        width: 'fit-content',
        justifySelf: 'center',
      }}
      href={configContext.organization.contact.google_maps_link}
    >
      <NavigationIcon sx={{ mr: 1 }} />
      {props.label || "Let's Go!"}
    </Fab>
  );
};

export default NavToLocationBtn;
