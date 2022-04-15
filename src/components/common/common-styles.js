export const centerFixedBackgroundImage = (path) => {
  return {
    backgroundImage: `url(${path})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    zIndex: '-1',
  };
};
