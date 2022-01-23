import { Avatar } from '@mui/material';
// import logo_transparent_bg from '/images/logo/logo_no_bg.png';

/**
 * @returns the logo in an Avatar format.
 */
export const LogoAvatarTransparentBg = () => {
  return (
    <Avatar variant="circular" className="logo-avatar">
      <img src="/images/logo/logo_no_bg.png" alt="logo" />
    </Avatar>
  );
};
