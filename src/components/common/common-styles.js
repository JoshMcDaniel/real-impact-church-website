export const centerFixedBackgroundImage = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  zIndex: '-1',
};

export const centerFixedBackgroundImageWithPath = (path) => {
  return {
    ...centerFixedBackgroundImage,
    backgroundImage: `url(${path})`,
  };
};
