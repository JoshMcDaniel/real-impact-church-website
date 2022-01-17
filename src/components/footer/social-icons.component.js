import { List, ListItem, ListItemIcon } from '@mui/material';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';

export const SocialIcons = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="social icons">
        <List
          sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            width: 'fit-content',
          }}
        >
          <ListItem>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
