export const centerFixedBackgroundImage = (path) => {
  return {
    backgroundImage: `url(${path})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };
};
