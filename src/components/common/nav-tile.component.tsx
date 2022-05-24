import { Icon, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

type NavTileProps = {
  title: string;
  summary: string;
  route: string;
  linkText: string;
};

export const NavTile = (props: NavTileProps) => {
  return (
    <Box display="grid" gap="1rem" gridAutoFlow="row" maxWidth={300}>
      <Typography variant="h5" fontWeight="bolder">
        {props.title}
      </Typography>
      <Typography>{props.summary}</Typography>
      <Box
        display="grid"
        gap="0.5rem"
        gridAutoFlow="column"
        width="fit-content"
      >
        <Link href={props.route} color="secondary" fontWeight="bold">
          {props.linkText}
        </Link>
        <Icon color="secondary">arrow_forward</Icon>
      </Box>
    </Box>
  );
};

export default NavTile;
