export const centerFixedBackgroundImage = (props) => ({
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: props.height ? props.height : '100vh',
  width: props.width ? props.width : '100vw',
  position: 'absolute',
  zIndex: '-1',
});

export const centerFixedBackgroundImageWithPath = (path) => {
  return {
    ...centerFixedBackgroundImage,
    backgroundImage: `url(${path})`,
  };
};
