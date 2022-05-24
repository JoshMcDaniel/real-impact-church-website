import { FixedBackgroundImageProps } from './fixed-bg-img.component';

export const centerFixedBackgroundImage = (
  props: FixedBackgroundImageProps
) => ({
  height: props.height ? props.height : '100vh',
  width: props.width ? props.width : '100vw',
});

type CenterFixedBackgroundImageWithPathProps = {
  path: string;
};

export const centerFixedBackgroundImageWithPath = (
  path: CenterFixedBackgroundImageWithPathProps
) => {
  return {
    ...centerFixedBackgroundImage,
    backgroundImage: `url(${path})`,
  };
};
