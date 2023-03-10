export const customLoader = (props): string => {
  const { src, width } = props;
  const newSrc = src.split('/');
  newSrc[newSrc.length - 1] = `${width}x${width}bb.webp`;
  return newSrc.join('/');
};