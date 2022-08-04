import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import { TitleLogoImage } from '../common/title-logo-image';
import { HideOnScroll } from '../common/hide-on-scroll';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EventIcon from '@mui/icons-material/Event';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SvgIcon from '@mui/icons-material/Event';
import { Close } from '@mui/icons-material';
import { useOrganizationConfig } from '../../config/app-config-hooks';
import AvatarWithFallbacks from '../common/avatar-with-fallbacks.component';
import { Divider } from '@mui/material';

const ResponsiveAppBar = () => {
  const pages = [
    { displayText: 'Home', route: '/', icon: HomeIcon },
    { displayText: 'About Us', route: '/about', icon: HelpCenterIcon },
    { displayText: 'Media', route: '/media', icon: PermMediaIcon },
    { displayText: 'Events', route: '/events', icon: EventIcon },
    { displayText: 'Giving', route: '/giving', icon: CardGiftcardIcon },
    {
      displayText: 'Connect',
      route: '/connect',
      icon: ConnectWithoutContactIcon,
    },
  ];

  const [menuOpen, setMenuOpen] = React.useState(false);
  const logo = useOrganizationConfig().logos.simple_logo;
  const location = useLocation();

  const isActiveRoute = (route: string): boolean => {
    return location.pathname === route;
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <TitleLogoImage height="25px" />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: { xs: 'right', md: 'right' },
              }}
            >
              <IconButton
                size="large"
                aria-label="menu button"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setMenuOpen(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={'right'}
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
              >
                <AppBar
                  position="relative"
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto',
                    justifyItems: 'space-between',
                    alignItems: 'center',
                    padding: '0 16px',
                  }}
                >
                  <AvatarWithFallbacks
                    src={logo.path}
                    alt={logo.description}
                    justifySelf="left"
                    maxHeight="35px"
                    maxWidth="35px"
                  />
                  <IconButton
                    aria-label="close"
                    onClick={() => setMenuOpen(false)}
                    size="large"
                    color="inherit"
                    sx={{
                      display: 'grid',
                      justifyContent: 'right',
                      padding: '12px',
                    }}
                  >
                    <Close />
                  </IconButton>
                </AppBar>
                <Divider
                  sx={{
                    marginBottom: '8px',
                  }}
                />
                {pages.map((page) => (
                  <MenuItem
                    key={page.displayText}
                    component={Link}
                    to={page.route}
                    onClick={() => setMenuOpen(false)}
                    sx={{
                      display: 'grid',
                      gap: '1rem',
                      gridTemplateColumns: 'auto 1fr',
                      justifyItems: 'left',
                    }}
                  >
                    <SvgIcon
                      component={page.icon}
                      color={
                        isActiveRoute(page.route) ? 'secondary' : 'primary'
                      }
                    />
                    <Typography
                      textAlign="center"
                      color={
                        isActiveRoute(page.route) ? 'secondary' : 'primary'
                      }
                    >
                      {page.displayText}
                    </Typography>
                  </MenuItem>
                ))}
              </Drawer>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: { xs: 'right', md: 'right' },
                columnGap: { xs: 'opx', md: '1em' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.displayText}
                  onClick={() => setMenuOpen(false)}
                  component={Link}
                  to={page.route}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.displayText}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default ResponsiveAppBar;
