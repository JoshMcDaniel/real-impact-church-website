import { centerFixedBackgroundImage } from './common-styles';
import * as React from 'react';
import './fixed-bg-img.component.css';

export const fixedBackgroundImageId = 'fixedBackgroundImage';

export type FixedBackgroundImageProps = {
  height: string;
  width: string;
  imgPath?: string;
  onImageLoad?: () => any;
};

export const FixedBackgroundImage = (props: FixedBackgroundImageProps) => {
  const src = props.imgPath;
  const image = new Image();
  image.addEventListener('load', () => {
    const element = document.getElementById(fixedBackgroundImageId);
    if (element) {
      element.style.backgroundImage = 'url(' + src + ')';
    }
    if (props.onImageLoad) {
      props.onImageLoad();
    }
  });

  if (src) {
    image.src = src;
  }

  return (
    <div
      id={fixedBackgroundImageId}
      style={centerFixedBackgroundImage(props)}
      className="center-fixed-background-image"
    ></div>
  );
};

export default FixedBackgroundImage;
