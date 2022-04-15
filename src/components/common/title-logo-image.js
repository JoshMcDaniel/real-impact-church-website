import { Container } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const TitleLogoImage = (props) => {
  const configContext = useContext(AppConfigContext);
  const { path, description } = configContext.organization.logos.title_logo;

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
