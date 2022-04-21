const Image = ({ url, alt, onImageLoad, className }) => {
  const onLoad = onImageLoad;
  return <img className={className} src={url} onLoad={onLoad} alt={alt} />;
};
export default Image;
