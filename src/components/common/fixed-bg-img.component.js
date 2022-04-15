import { centerFixedBackgroundImage } from '../common/common-styles';

export const FixedBackgroundImage = (props) => {
  const style = {
    ...centerFixedBackgroundImage(props.imgPath),
  };
  return <div style={style}></div>;
};

export default FixedBackgroundImage;
