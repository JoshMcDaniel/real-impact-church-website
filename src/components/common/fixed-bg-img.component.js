import { centerFixedBackgroundImage } from '../common/common-styles';

export const fixedBackgroundImageId = 'fixedBackgroundImage';

export const FixedBackgroundImage = (props) => {
  const src = props.imgPath;
  const image = new Image();
  image.addEventListener('load', () => {
    const element = document.getElementById(fixedBackgroundImageId);
    element.style.backgroundImage = 'url(' + src + ')';
    if (props.onImageLoad) {
      props.onImageLoad();
    }
  });
  image.src = src;

  return (
    <div
      id={fixedBackgroundImageId}
      style={centerFixedBackgroundImage(props)}
    ></div>
  );
};

export default FixedBackgroundImage;
