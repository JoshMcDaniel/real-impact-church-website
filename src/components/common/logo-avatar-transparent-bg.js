import { Avatar } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

/**
 * @returns the logo in an Avatar format.
 */
export const LogoAvatarTransparentBg = () => {
  const configContext = useContext(AppConfigContext);
  const { path, description } = configContext.organization.logos.simple_logo;

  return (
    <Avatar variant="circular" className="logo-avatar">
      <img src={path} alt={description} />
    </Avatar>
  );
};
