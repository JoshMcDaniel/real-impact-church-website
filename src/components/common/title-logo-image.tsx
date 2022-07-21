import { Container } from '@mui/material';
import { useOrganizationConfig } from '../../config/app-config-hooks';
import * as React from 'react';

type TitleLogoImageProps = {
  height: string;
  width: string;
};

export const TitleLogoImage = (props: TitleLogoImageProps) => {
  const { path, description } = useOrganizationConfig().logos.title_logo;

  return (
    <Container
      component="figure"
      sx={{
        display: 'grid',
        alignItems: 'center',
        margin: '0',
        padding: '0',
        width: 'fit-content',
      }}
    >
      <img
        src={path}
        alt={description}
        height={props.height}
        width={props.width}
      />
    </Container>
  );
};

TitleLogoImage.defaultProps = {
  height: '50px',
  width: '150px',
};
