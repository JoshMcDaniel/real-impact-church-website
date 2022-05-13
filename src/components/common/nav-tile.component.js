import { Icon, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const NavTile = (props) => {
  return (
    <Box display="grid" gap="1rem" gridAutoFlow="row" maxWidth={300}>
      <Typography variant="h5" fontWeight="bolder">
        {props.title}
      </Typography>
      <Typography variant="hp">{props.summary}</Typography>
      <Box
        display="grid"
        gap="0.5rem"
        gridAutoFlow="column"
        width="fit-content"
      >
        {/* <Typography variant="p" color="secondary" fontWeight="bold">
          {props.linkText}
        </Typography> */}
        <Link
          href={props.route}
          variant="p"
          color="secondary"
          fontWeight="bold"
        >
          {props.linkText}
        </Link>
        <Icon color="secondary">arrow_forward</Icon>
      </Box>
    </Box>
  );
};

export default NavTile;
