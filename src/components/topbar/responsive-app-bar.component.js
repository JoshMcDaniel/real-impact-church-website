import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { LogoAvatarTransparentBg } from '../common/logo-avatar-transparent-bg';

const ResponsiveAppBar = () => {
  const pages = [
    { displayText: 'Home', route: '/' },
    { displayText: 'Sermons', route: '/sermons' },
    { displayText: 'About Us', route: '/about' },
    { displayText: 'Events', route: '/events' },
    { displayText: 'Edit Events', route: '/events/edit' },
    { displayText: 'Give Online', route: '/online-giving' },
    { displayText: 'Contact Us', route: '/contact' },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoAvatarTransparentBg />

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
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.displayText}
                  component={Link}
                  to={page.route}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.displayText}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
                onClick={handleCloseNavMenu}
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
  );
};

export default ResponsiveAppBar;
