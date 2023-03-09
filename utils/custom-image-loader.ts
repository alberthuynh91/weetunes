export const customLoader = (props) => {
  const { src, width } = props;
  let newSrc = src.split('/');
  newSrc[newSrc.length - 1] = `${width}x${width}bb.webp`;
  return newSrc.join('/');
};