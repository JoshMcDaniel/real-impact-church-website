import { Container } from '@mui/material';
import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/app-config/app-config.service';

export const TitleLogoImage = (props) => {
  const configContext = useContext(AppConfigContext);
  const logo = configContext.organization.logos.title_logo;
  const { name, description } = logo;
  const imgSrc = '/images/logo/' + name;

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
        src={imgSrc}
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
